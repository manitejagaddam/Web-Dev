import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="relative w-8 h-8">
      <div className="absolute inset-0 bg-blue-600 rounded-full opacity-70 animate-plus"></div>
      <div className="absolute inset-1 bg-blue-900 rounded-full"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4 h-4 border-t-2 border-r-2 border-blue-400 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Logo;