import React from 'react';

const Input = ({ label, id, type = 'text', value, onChange, placeholder, required = false, className = '', ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-text-light text-sm font-serif mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-2 border border-primary-dark rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 ease-in-out font-sans ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
