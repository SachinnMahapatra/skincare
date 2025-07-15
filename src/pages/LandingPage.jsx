import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const LandingPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
    );
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen w-full">
      {/* ...existing landing page content... */}
    </div>
  );
};

export default LandingPage;
