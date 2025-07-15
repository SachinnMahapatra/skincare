import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import BestSelling from '../components/BestSelling';
import FAQ from '../components/FAQ';

const Home = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
    );
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen w-full">
      <Hero />
      <Features />
      <BestSelling/>
      <CTA />
      <Testimonials />
      <FAQ/>
    </div>
  );
};

export default Home; 