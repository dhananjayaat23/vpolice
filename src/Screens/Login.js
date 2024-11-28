// src/Screens/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

const Login = () => {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (keycloak.authenticated) {
      navigate('/home');
    }
  }, [keycloak.authenticated, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    keycloak.login();
  };

  const handleRegister = () => {
    keycloak.register();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500">
      <div className="p-8 bg-white shadow-lg bg-opacity-20 backdrop-blur-lg rounded-xl w-96">
        <h2 className="mb-6 text-3xl font-bold text-center text-white">Login</h2>
        <div className="space-y-6">
          <button
            onClick={handleLogin}
            className="w-full py-3 text-white transition duration-300 ease-in-out transform rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 hover:scale-105"
          >
            Login with Keycloak
          </button>
          <div className="flex justify-between mt-6 text-sm text-white">
            <button 
              onClick={handleRegister}
              className="transition duration-300 hover:text-yellow-300"
            >
              Register
            </button>
            <button 
              onClick={() => keycloak.login({ action: 'resetCredentials' })}
              className="transition duration-300 hover:text-yellow-300"
            >
              Forgot password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;