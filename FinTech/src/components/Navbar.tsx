// import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, ChevronDown, DollarSign } from 'lucide-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isProductsOpen, setIsProductsOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

//   const isActive = (path: string) => location.pathname === path;

//   const navLinks = [
//     { name: 'Home', path: '/FinTech/' },
//     { name: 'Services', path: '/FinTech/services', dropdown: true },
//     { name: 'Loan Suggestion', path: '/FinTech/loan-suggestion' },
//     { name: 'Resources', path: '/FinTech/resources' },
//     { name: 'About Us', path: '/FinTech/about' },
//   ];

//   const productLinks = [
//     { name: 'Personal Loans', path: '/FinTech/services#personal' },
//     { name: 'Home Loans', path: '/FinTech/services#home' },
//     { name: 'Auto Loans', path: '/FinTech/services#auto' },
//     { name: 'Business Loans', path: '/FinTech/services#business' },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 bg-white shadow-md">
//       <div className="container">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link to="/FinTech" className="flex items-center space-x-2">
//             <DollarSign className="w-8 h-8 text-primary-600" />
//             <span className="text-xl font-bold text-primary-800">FinTech</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex md:items-center md:space-x-8">
//             {navLinks.map((link) =>
//               link.dropdown ? (
//                 <div key={link.name} className="relative">
//                   <button
//                     onClick={toggleProducts}
//                     className={`flex items-center space-x-1 px-2 py-1 text-sm font-medium rounded-md ${
//                       isActive(link.path) ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600'
//                     }`}
//                   >
//                     <span>{link.name}</span>
//                     <ChevronDown className="w-4 h-4" />
//                   </button>

