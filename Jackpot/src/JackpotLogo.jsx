import React from 'react';

const JackpotLogo = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="relative text-8xl font-bold">
        <div className="absolute inset-0 grid grid-cols-3 gap-1">
          <div className="bg-black text-white flex items-center justify-center">A</div>
          <div className="bg-black text-white flex items-center justify-center">K</div>
          <div className="bg-black text-white flex items-center justify-center">U</div>
        </div>
        <div className="relative z-10">JACKPOT</div>
      </div>
      <button className="mt-8 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
        Get Started
      </button>
    </div>
  );
};

export default JackpotLogo;
