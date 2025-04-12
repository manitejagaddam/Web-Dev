// </div>
//                   <input
//                     id="last_name"
//                     type="text"
//                     {...register('last_name', { required: 'Last name is required' })}
//                     className={`block w-full pl-10 sm:text-sm rounded-md ${
//                       errors.last_name
//                         ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
//                         : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
//                     }`}
//                   />
//                 </div>
//                 {errors.last_name && (
//                   <p className="mt-2 text-sm text-red-600">{errors.last_name.message}</p>
//                 )}
//               </div>
//             </div>
            
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="email"
//                   type="email"
//                   autoComplete="email"
//                   {...register('email', {
//                     required: 'Email is required',
//                     pattern: {
//                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                       message: 'Invalid email address'
//                     }
//                   })}
//                   className={`block w-full pl-10 sm:text-sm rounded-md ${
//                     errors.email
//                       ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
//                       : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
//                   }`}
//                 />
//               </div>
//               {errors.email && (
//                 <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
//               )}
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="password"
//                   type="password"
//                   autoComplete="new-password"
//                   {...register('password', { 
//                     required: 'Password is required',
//                     minLength: {
//                       value: 8,
//                       message: 'Password must be at least 8 characters'
//                     }
//                   })}
//                   className={`block w-full pl-10 sm:text-sm rounded-md ${
//                     errors.password
//                       ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
//                       : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
//                   }`}
//                 />
//               </div>
//               {errors.password && (
//                 <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
//               )}
//             </div>
            
//             <div>
//               <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
//                 Confirm password
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="confirm_password"
//                   type="password"
//                   {...register('confirm_password', { 
//                     required: 'Please confirm your password',
//                     validate: value => value === password || 'Passwords do not match'
//                   })}
//                   className={`block w-full pl-10 sm:text-sm rounded-md ${
//                     errors.confirm_password
//                       ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
//                       : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
//                   }`}
//                 />
//               </div>
//               {errors.confirm_password && (
//                 <p className="mt-2 text-sm text-red-600">{errors.confirm_password.message}</p>
//               )}
//             </div>

//             <div className="relative flex items-start">
//               <div className="flex items-center h-5">
//                 <input
//                   id="terms"
//                   name="terms"
//                   type="checkbox"
//                   required
//                   className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
//                 />
//               </div>
//               <div className="ml-3 text-sm">
//                 <label htmlFor="terms" className="font-medium text-gray-700">
//                   I agree to the terms and conditions
//                 </label>
//                 <p className="text-gray-500">
//                   By creating an account, you agree to our Terms of Service and Privacy Policy.
//                 </p>
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed"
//               >
//                 {loading ? (
//                   <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
//                 ) : (
//                   'Create account'
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;





// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Mail, Lock, User } from "lucide-react";

// const RegisterForm = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const [loading, setLoading] = useState(false);
//   const password = watch("password");

//   const onSubmit = (data) => {
//     setLoading(true);
//     setTimeout(() => {
//       console.log("Form Submitted", data);
//       setLoading(false);
//     }, 2000);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="max-w-md w-full space-y-8 p-6 bg-white shadow-md rounded-md">
//         <h2 className="text-center text-2xl font-bold text-gray-900">Create an Account</h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* First Name */}
//           <div>
//             <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
//               First Name
//             </label>
//             <div className="mt-1 relative rounded-md shadow-sm">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <User className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 id="first_name"
//                 type="text"
//                 {...register("first_name", { required: "First name is required" })}
//                 className={`block w-full pl-10 sm:text-sm rounded-md ${
//                   errors.first_name
//                     ? "border-red-300 focus:ring-red-500 focus:border-red-500"
//                     : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
//                 }`}
//               />
//             </div>
//             {errors.first_name && (
//               <p className="mt-2 text-sm text-red-600">{errors.first_name.message}</p>
//             )}
//           </div>

//           {/* Last Name */}
//           <div>
//             <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
//               Last Name
//             </label>
//             <div className="mt-1 relative rounded-md shadow-sm">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <User className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 id="last_name"
//                 type="text"
//                 {...register("last_name", { required: "Last name is required" })}
//                 className={`block w-full pl-10 sm:text-sm rounded-md ${
//                   errors.last_name
//                     ? "border-red-300 focus:ring-red-500 focus:border-red-500"
//                     : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
//                 }`}
//               />
//             </div>
//             {errors.last_name && (
//               <p className="mt-2 text-sm text-red-600">{errors.last_name.message}</p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed"
//             >
//               {loading ? (
//                 <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
//               ) : (
//                 "Create account"
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;


// import React from "react";
// import { Link } from "react-router-dom";
// import { Mail, Lock, User, AlertCircle } from "lucide-react";

// const RegisterPage = () => {
//   return (
//     <div className="flex min-h-screen bg-gradient-to-r from-primary-700 to-primary-900 text-white">
//       <div className="container mx-auto flex items-center justify-center">
//         <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 text-gray-900">
//           <h2 className="text-3xl font-bold text-primary-800 text-center mb-6">Create Account</h2>
//           <p className="text-center text-secondary-600 mb-6">Sign up to get started</p>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Full Name</label>
//             <div className="relative">
//               <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Your name"
//                 className="form-input pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <div className="relative">
//               <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <input
//                 type="email"
//                 placeholder="Enter email"
//                 className="form-input pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <div className="relative">
//               <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <input
//                 type="password"
//                 placeholder="Enter password"
//                 className="form-input pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
//               />
//             </div>
//           </div>

//           <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-md mt-4">
//             Sign Up
//           </button>

//           <div className="flex items-center my-6">
//             <div className="w-full border-t border-gray-300"></div>
//             <span className="px-3 text-gray-500 text-sm">OR</span>
//             <div className="w-full border-t border-gray-300"></div>
//           </div>

//           <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md mb-2 hover:bg-gray-50">
//             <img
//               src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
//               alt="Google Logo"
//               className="h-5 w-5 mr-2"
//             />
//             Sign up with Google
//           </button>

//           <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-50">
//             <img
//               src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg"
//               alt="Facebook Logo"
//               className="h-5 w-5 mr-2"
//             />
//             Sign up with Facebook
//           </button>

//           <p className="mt-6 text-center text-gray-600">
//             Already have an account? {" "}
//             <Link to="/FinTech/login" className="text-primary-600 font-medium hover:underline">
//               Log In
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, AlertCircle, CheckCircle } from "lucide-react";
import { signUp } from "../../lib/supabase";

const RegisterPage = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const { data, error } = await signUp(formData.email, formData.password, formData.username);

    if (error) {
      setError(error.message || "Failed to register. Please try again.");
    } else {
      setSuccess("Account created successfully! Redirecting...");
      console.log("User registered:", data);

      // Redirect to login page after successful registration
      setTimeout(() => navigate("/FinTech/login"), 2000); // Delay for 2 seconds
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-primary-700 to-primary-900 text-white">
      <div className="container mx-auto flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 text-gray-900">
          <h2 className="text-3xl font-bold text-primary-800 text-center mb-6">Create Account</h2>
          <p className="text-center text-secondary-600 mb-6">Sign up to get started</p>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 text-red-600 p-2 rounded-md flex items-center mb-4">
              <AlertCircle className="h-5 w-5 mr-2" /> {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="bg-green-100 text-green-600 p-2 rounded-md flex items-center mb-4">
              <CheckCircle className="h-5 w-5 mr-2" /> {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-md mt-4"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/FinTech/login" className="text-primary-600 font-medium hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
