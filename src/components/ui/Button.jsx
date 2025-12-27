import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-full font-serif font-bold transition duration-150 ease-in-out transform active:scale-95 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-accent-brown text-white hover:bg-accent-brown/90 focus:ring-accent-brown',
    secondary: 'bg-primary-dark text-text hover:bg-primary/90 focus:ring-primary-dark',
    outline: 'bg-transparent border-2 border-accent-brown text-accent-brown hover:bg-accent-brown hover:text-white focus:ring-accent-brown',
    ghost: 'bg-transparent text-accent-brown hover:bg-accent-brown/10 focus:ring-accent-brown',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
