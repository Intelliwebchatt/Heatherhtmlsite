import React from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const GifSection: React.FC = () => {
  const gifRef = useAnimateOnScroll('animate__fadeIn');

  return (
    <section className="section-gap relative py-20 my-20">
      <div className="container mx-auto px-5">
        <div className="flex justify-center">
          <img 
            ref={gifRef}
            src="images/1uJ9.gif" 
            alt="White man holding money, jumping up and down" 
            className="max-w-full h-auto opacity-0 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default GifSection;
