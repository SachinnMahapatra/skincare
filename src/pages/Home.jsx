import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import BestSelling from '../components/BestSelling';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <BestSelling/>
      <CTA />
      <Testimonials />
      <FAQ/>
    </>
  );
};

export default Home; 