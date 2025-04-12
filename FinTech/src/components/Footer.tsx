// import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <DollarSign className="w-8 h-8 text-primary-400" />
              <span className="text-xl font-bold text-white">LoanLona</span>
            </div>
            <p className="text-secondary-300 mb-4">
              Providing innovative financial solutions to help you achieve your dreams and secure your future.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-secondary-300 hover:text-primary-400" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-secondary-300 hover:text-primary-400" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="text-secondary-300 hover:text-primary-400" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/maniteja-gaddam-354345245/" className="text-secondary-300 hover:text-primary-400" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/FinTech/loan-products" className="text-secondary-300 hover:text-primary-400">Loan Products</Link>
              </li>
              <li>
                <Link to="/FinTech/loan-suggestion" className="text-secondary-300 hover:text-primary-400">Loan Suggestion Tool</Link>
              </li>
              <li>
                <Link to="/FinTech/apply" className="text-secondary-300 hover:text-primary-400">Apply for Loan</Link>
              </li>
              <li>
                <Link to="/FinTech/resources" className="text-secondary-300 hover:text-primary-400">Financial Resources</Link>
              </li>
              <li>
                <Link to="/FinTech/about" className="text-secondary-300 hover:text-primary-400">About Us</Link>
              </li>
              <li>
                <Link to="/FinTech/dashboard" className="text-secondary-300 hover:text-primary-400">Dashboard</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                <span className="text-secondary-300">Kukatpally Hyderabad Telangana India 500001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-secondary-300">+91 949xxxxx78</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a href="mailto:info@LoanLona.com" className="text-secondary-300 hover:text-primary-400">
                  mail@LoanLona.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-secondary-300 mb-4">
              Subscribe to our newsletter for the latest financial tips and offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-secondary-800 border border-secondary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-secondary-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-secondary-700 my-8" />

        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          <div className="text-secondary-400 text-sm">
            &copy; {new Date().getFullYear()} LoanLona. All rights reserved.
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <Link to="/privacy-policy" className="text-secondary-400 hover:text-primary-400">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-secondary-400 hover:text-primary-400">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-secondary-400 hover:text-primary-400">
              Sitemap
            </Link>
          </div>
          <div className="flex items-center space-x-2 text-secondary-400 text-sm">
            <Shield className="w-4 h-4" />
            <span>Secure SSL Encryption</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;