import React from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const Hero: React.FC = () => {
  const titleRef = useAnimateOnScroll('animate__fadeInDown');
  const contentRef = useAnimateOnScroll('animate__fadeIn');
  const buttonRef = useAnimateOnScroll('animate__bounceIn');

  return (
    <section id="hero" className="hero-background relative h-screen flex flex-col justify-center items-center text-center pt-16">
      <div className="relative z-10">
        <h1 ref={titleRef} className="font-poppins text-4xl md:text-6xl text-white mb-5 opacity-0">Heather Glenn</h1>
        <div ref={contentRef} className="opacity-0">
          <h2 className="font-poppins text-2xl md:text-3xl text-white mb-2">National Account Executive</h2>
          <p className="font-poppins text-xl md:text-2xl text-white mb-2">FM Payments</p>
          <p className="font-poppins text-lg md:text-xl text-white mb-5">Where we have fun saving you money</p>
        </div>
        <a ref={buttonRef} href="#contact" className="btn text-white px-6 py-3 rounded-md text-xl opacity-0 hover:text-secondary">Contact Heather</a>
      </div>
    </section>
  );
};

export default Hero;
