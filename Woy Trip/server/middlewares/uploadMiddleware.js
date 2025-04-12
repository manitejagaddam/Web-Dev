import cloudinary from '../config/cloudinary.js';
import { AppError } from '../utils/appError.js';
import { catchAsync } from '../utils/catchAsync.js';
import dotenv from 'dotenv';

dotenv.config();

// Configure Cloudinary (Ensure environment variables are set)
if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  throw new Error('Cloudinary environment variables are not set!');
}



// Upload image to Cloudinary
export const uploadImage = catchAsync(async (req, res, next) => {
  if (!req.file) {
    return next(new AppError('No file uploaded', 400));
  }


  // Upload image buffer to Cloudinary
  const uploadStream = cloudinary.v2.uploader.upload_stream(
    {
      folder: 'card_gallery',
      use_filename: true,
    },
    (error, result) => {
      if (error) {
        return next(new AppError('Failed to upload image to Cloudinary', 500));
      }

      // Attach image details to request body
      req.body.imageUrl = result.secure_url;
      req.body.imagePublicId = result.public_id;

      next();
    }
  );

  uploadStream.end(req.file.buffer);
});
