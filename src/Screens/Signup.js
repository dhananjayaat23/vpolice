import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    nic: '',
    address: '',
    contactNo: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add registration logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-green-400 to-blue-500 animate-gradient-x">
      <div className="w-full max-w-md p-8 transition-all duration-300 transform bg-white rounded-lg shadow-lg bg-opacity-20 backdrop-blur-lg">
        <h2 className="mb-6 text-3xl font-bold text-center text-white">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 transition-all duration-300 bg-white bg-opacity-50 border-2 border-blue-300 rounded-md focus:border-purple-500 focus:ring focus:ring-purple-200"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 transition-all duration-300 bg-white bg-opacity-50 border-2 border-blue-300 rounded-md focus:border-purple-500 focus:ring focus:ring-purple-200"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              name="dob"
              placeholder="DOB"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-3 py-2 transition-all duration-300 bg-white bg-opacity-50 border-2 border-blue-300 rounded-md focus:border-purple-500 focus:ring focus:ring-purple-200"
              required
            />
            <input
              type="text"
              name="nic"
              placeholder="NIC"
              value={formData.nic}
              onChange={handleChange}
              className="w-full px-3 py-2 transition-all duration-300 bg-white bg-opacity-50 border-2 border-blue-300 rounded-md focus:border-purple-500 focus:ring focus:ring-purple-200"
              required
            />
          </div>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 transition-all duration-300 bg-white bg-opacity-50 border-2 border-blue-300 rounded-md focus:border-purple-500 focus:ring focus:ring-purple-200"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="tel"
              name="contactNo"
              placeholder="Contact no"
              value={formData.contactNo}
              onChange={handleChange}
              className="w-full px-3 py-2 transition-all duration-300 bg-white bg-opacity-50 border-2 border-blue-300 rounded-md focus:border-purple-500 focus:ring focus:ring-purple-200"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 transition-all duration-300 bg-white bg-opacity-50 border-2 border-blue-300 rounded-md focus:border-purple-500 focus:ring focus:ring-purple-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white transition-all duration-300 transform rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 hover:scale-105"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;