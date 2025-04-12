import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const orbitalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbitalRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = orbitalRef.current.getBoundingClientRect();
      
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const moveX = (clientX - centerX) / 25;
      const moveY = (clientY - centerY) / 25;
      
      orbitalRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZTNhOGEiIHN0cm9rZS13aWR0aD0iMC41Ii8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="text-center">
          <div className="relative inline-block" ref={orbitalRef}>
            {/* Orbital Elements */}
            <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-[-20px] border-2 border-blue-400/20 rounded-full animate-[spin_25s_linear_infinite_reverse]"></div>
            <div className="absolute inset-[-40px] border-2 border-indigo-500/10 rounded-full animate-[spin_30s_linear_infinite]"></div>
            
            {/* Orbital Dots */}
            <div className="absolute left-1/2 top-0 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] transform -translate-x-1/2 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute left-1/2 top-[-20px] w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)] transform -translate-x-1/2 animate-[spin_25s_linear_infinite_reverse]"></div>
            <div className="absolute left-1/2 top-[-40px] w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.8)] transform -translate-x-1/2 animate-[spin_30s_linear_infinite]"></div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Orbitron',sans-serif] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              voidTech
            </h1>
          </div>
          
          <h2 className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Pioneering the future through innovative technology solutions that transform the digital landscape
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
              <a href="#services">
                Explore Our Work
              </a>

            </button>
            <button className="bg-transparent hover:bg-blue-900/50 text-white border border-blue-500 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300">
              <a href="#portfolio">
                Learn More
              </a>
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-blue-400 text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-blue-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;