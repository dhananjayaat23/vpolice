import React, { useState } from 'react';

const AdminLogin = () => {
  const [secretKey, setSecretKey] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { secretKey, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500">
      <div className="w-full max-w-md p-8 bg-white shadow-xl bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl">
        <h2 className="mb-6 text-3xl font-bold text-center text-white">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="text"
            placeholder="Secret Key"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
            className="w-full px-4 py-3 transition-all duration-300 bg-white bg-opacity-50 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 transition-all duration-300 bg-white bg-opacity-50 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
          <button
            type="submit"
            className="w-full px-4 py-3 font-bold text-white transition duration-300 transform rounded-lg bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 hover:scale-105"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between mt-6 text-sm text-white">
          <a href="#" className="transition duration-300 hover:text-green-300">Register</a>
          <a href="#" className="transition duration-300 hover:text-blue-300">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;