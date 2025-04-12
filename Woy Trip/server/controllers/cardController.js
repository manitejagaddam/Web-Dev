import Card from "../models/Card.js";
import cloudinary from "../config/cloudinary.js";
import { AppError } from "../utils/appError.js";
import { catchAsync } from "../utils/catchAsync.js";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Helper function to upload image to Cloudinary
const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "card_gallery", use_filename: true },
      (error, result) => {
        if (error) reject(new AppError("Cloudinary upload failed", 500));
        else resolve(result);
      }
    );
    stream.end(fileBuffer);
  });
};

// @desc    Create a new card
// @route   POST /api/cards
// @access  Private
export const createCard = catchAsync(async (req, res, next) => {
  const { title, location, imageUrl, imagePublicId, features, popular } = req.body;

  if (!title || !location || !imageUrl) {
    return next(new AppError("Please provide all required fields", 400));
  }

  // Ensure features is correctly parsed if sent as a JSON string
  let parsedFeatures = features;
  if (typeof features === "string") {
    try {
      parsedFeatures = JSON.parse(features);
    } catch (error) {
      return next(new AppError("Invalid features format", 400));
    }
  }

  const card = await Card.create({
    title,
    location,
    imageUrl,
    imagePublicId,
    features: parsedFeatures,
    popular: popular === "true" || popular === true, // Ensure boolean value
  });

  res.status(201).json(card);
});

// @desc    Get all cards
// @route   GET /api/cards
// @access  Public
export const getCards = catchAsync(async (req, res, next) => {
  const cards = await Card.find({}).sort({ createdAt: -1 });
  res.json(cards);
});

// @desc    Update a card
// @route   PUT /api/cards/:id
// @access  Private
export const updateCard = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const card = await Card.findById(req.params.id);
  if (!card) return next(new AppError("Card not found", 404));

  // Handle image upload if file exists
  if (req.file) {
    try {
      const result = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.v2.uploader.upload_stream(
          {
            folder: "card_gallery",
            use_filename: true,
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        uploadStream.end(req.file.buffer);
      });

      // Delete old image if exists
      if (card.imagePublicId) {
        await cloudinary.v2.uploader.destroy(card.imagePublicId);
      }

      card.imageUrl = result.secure_url;
      card.imagePublicId = result.public_id;
    } catch (error) {
      console.error("Cloudinary Error:", error);
      return next(new AppError("Image update failed", 500));
    }
  }

  // Update other fields
  card.title = req.body.title || card.title;
  card.location = req.body.location || card.location;

  // Ensure features are correctly parsed
  if (req.body.features) {
    try {
      card.features =
        typeof req.body.features === "string"
          ? JSON.parse(req.body.features)
          : req.body.features;
    } catch (e) {
      return next(new AppError("Invalid features format", 400));
    }
  }

  // Ensure popular is a boolean
  if (req.body.popular !== undefined) {
    card.popular = req.body.popular === "true";
  }

  const updatedCard = await card.save();
  res.status(200).json({
    status: "success",
    data: updatedCard,
  });
});


// @desc    Delete a card
// @route   DELETE /api/cards/:id
// @access  Private
export const deleteCard = catchAsync(async (req, res, next) => {
  const card = await Card.findById(req.params.id);
  if (!card) return next(new AppError("Card not found", 404));

  await card.deleteOne();
  res.json({ message: "Card removed" });
});

