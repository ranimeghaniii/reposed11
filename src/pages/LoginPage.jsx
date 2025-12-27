import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    const success = login(email, password);
    if (success) {
      navigate(from, { replace: true });
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 animate-fade-in">
      <h1 className="text-5xl font-handwriting text-accent-brown text-center mb-8">Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email Address"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
        />
        <Input
          label="Password"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
          required
        />
        {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
        <Button type="submit" className="w-full mt-6 text-lg py-3 animate-pop-in">
          Login
        </Button>
      </form>
      <p className="text-center text-text-light mt-6 text-sm">
        Don't have an account? <Link to="/register" className="text-accent-brown hover:underline">Register here</Link>
      </p>
      <p className="text-center text-text-light mt-2 text-xs">
        (Use 'test@example.com' and 'password123' to login)
      </p>
    </div>
  );
};

export default LoginPage;
