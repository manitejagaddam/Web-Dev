import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  scrollPosition: number;
}

const Navbar: React.FC<NavbarProps> = ({ scrollPosition }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrollPosition > 50 ? 'bg-blue-950/90 backdrop-blur-sm py-2 shadow-lg' : 'bg-transparent py-4'
      // 'bg-transparent backdrop-blur-sm shadow-sm py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Logo />
            <span className="ml-2 text-xl md:text-xl font-bold font-['Orbitron',sans-serif] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 animate-pulse">voidTech</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
            <a href="#services" className="text-white hover:text-blue-400 transition-colors">Services</a>
            <a href="#portfolio" className="text-white hover:text-blue-400 transition-colors">Portfolio</a>
            <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
              Get Started
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-900/95 backdrop-blur-md mt-4 rounded-lg p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-blue-400 transition-colors" onClick={toggleMenu}>Home</a>
              <a href="#about" className="text-white hover:text-blue-400 transition-colors" onClick={toggleMenu}>About</a>
              <a href="#services" className="text-white hover:text-blue-400 transition-colors" onClick={toggleMenu}>Services</a>
              <a href="#portfolio" className="text-white hover:text-blue-400 transition-colors" onClick={toggleMenu}>Portfolio</a>
              <a href="#contact" className="text-white hover:text-blue-400 transition-colors" onClick={toggleMenu}>Contact</a>
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;