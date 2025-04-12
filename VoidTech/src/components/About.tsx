import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center font-['Orbitron',sans-serif] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 inline-block">
            Who Are We?
          </h2>
          
          {/* Animated Divider */}
          <div className="flex justify-center mb-12">
            <div className="relative h-1 w-40 bg-blue-900 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 animate-pulse"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-blue-100/90 text-lg leading-relaxed">
                Founded in 2020, voidTech is at the forefront of technological innovation, 
                specializing in cutting-edge solutions that bridge the gap between imagination 
                and reality. Our team of visionary engineers, designers, and developers work 
                tirelessly to push the boundaries of what's possible.
              </p>
              <p className="text-blue-100/90 text-lg leading-relaxed">
                We believe that technology should be both powerful and accessible, 
                creating digital experiences that are not only functional but also 
                intuitive and beautiful. Our mission is to transform complex challenges 
                into elegant solutions that drive our clients' success.
              </p>
              
              <div className="pt-4">
                <button className="bg-transparent hover:bg-blue-900/50 text-white border border-blue-500 px-6 py-2 rounded-full font-semibold transition-all duration-300">
                  Learn Our Story
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-blue-900/30 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 shadow-[0_0_25px_rgba(37,99,235,0.2)]">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
                    <div className="text-blue-100/80 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                    <div className="text-blue-100/80 text-sm">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
                    <div className="text-blue-100/80 text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">30+</div>
                    <div className="text-blue-100/80 text-sm">Global Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;