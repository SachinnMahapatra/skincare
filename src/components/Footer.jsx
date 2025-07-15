import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[#313D37] text-white min-h-screen flex flex-col justify-center items-center px-8 md:px-24 overflow-hidden">
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-16 relative z-10 flex-1">
        {/* Left Side */}
        <div className="mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl  mb-4">Join The Skincare<br/>Community Now.</h2>
          <div className="flex space-x-8 mt-12 text-base md:text-lg font-semibold text-gray-200">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">YouTube</a>
          </div>
        </div>
        {/* Right Side */}
        <div className="md:text-right w-full md:w-auto">
          <div className="mb-10 md:mb-0">
            <div className="text-lg md:text-xl text-gray-200 mb-4 font-semibold">Get in Touch</div>
            <div className="text-2xl md:text-3xl font-bold">contact.skincare.com</div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 mt-12 text-base md:text-lg font-semibold text-gray-200 md:justify-end">
            <a href="#" className="hover:underline mb-2 md:mb-0">Terms of Service</a>
            <a href="#" className="hover:underline mb-2 md:mb-0">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookies Policy</a>
          </div>
        </div>
      </div>
      {/* Large Faded Text */}
      <div className="absolute left-0 right-0 bottom-0 w-full flex justify-center pointer-events-none select-none z-0">
        <span className="text-[22vw] md:text-[22vw] -translate-x-2 translate-y-20 font-extrabold text-[#3B4943] opacity-40 leading-none block tracking-tighter whitespace-nowrap overflow-hidden">SKINCARE</span>
      </div>
    </footer>
  );
};

export default Footer; 