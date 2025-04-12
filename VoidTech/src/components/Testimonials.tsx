import React, { useRef } from 'react';

interface TestimonialCardProps {
  image: string;
  name: string;
  position: string;
  company: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, name, position, company, quote }) => {
  return (
    <div className="bg-blue-900/20 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 transition-all duration-300 hover:border-blue-400/30 hover:shadow-[0_0_25px_rgba(37,99,235,0.2)] flex flex-col h-full">
      <div className="flex items-center mb-6">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-white">{name}</h4>
          <p className="text-blue-400 text-sm">{position}, {company}</p>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-blue-100/80 italic">"{quote}"</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -current.clientWidth / 2 : current.clientWidth / 2;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechGlobal Inc.",
      quote: "voidTech transformed our outdated systems into a cutting-edge digital platform. Their expertise and dedication to our project exceeded all expectations."
    },
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      name: "Michael Chen",
      position: "CEO",
      company: "Innovate Solutions",
      quote: "Working with voidTech has been a game-changer for our business. Their IoT solution has increased our production efficiency by 35% in just three months."
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      name: "Emily Rodriguez",
      position: "Director of IT",
      company: "FinSecure Bank",
      quote: "The cybersecurity infrastructure implemented by voidTech has given us peace of mind. Their team's expertise in financial compliance is unmatched."
    },
    {
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      name: "David Wilson",
      position: "COO",
      company: "RetailNext",
      quote: "voidTech's data analytics platform has provided us with insights we never thought possible. We can now make data-driven decisions with confidence."
    },
    {
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      name: "David Wilson",
      position: "COO",
      company: "RetailNext",
      quote: "voidTech's data analytics platform has provided us with insights we never thought possible. We can now make data-driven decisions with confidence."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Orbitron',sans-serif] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 inline-block">
            Client Testimonials
          </h2>
          <p className="text-blue-100/90 text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-[300px] md:min-w-[350px] snap-start">
                  <TestimonialCard 
                    image={testimonial.image}
                    name={testimonial.name}
                    position={testimonial.position}
                    company={testimonial.company}
                    quote={testimonial.quote}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-blue-900/80 hover:bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10 hidden md:flex"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-blue-900/80 hover:bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10 hidden md:flex"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;