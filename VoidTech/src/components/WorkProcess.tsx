import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, isLast = false }) => {
  return (
    <div className="flex items-start mb-16 relative">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-blue-900 border-2 border-blue-500 flex items-center justify-center text-xl font-bold text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10">
          {number}
        </div>
        {!isLast && (
          <div className="h-24 w-0.5 bg-gradient-to-b from-blue-500 to-blue-900/30 mt-2"></div>
        )}
      </div>
      <div className="ml-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-blue-100/80">{description}</p>
      </div>
    </div>
  );
};

const WorkProcess: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Research & Discovery",
      description: "We begin by understanding your business, goals, and challenges through in-depth research and collaborative discovery sessions."
    },
    {
      number: 2,
      title: "Strategy & Planning",
      description: "Our team develops a comprehensive strategy and detailed project plan tailored to your specific requirements and objectives."
    },
    {
      number: 3,
      title: "Design & Development",
      description: "We create innovative designs and build robust solutions using cutting-edge technologies and best practices."
    },
    {
      number: 4,
      title: "Testing & Refinement",
      description: "Rigorous testing ensures your solution meets the highest standards of quality, performance, and security."
    },
    {
      number: 5,
      title: "Deployment & Launch",
      description: "We handle the seamless deployment of your solution and provide support throughout the launch process."
    },
    {
      number: 6,
      title: "Ongoing Support",
      description: "Our relationship continues with dedicated support, maintenance, and continuous improvement of your solution."
    }
  ];

  return (
    <section id="process" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 inline-block">
            HOW WE WORK
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep 
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;