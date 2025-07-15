import React from 'react';

const CTA = () => {
  return (
    <section
      className="relative w-full flex justify-center items-end h-screen bg-[#FAFAF3] overflow-hidden rounded-3xl mt-8 mb-8 hidden lg:flex px-12 max-w-7xl mx-auto"
      style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.04)' }}
    >
      <img
        src="/CTA.png"
        alt="Feel Beautiful Inside and Out"
        className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl"
        draggable="false"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-3xl" />
      <div className="relative z-10 flex flex-col items-center justify-end w-full pb-16">
        <h2 className="text-white text-6xl font-normal text-center mb-8 drop-shadow-lg leading-snug">
          Feel Beautiful Inside and Out<br />with Every Product.
        </h2>
        <button
          className="px-7 py-2 bg-white text-black rounded-full shadow-md text-sm font-medium transition hover:bg-neutral-100 focus:outline-none"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default CTA; 