import React from 'react';
import { Rocket, Code, Database, Cloud, Shield, Cpu } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-blue-900/20 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] group">
      <div className="w-14 h-14 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">{title}</h3>
      <p className="text-blue-100/80">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Rocket size={28} className="transition-all duration-300 group-hover:animate-pulse" />,
      title: "Digital Transformation",
      description: "We guide businesses through comprehensive digital transformations, modernizing legacy systems and processes."
    },
    {
      icon: <Code size={28} className="transition-all duration-300 group-hover:animate-pulse" />,
      title: "Custom Software Development",
      description: "Bespoke software solutions tailored to your unique business requirements and challenges."
    },
    {
      icon: <Database size={28} className="transition-all duration-300 group-hover:animate-pulse" />,
      title: "Data Analytics & AI",
      description: "Harness the power of your data with advanced analytics and artificial intelligence solutions."
    },
    {
      icon: <Cloud size={28} className="transition-all duration-300 group-hover:animate-pulse" />,
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and optimized cloud solutions that grow with your business needs."
    },
    {
      icon: <Shield size={28} className="transition-all duration-300 group-hover:animate-pulse" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and sensitive information."
    },
    {
      icon: <Cpu size={28} className="transition-all duration-300 group-hover:animate-pulse" />,
      title: "IoT Solutions",
      description: "Connect and optimize your physical assets with cutting-edge Internet of Things technology."
    },
    {
      icon: <Cpu size={28} className="transition-all duration-300 group-hover:animate-pulse" />,
      title: "IoT Solutions",
      description: "Connect and optimize your physical assets with cutting-edge Internet of Things technology."
    }

  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Orbitron',sans-serif] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 inline-block">
            Our Services
          </h2>
          <p className="text-blue-100/90 text-lg">
            We offer a comprehensive range of technology solutions to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;