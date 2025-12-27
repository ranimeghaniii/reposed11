import React from 'react';
import { testimonials } from '../utils/mockData';
import { FaStar } from 'react-icons/fa'; // Assuming react-icons is installed, if not, replace with SVG

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white p-6 rounded-lg shadow-md animate-slide-in-up">
    <div className="flex items-center justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} />
      ))}
    </div>
    <p className="text-text-light italic text-center mb-4">"{testimonial.text}"</p>
    <p className="font-serif font-bold text-accent-brown text-center">- {testimonial.name}</p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-12 bg-primary rounded-xl mb-12 animate-fade-in">
      <h2 className="text-5xl font-handwriting text-accent-brown text-center mb-10">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
