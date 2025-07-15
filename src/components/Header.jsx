import React from 'react';

const navLinks = [
  { name: 'All Products', href: '#' },
  { name: 'Serum', href: '#' },
  { name: 'Sunscreen', href: '#' },
  { name: 'Bundle', href: '#' },
];

const Header = () => {
  return (
    <header className="w-full bg-[#EFF5E1] border-b border-[#E6E9E2] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center flex-shrink-0">
          <span className="font-extrabold text-xl tracking-widest text-[#232D1A] ">SKINCARE</span>
        </div>
        {/* Center: Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-10">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#232D1A] text-sm font-sans hover:text-[#3A6B7A] transition px-1"
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-1 p-2 rounded-full hover:bg-[#E6E9E2] transition text-[#232D1A]">
            <img src="/bag-4-svgrepo-com 1.svg" alt="Cart" className="h-5 w-5" />
            <span className="hidden lg:text-sm">Cart (1)</span>
          </a>
          <a href="#" className="p-2 rounded-full hover:bg-[#E6E9E2] transition">
            <img src="/heart-svgrepo-com (1) 1.svg" alt="Heart" className="h-5 w-5" />
          </a>
          <a href="#" className="p-2 rounded-full hover:bg-[#E6E9E2] transition">
            <img src="/person 1.svg" alt="User" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 