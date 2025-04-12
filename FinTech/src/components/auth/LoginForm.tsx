import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Mail, Lock, AlertCircle, ArrowRight } from "lucide-react";
import { useAuth } from "../../context/AuthContext"; // Ensure you handle Google & Facebook login in AuthContext

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginPage: React.FC = () => {
  const { signIn, signInWithGoogle, signInWithFacebook, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormData>();

  // Check if "Remember Me" was enabled previously
  React.useEffect(() => {
    const storedEmail = localStorage.getItem("rememberedEmail");
    if (storedEmail) setValue("email", storedEmail);
  }, [setValue]);

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      setLoading(true);
      setError(null);

      const { error } = await signIn(data.email, data.password);
      if (error) throw new Error("Invalid email or password");

      if (data.rememberMe) {
        localStorage.setItem("rememberedEmail", data.email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }

      navigate("/FinTech/dashboard");
    } catch (err: any) {
      setError(err.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    const email = window.prompt("Enter your email to reset password:");
    if (email) {
      try {
        await resetPassword(email);
        alert("Password reset link sent to your email.");
      } catch (err) {
        alert("Error sending reset link. Please try again.");
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-primary-700 to-primary-900 text-white">
      <div className="container mx-auto flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 text-gray-900">
          <h2 className="text-3xl font-bold text-primary-800 text-center mb-6">Welcome Back</h2>
          <p className="text-center text-secondary-600 mb-6">Log in to access your account</p>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Enter your email"
                  className="form-input pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="password"
                  type="password"
                  {...register("password", { required: "Password is required" })}
                  placeholder="Enter your password"
                  className="form-input pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
            </div>

            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  className="form-checkbox text-primary-600 h-4 w-4"
                />
                <span className="ml-2 text-sm text-gray-600">Remember Me</span>
              </label>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-primary-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md flex items-center justify-center"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
              {!loading && <ArrowRight className="ml-2 h-5 w-5" />}
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="w-full border-t border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="w-full border-t border-gray-300"></div>
          </div>

          <div className="flex flex-col space-y-3">
            <button
              onClick={signInWithGoogle}
              className="btn btn-outline w-full flex items-center justify-center border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-50"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" className="h-5 w-5 mr-2" />
              Continue with Google
            </button>

            <button
              onClick={signInWithFacebook}
              className="btn btn-outline w-full flex items-center justify-center border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-50"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg" alt="Facebook Logo" className="h-5 w-5 mr-2" />
              Continue with Facebook
            </button>
          </div>

          <p className="mt-6 text-center text-gray-600">
            Don't have an account? {" "}
            <Link to="/FinTech/signup" className="text-primary-600 font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


// import React, { useState, ChangeEvent, FormEvent } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ArrowRight, Lock, Mail, AlertCircle } from "lucide-react";
// // import { login } from "../services/authService";

// interface FormData {
//   email: string;
//   password: string;
//   rememberMe: boolean;
// }

// const LoginPage: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     email: "",
//     password: "",
//     rememberMe: false,
//   });
//   const [error, setError] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);
//   const navigate = useNavigate();

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       await login(formData.email, formData.password);

//       if (formData.rememberMe) {
//         localStorage.setItem("rememberMe", "true");
//       }

//       navigate("/dashboard");
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gradient-to-r from-primary-700 to-primary-900 text-white">
//       <div className="container mx-auto flex items-center justify-center">
//         <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 text-gray-900">
//           <h2 className="text-3xl font-bold text-primary-800 text-center mb-6">Welcome Back</h2>
//           <p className="text-center text-secondary-600 mb-6">Log in to access your account</p>

//           {error && (
//             <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded flex items-center">
//               <AlertCircle className="h-5 w-5 mr-2" />
//               <span>{error}</span>
//             </div>
//           )}

//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email"
//                   className="form-input pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="mb-4">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Enter your password"
//                   className="form-input pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="flex justify-between items-center mb-6">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="rememberMe"
//                   checked={formData.rememberMe}
//                   onChange={handleChange}
//                   className="form-checkbox text-primary-600 h-4 w-4"
//                 />
//                 <span className="ml-2 text-sm text-gray-600">Remember Me</span>
//               </label>
//               <Link to="/forgot-password" className="text-sm text-primary-600 hover:underline">
//                 Forgot Password?
//               </Link>
//             </div>

//             <button
//               type="submit"
//               className="btn btn-primary w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md flex items-center justify-center"
//               disabled={loading}
//             >
//               {loading ? "Logging in..." : "Log In"}
//               {!loading && <ArrowRight className="ml-2 h-5 w-5" />}
//             </button>
//           </form>

//           <div className="flex items-center my-6">
//             <div className="w-full border-t border-gray-300"></div>
//             <span className="px-3 text-gray-500 text-sm">OR</span>
//             <div className="w-full border-t border-gray-300"></div>
//           </div>

//           <div className="flex flex-col space-y-3">
//             <button className="btn btn-outline w-full flex items-center justify-center border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-50">
//               <img
//                 src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
//                 alt="Google Logo"
//                 className="h-5 w-5 mr-2"
//               />
//               Continue with Google
//             </button>
//             <button className="btn btn-outline w-full flex items-center justify-center border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-50">
//               <img
//                 src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg"
//                 alt="Facebook Logo"
//                 className="h-5 w-5 mr-2"
//               />
//               Continue with Facebook
//             </button>
//           </div>

//           <p className="mt-6 text-center text-gray-600">
//             Don't have an account? {" "}
//             <Link to="/signup" className="text-primary-600 font-medium hover:underline">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
