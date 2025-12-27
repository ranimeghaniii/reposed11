import React, { useState } from 'react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Assuming react-icons

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd send this data to a backend.
    console.log('Contact form submitted:', formData);
    setIsModalOpen(true);
    setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 animate-fade-in">
      <h1 className="text-5xl font-handwriting text-accent-brown text-center mb-10">
        Get in Touch
      </h1>

      <p className="text-center text-text-light text-lg mb-8">
        Have questions, feedback, or just want to say hello? We'd love to hear from you!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-2xl font-serif text-accent-brown mb-4">Contact Information</h2>
          <div className="flex items-center mb-3">
            <FaEnvelope className="text-accent-berry mr-3" />
            <p className="text-text-light font-serif">info@cozycookies.com</p>
          </div>
          <div className="flex items-center mb-3">
            <FaPhone className="text-accent-berry mr-3" />
            <p className="text-text-light font-serif">(555) 123-COOK</p>
          </div>
          <div className="flex items-start mb-3">
            <FaMapMarkerAlt className="text-accent-berry mt-1 mr-3 flex-shrink-0" />
            <p className="text-text-light font-serif">789 Sweet Lane, Bakery City, BC 12345</p>
          </div>
        </div>
        <div className="w-full h-48 rounded-md overflow-hidden border border-primary-dark">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2801458852885!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858087df2a492f%3A0x7e5f9b4c0b2b8c3a!2sUnion%20Square%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe>
        </div>
      </div>

      <h2 className="text-3xl font-serif text-accent-brown mb-6 border-b pb-2">Send Us a Message</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Your Name" id="name" value={formData.name} onChange={handleChange} required />
        <Input label="Your Email" id="email" type="email" value={formData.email} onChange={handleChange} required />
        <Input label="Subject" id="subject" value={formData.subject} onChange={handleChange} required />
        <div className="mb-4">
          <label htmlFor="message" className="block text-text-light text-sm font-serif mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-primary-dark rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 ease-in-out font-sans resize-y"
          ></textarea>
        </div>
        <Button type="submit" className="w-full text-lg py-3 animate-pop-in">
          Send Message
        </Button>
      </form>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Message Sent!"
      >
        <p className="text-center text-lg text-text mb-4">
          Thank you for contacting Cozy Cookies. We'll get back to you soon!
        </p>
        <div className="flex justify-center">
          <Button onClick={() => setIsModalOpen(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ContactPage;