//                   {isProductsOpen && (
//                     <div className="absolute left-0 z-10 w-48 mt-2 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
//                       <div className="py-1">
//                         {productLinks.map((product) => (
//                           <Link
//                             key={product.name}
//                             to={product.path}
//                             className="block px-4 py-2 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-600"
//                             onClick={() => setIsProductsOpen(false)}
//                           >
//                             {product.name}
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className={`px-2 py-1 text-sm font-medium rounded-md ${
//                     isActive(link.path) ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600'
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               )
//             )}
//           </div>

//           {/* CTA Buttons */}
//           <div className="hidden md:flex md:items-center md:space-x-4">
//             <Link to="/FinTech/Login" className="btn-outline btn-sm py-1.5 px-3 rounded-md">
//               Login
//             </Link>
//             <Link to="/FinTech/apply" className="btn-primary btn-sm py-1.5 px-3 rounded-md">
//               Apply Now
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="flex md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 text-secondary-500 rounded-md hover:text-secondary-900 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isMenuOpen ? (
//                 <X className="block w-6 h-6" aria-hidden="true" />
//               ) : (
//                 <Menu className="block w-6 h-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navLinks.map((link) =>
//               link.dropdown ? (
//                 <div key={link.name}>
//                   <button
//                     onClick={toggleProducts}
//                     className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-secondary-700 rounded-md hover:bg-primary-50 hover:text-primary-600"
//                   >
//                     <span>{link.name}</span>
//                     <ChevronDown className="w-4 h-4" />
//                   </button>

//                   {isProductsOpen && (
//                     <div className="pl-4 space-y-1 mt-1">
//                       {productLinks.map((product) => (
//                         <Link
//                           key={product.name}
//                           to={product.path}
//                           className="block px-3 py-2 text-base font-medium text-secondary-600 rounded-md hover:bg-primary-50 hover:text-primary-600"
//                           onClick={() => {
//                             setIsProductsOpen(false);
//                             setIsMenuOpen(false);
//                           }}
//                         >
//                           {product.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className={`block px-3 py-2 text-base font-medium rounded-md ${
//                     isActive(link.path) ? 'text-primary-600 bg-primary-50' : 'text-secondary-700 hover:bg-primary-50 hover:text-primary-600'
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               )
//             )}
//           </div>
//           <div className="pt-4 pb-3 border-t border-secondary-200">
//             <div className="flex items-center px-5 space-x-3">
//               <Link
//                 to="/FinTech/Login"
//                 className="w-full px-4 py-2 text-base font-medium text-center text-primary-600 bg-white border border-primary-600 rounded-md hover:bg-primary-50"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/FinTech/apply"
//                 className="w-full px-4 py-2 text-base font-medium text-center text-white bg-primary-600 rounded-md hover:bg-primary-700"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Apply Now
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// // import { useState } from 'react';
// // import { Link, useLocation } from 'react-router-dom';
// // import { Menu, X, ChevronDown, DollarSign, User } from 'lucide-react';

// // const Navbar = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [isProductsOpen, setIsProductsOpen] = useState(false);
// //   const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual auth state
// //   const location = useLocation();

// //   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
// //   const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

// //   const isActive = (path: string) => location.pathname === path;

// //   return (
// //     <nav className="sticky top-0 z-50 bg-white shadow-md">
// //       <div className="container">
// //         <div className="flex items-center justify-between h-16">
// //           {/* Logo */}
// //           <Link to="/FinTech" className="flex items-center space-x-2">
// //             <DollarSign className="w-8 h-8 text-primary-600" />
// //             <span className="text-xl font-bold text-primary-800">FinTech</span>
// //           </Link>

// //           {/* Desktop Navigation */}
// //           <div className="hidden md:flex md:items-center md:space-x-8">
// //             <Link to="/FinTech/" className={`px-2 py-1 text-sm font-medium rounded-md ${isActive('/FinTech/') ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600'}`}>
// //               Home
// //             </Link>
// //           </div>

// //           {/* CTA Buttons / Profile Icon */}
// //           <div className="hidden md:flex md:items-center md:space-x-4">
// //             {isLoggedIn ? (
// //               <div className="relative">
// //                 <button className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary-100">
// //                   <User className="w-6 h-6 text-primary-600" />
// //                 </button>
// //               </div>
// //             ) : (
// //               <>
// //                 <Link to="/FinTech/Login" className="btn-outline btn-sm py-1.5 px-3 rounded-md">
// //                   Login
// //                 </Link>
// //                 <Link to="/FinTech/apply" className="btn-primary btn-sm py-1.5 px-3 rounded-md">
// //                   Apply Now
// //                 </Link>
// //               </>
// //             )}
// //           </div>

// //           {/* Mobile menu button */}
// //           <div className="flex md:hidden">
// //             <button onClick={toggleMenu} className="p-2 text-secondary-500 rounded-md hover:text-secondary-900 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500">
// //               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile menu */}
// //       {isMenuOpen && (
// //         <div className="md:hidden">
// //           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
// //             <Link to="/FinTech/" className="block px-3 py-2 text-base font-medium rounded-md text-secondary-700 hover:bg-primary-50 hover:text-primary-600">
// //               Home
// //             </Link>
// //           </div>
// //           <div className="pt-4 pb-3 border-t border-secondary-200">
// //             {isLoggedIn ? (
// //               <div className="flex items-center px-5 space-x-3">
// //                 <button className="p-2 rounded-md hover:bg-secondary-100">
// //                   <User className="w-6 h-6 text-primary-600" />
// //                 </button>
// //               </div>
// //             ) : (
// //               <div className="flex items-center px-5 space-x-3">
// //                 <Link to="/FinTech/Login" className="w-full px-4 py-2 text-base font-medium text-center text-primary-600 bg-white border border-primary-600 rounded-md hover:bg-primary-50">
// //                   Login
// //                 </Link>
// <Link to="/FinTech/apply" className="w-full px-4 py-2 text-base font-medium text-center text-white bg-primary-600 rounded-md hover:bg-primary-700">
//   Apply Now
// </Link>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, ChevronDown, DollarSign } from 'lucide-react';

// const Navbar = ({ user, signOut }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isProductsOpen, setIsProductsOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

//   const isActive = (path) => location.pathname === path;

//   const navLinks = [
//     { name: 'Home', path: '/FinTech/' },
//     { name: 'Services', path: '/FinTech/services', dropdown: true },
//     { name: 'Loan Suggestion', path: '/FinTech/loan-suggestion' },
//     { name: 'Resources', path: '/FinTech/resources' },
//     { name: 'About Us', path: '/FinTech/about' },
//     { name: 'Dashboard', path: '/FinTech/dashboard' },

//   ];

//   const productLinks = [

//     { name: 'Dashboard', path: '/FinTech/dashboard' },
//     { name: 'Personal Loans', path: '/FinTech/services#personal' },
//     { name: 'Home Loans', path: '/FinTech/services#home' },
//     { name: 'Auto Loans', path: '/FinTech/services#auto' },
//     { name: 'Business Loans', path: '/FinTech/services#business' },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 bg-white shadow-md">
//       <div className="container">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link to="/FinTech" className="flex items-center space-x-2">
//             <DollarSign className="w-8 h-8 text-primary-600" />
//             <span className="text-xl font-bold text-primary-800">Lona Lona</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex md:items-center md:space-x-8">
//             {navLinks.map((link) =>
//               link.dropdown ? (
//                 <div key={link.name} className="relative">
//                   <button
//                     onClick={toggleProducts}
//                     className={`flex items-center space-x-1 px-2 py-1 text-sm font-medium rounded-md ${
//                       isActive(link.path) ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600'
//                     }`}
//                   >
//                     <span>{link.name}</span>
//                     <ChevronDown className="w-4 h-4" />
//                   </button>
//                   {isProductsOpen && (
//                     <div className="absolute left-0 z-10 w-48 mt-2 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
//                       <div className="py-1">
//                         {productLinks.map((product) => (
//                           <Link
//                             key={product.name}
//                             to={product.path}
//                             className="block px-4 py-2 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-600"
//                             onClick={() => setIsProductsOpen(false)}
//                           >
//                             {product.name}
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className={`px-2 py-1 text-sm font-medium rounded-md ${
//                     isActive(link.path) ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600'
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               )
//             )}
//           </div>

//           {/* User Authentication */}
//           <div className="hidden md:flex md:items-center md:space-x-4">
//             {user ? (
//               <>
//                 <img
//                   src={user.user_metadata?.avatar_url || "https://via.placeholder.com/50"}
//                   alt="Profile"
//                   className="w-12 h-12 rounded-full cursor-pointer"
//                 />
//                 <button
//                   onClick={signOut}
//                   className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <Link to="/FinTech/Login" className="btn-outline btn-sm py-1.5 px-3 rounded-md hover:bg-primary-700 hover:text-white">
//                 Login
//               </Link>

//             )}
//               <Link to="/FinTech/apply" className="w-full px-4 py-2 text-base font-medium text-center text-white bg-primary-600 rounded-md hover:bg-primary-700">
//                   Apply Now
//               </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 text-secondary-500 rounded-md hover:text-secondary-900 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isMenuOpen ? <X className="block w-6 h-6" aria-hidden="true" /> : <Menu className="block w-6 h-6" aria-hidden="true" />}
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ChevronDown, DollarSign } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import userImage from '../assets/images/user.png';

const Navbar = () => {
  const { user, signIn, signOut } = useAuth(); 

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoansOpen, setIsLoansOpen] = useState(false);
  const [isLoanTypesOpen, setIsLoanTypesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLoans = () => setIsLoansOpen(!isLoansOpen);
  const toggleLoanTypes = () => setIsLoanTypesOpen(!isLoanTypesOpen);
  const closeLoans = () => {
    setIsLoansOpen(false);
    setIsLoanTypesOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/FinTech/" },
    { name: "Services", dropdown: true },
    { name: "Loan Suggestion", path: "/FinTech/loan-suggestion" },
    { name: "Resources", path: "/FinTech/resources" },
    { name: "About Us", path: "/FinTech/about" },
    { name: "Dashboard", path: "/FinTech/dashboard" },
  ];

  const loanTypes = [
    { name: "Personal Loans", path: "/FinTech/services#personal" },
    { name: "Home Loans", path: "/FinTech/services#home" },
    { name: "Auto Loans", path: "/FinTech/services#auto" },
    { name: "Business Loans", path: "/FinTech/services#business" },
  ];

  const loanServices = [
    { name: "Dashboard", path: "/FinTech/dashboard" },
    { name: "Loan Repayments", path: "/FinTech/loan-repayments" },
    { name: "Loan Tracking", path: "/FinTech/loan-tracking" },
    { name: "Loan Calculators", path: "/FinTech/loan-calculators" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/FinTech" className="flex items-center space-x-2">
            <DollarSign className="w-8 h-8 text-primary-600" />
            <span className="text-xl font-extrabold text-primary-800">
              LoanLona
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative">
                  <button
                    onClick={toggleLoans}
                    onMouseEnter={() => setIsLoansOpen(true)}
                    onMouseLeave={() => setIsLoanTypesOpen(false)}
                    className={`flex items-center space-x-1 px-2 py-1 text-sm font-medium rounded-md ${
                      isActive("/FinTech/loans")
                        ? "text-primary-600"
                        : "text-secondary-700 hover:text-primary-600"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Loans Dropdown */}
                  {isLoansOpen && (
                    <div
                      onMouseLeave={closeLoans}
                      className="absolute left-0 z-10 w-56 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                    >
                      <div className="py-1">
                        <div className="relative group">
                          <button
                            onMouseEnter={toggleLoanTypes}
                            className="flex justify-between w-full px-4 py-2 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-600"
                          >
                            Loan Types
                            <ChevronRight className="w-4 h-4" />
                          </button>

                          {/* Loan Types Submenu */}
                          {isLoanTypesOpen && (
                            <div className="absolute top-0 left-full w-56 mt-0 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="py-1">
                                {loanTypes.map((loan) => (
                                  <Link
                                    key={loan.name}
                                    to={loan.path}
                                    className="block px-4 py-2 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-600"
                                    onClick={closeLoans}
                                  >
                                    {loan.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Other Loan Services */}
                        {loanServices.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            className="block px-4 py-2 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-600"
                            onClick={closeLoans}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-2 py-1 text-sm font-medium rounded-md ${
                    isActive(link.path)
                      ? "text-primary-600"
                      : "text-secondary-700 hover:text-primary-600"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* User Authentication */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {user ? (
              <>
                <Link to="/FinTech/dashboard">
                  <img
                    src={userImage}
                    alt="Profile"
                    className="w-12 h-8 rounded-full cursor-pointer"
                  />
                </Link>
                <button
                  onClick={signOut}
                  className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/FinTech/Login"
                className="btn-outline btn-sm py-1.5 px-3 rounded-md hover:bg-primary-700 hover:text-white"
              >
                Login
              </Link>
            )}
            <Link
              to="/FinTech/apply"
              className="w-full px-4 py-2 text-base font-medium text-center text-white bg-primary-600 rounded-md hover:bg-primary-700"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-secondary-500 rounded-md hover:text-secondary-900 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isMenuOpen ? (
                <X className="block w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="block w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
