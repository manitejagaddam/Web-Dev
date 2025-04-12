import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-20 pb-10 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZTNhOGEiIHN0cm9rZS13aWR0aD0iMC41Ii8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Logo />
            <h2 className="ml-4 text-4xl md:text-5xl font-bold font-['Orbitron',sans-serif] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 animate-pulse">
              voidTech
            </h2>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.linkedin.com/in/maniteja-gaddam-354345245/" className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-600 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/ManitejaG1107" className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-600 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <Twitter size={20} />
            </a>
            <a href="https://github.com/manitejagaddam" className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-600 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <Github size={20} />
            </a>
          </div>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <p className="text-blue-100/80 mb-2">hello@voidtech.com</p>
              <p className="text-blue-100/80 mb-2">+91 9494785078</p>
              <p className="text-blue-100/80">Kukatpally Hyderabad 500001</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-blue-100/80 hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#services" className="text-blue-100/80 hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#portfolio" className="text-blue-100/80 hover:text-blue-400 transition-colors">Portfolio</a></li>
                <li><a href="#" className="text-blue-100/80 hover:text-blue-400 transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
              <p className="text-blue-100/80 mb-4">Stay updated with our latest news and offers.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-blue-900/30 border border-blue-800 text-white px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-r-full transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-900/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100/60 text-sm mb-4 md:mb-0">
              © 2025 voidTech. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-100/60 hover:text-blue-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-blue-100/60 hover:text-blue-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-blue-100/60 hover:text-blue-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;