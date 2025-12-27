import React from 'react';
import { stores } from '../utils/mockData';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa'; // Assuming react-icons

const StoreCard = ({ store }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 animate-slide-in-up">
    <h3 className="text-3xl font-handwriting text-accent-brown mb-4">{store.name}</h3>
    <div className="flex items-start mb-2">
      <FaMapMarkerAlt className="text-accent-berry mt-1 mr-3 flex-shrink-0" />
      <p className="text-text-light font-serif">{store.address}</p>
    </div>
    <div className="flex items-center mb-2">
      <FaPhone className="text-accent-berry mr-3 flex-shrink-0" />
      <p className="text-text-light font-serif">{store.phone}</p>
    </div>
    <div className="flex items-center mb-4">
      <FaClock className="text-accent-berry mr-3 flex-shrink-0" />
      <p className="text-text-light font-serif">{store.hours}</p>
    </div>
    <div className="w-full h-48 rounded-md overflow-hidden border border-primary-dark">
      <iframe
        src={store.mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map of ${store.name}`}
      ></iframe>
    </div>
  </div>
);

const StoreLocatorPage = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-5xl font-handwriting text-accent-brown text-center mb-10">
        Find a Cozy Cookies Near You
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
};

export default StoreLocatorPage;
