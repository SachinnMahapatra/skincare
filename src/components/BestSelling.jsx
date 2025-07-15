import React, { useState, useRef, useEffect } from 'react';

const products = [
  {
    image: '/product1.png',
    name: 'ALYA SKIN CLEANSER.',
    price: 'FROM $29.99',
  },
  {
    image: '/product2.png',
    name: 'RITUAL OF SAKURA.',
    price: 'FROM $27.99',
  },
  {
    image: '/product3.png',
    name: 'THE BODY LOTION.',
    price: 'FROM $19.99',
  },
];

function BestSelling() {
  // For mobile/tablet slider
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1024);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // For mobile/tablet: 1 card fully visible, no peek
  const cardWidth = isDesktop ? '100%' : '100vw';
  const maxIndex = products.length - 1;
  const canGoLeft = current > 0;
  const canGoRight = current < maxIndex;

  // Slide logic for mobile/tablet
  const handleArrow = (dir) => {
    if (dir === 'left' && canGoLeft) setCurrent(current - 1);
    if (dir === 'right' && canGoRight) setCurrent(current + 1);
  };

  // For smooth sliding
  const gapVW = 3;
  const cardVW = 80;
  const centerOffset = (100 - cardVW) / 2; // 10vw
  const trackStyle = !isDesktop
    ? {
        transform:
          current === 0
            ? 'translateX(0)'
            : current === maxIndex
            ? `translateX(calc(-${current * (cardVW + gapVW)}vw + ${(100 - cardVW)}vw))`
            : `translateX(calc(-${current * (cardVW + gapVW)}vw + ${centerOffset}vw))`,
        transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
        width: `calc(${products.length} * (${cardVW}vw + ${gapVW}vw))`
      }
    : {};

  return (
    <section className="w-full bg-[#FEFFF4] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Tablet/Mobile Layout */}
        <div className="flex flex-col gap-6 lg:hidden">
          {/* Row 1: Pill */}
          <div className="flex items-center border border-[#2D3B36] rounded-full px-6 py-2 bg-white text-[#2D3B36] text-base font-medium w-fit mx-auto">
            <span className="inline-block w-3 h-3 bg-[#2D3B36] rounded-full mr-2"></span>
            Best Selling Products
          </div>
          {/* Row 2: Heading */}
          <h2 className="text-center text-[#2D3B36] text-2xl xs:text-3xl sm:text-4xl font-semibold leading-tight">
            Skincare That Brings Out<br />Your Natural Radiance
          </h2>
          {/* Row 3: Product Slider */}
          <div className="relative w-full overflow-x-hidden">
            <div
              ref={sliderRef}
              className="flex gap-x-[3vw]"
              style={trackStyle}
            >
              {products.map((product, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-2xl overflow-hidden bg-transparent h-[750px] min-w-[80vw] max-w-[80vw]`}
                  style={isDesktop ? {} : {}}
                >
                  <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                  {/* Overlay at bottom center */}
                  <div className="absolute left-0 right-0 bottom-0 flex flex-col items-center px-6 pb-6">
                    <div className="flex flex-row bg-[#ffffffbe] px-5 py-3 rounded-xl items-center justify-center gap-4 w-full">
                      <div className="flex flex-col items-start flex-1">
                        <div className="text-[#2D3B36] text-base font-medium leading-tight mb-1">{product.name}</div>
                        <div className="text-xs text-[#2D3B36] opacity-60">{product.price}</div>
                      </div>
                      <button className="w-14 h-12 flex items-center justify-center rounded-xl bg-white/80 border border-[#E6E9E2]">
                        <img src="/cart-large-2-svgrepo-com 5.svg" alt="Cart" className="w-7 h-7" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Row 4: Arrow Buttons */}
          <div className="flex items-center justify-center gap-6 mt-2">
            <button
              className={`w-14 h-14 flex items-center justify-center rounded-full border border-[#2D3B36] bg-transparent ${!canGoLeft ? 'opacity-30 cursor-not-allowed' : ''}`}
              onClick={() => handleArrow('left')}
              disabled={!canGoLeft}
              aria-label="Previous"
            >
              <img src="/left arrow 1.svg" alt="Left Arrow" className="h-full" />
            </button>
            <button
              className={`w-14 h-14 flex items-center justify-center rounded-full bg-[#2D3B36] ${!canGoRight ? 'opacity-30 cursor-not-allowed' : ''}`}
              onClick={() => handleArrow('right')}
              disabled={!canGoRight}
              aria-label="Next"
            >
              <img src="/right arrow 1.svg" alt="Right Arrow" className="h-full" />
            </button>
          </div>
        </div>
        {/* Desktop Layout (unchanged) */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-y-4">
            {/* Left: Best Selling Products */}
            <div className="flex items-center border border-[#2D3B36] rounded-full px-6 py-2 bg-white text-[#2D3B36] text-base font-medium">
              <span className="inline-block w-3 h-3 bg-[#2D3B36] rounded-full mr-2"></span>
              Best Selling Products
            </div>
            {/* Center: Heading */}
            <h2 className="flex-1 text-center text-[#2D3B36] text-4xl md:text-5xl font-semibold leading-tight">
              Skincare That Brings Out<br className="hidden md:block" />
              Your Natural Radiance
            </h2>
            {/* Right: Arrows */}
            <div className="flex items-center gap-6">
              <button className="w-14 h-14 flex items-center justify-center rounded-full border border-[#2D3B36] bg-transparent">
                <img src="/left arrow 1.svg" alt="Left Arrow" className="h-full" />
              </button>
              <button className="w-14 h-14 flex items-center justify-center rounded-full bg-[#2D3B36]">
                <img src="/right arrow 1.svg" alt="Right Arrow" className="h-full" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden flex flex-col h-full bg-transparent">
                <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                {/* Overlay at bottom center */}
                <div className="absolute left-0 right-0 bottom-0 flex flex-col items-center px-6 pb-6">
                  <div className="flex flex-row bg-[#ffffffbe] px-5 py-3 rounded-xl items-center justify-center gap-4 w-full">
                    <div className="flex flex-col items-start flex-1">
                      <div className="text-[#2D3B36] text-base font-medium leading-tight mb-1">{product.name}</div>
                      <div className="text-xs text-[#2D3B36] opacity-60">{product.price}</div>
                    </div>
                    <button className="w-14 h-12 flex items-center justify-center rounded-xl bg-white/80 border border-[#E6E9E2]">
                      <img src="/cart-large-2-svgrepo-com 5.svg" alt="Cart" className="w-7 h-7" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSelling;