import React from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const Contact: React.FC = () => {
  const formRef = useAnimateOnScroll('animate__fadeInUp');

  return (
    <section id="contact" className="py-20 px-5 max-w-7xl mx-auto section-gap my-20">
      <h2 className="text-4xl font-bold mb-10 text-center font-poppins text-primary">Get in Touch</h2>
      <form ref={formRef} action="/thank-you" method="POST" data-netlify="true" className="max-w-2xl mx-auto opacity-0">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 font-semibold text-primary">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required
                 className="w-full p-4 bg-card-bg text-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 font-semibold text-primary">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required
                 className="w-full p-4 bg-card-bg text-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 font-semibold text-primary">Your Message</label>
          <textarea id="message" name="message" placeholder="Your Message" required
                    className="w-full p-4 bg-card-bg text-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-32"></textarea>
        </div>
        <button type="submit" className="btn text-white px-6 py-3 rounded-md text-xl w-full hover:text-secondary">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
