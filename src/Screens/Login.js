import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [nicNo, setNicNo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const validNic = '0101';
    const validPassword = 'pass';

    if (nicNo === validNic && password === validPassword) {
      console.log('Login successful');
      navigate('/home');
    } else {
      setError('Invalid NIC number or password');
    }
  };

  const handleRegister = () => {
    navigate('/signup');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500 ">
      <div className="p-8 bg-white shadow-lg bg-opacity-20 backdrop-blur-lg rounded-xl w-96">
        <h2 className="mb-6 text-3xl font-bold text-center text-white">Login</h2>
        {error && <p className="p-2 mb-4 text-sm text-yellow-300 bg-red-500 rounded">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="NIC no"
              value={nicNo}
              onChange={(e) => setNicNo(e.target.value)}
              className="w-full px-4 py-3 placeholder-gray-500 bg-white bg-opacity-50 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-purple-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 placeholder-gray-500 bg-white bg-opacity-50 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white transition duration-300 ease-in-out transform rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 hover:scale-105"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between mt-6 text-sm text-white">
          <button 
            onClick={handleRegister}
            className="transition duration-300 hover:text-yellow-300"
          >
            Register
          </button>
          <a href="#" className="transition duration-300 hover:text-yellow-300">Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;