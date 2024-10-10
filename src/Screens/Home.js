import React, { useState, useEffect } from 'react';
import { Plus, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreateIncidentPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl animate-scaleIn">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-blue-600">Create Incident</h2>
          <button onClick={onClose} className="text-gray-500 transition-colors duration-300 hover:text-red-500">
            <X size={24} />
          </button>
        </div>
        <form>
          <div className="space-y-4">
            <input
              type="date"
              className="w-full p-2 transition-all duration-300 border-2 border-green-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="mm/dd/yyyy"
            />
            <input
              type="time"
              className="w-full p-2 transition-all duration-300 border-2 border-green-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
            <input
              type="text"
              className="w-full p-2 transition-all duration-300 border-2 border-green-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Place"
            />
            <select className="w-full p-2 transition-all duration-300 border-2 border-green-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200">
              <option value="Robbery">Robbery</option>
              <option value="Accident">Accident</option>
              <option value="Public Disturbance">Public Disturbance</option>
              <option value="Shooting">Shooting</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              className="w-full p-2 transition-all duration-300 border-2 border-green-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Incident description"
              rows="3"
            />
            <div className="flex items-center space-x-2">
              <input
                type="file"
                id="file-upload"
                className="hidden"
              />
              <label htmlFor="file-upload" className="px-4 py-2 text-blue-600 transition-colors duration-300 bg-blue-100 rounded-lg cursor-pointer hover:bg-blue-200">
                Choose Files
              </label>
              <span className="text-sm text-gray-500">No file chosen</span>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <button type="submit" className="px-4 py-2 text-white transition-colors duration-300 bg-green-500 rounded-lg hover:bg-green-600">
              Submit
            </button>
            <button type="button" onClick={onClose} className="px-4 py-2 text-blue-700 transition-colors duration-300 bg-blue-100 rounded-lg hover:bg-blue-200">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const userInfo = {
    nic: '123456789',
    name: 'Dananjaya Silva',
    contact: '0711 234 567',
    email: 'dana@example.com',
    imageUrl: 'https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png',
  };

  const incidents = [
    { date: '04/01/24', description: 'Bla Bla' },
    { date: '05/01/24', description: 'Bla Bla' },
    { date: '05/10/24', description: 'Bla Bla' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-100 to-blue-100">
      <header className="p-4 text-white shadow-md bg-gradient-to-r from-green-500 to-blue-600">
        <h1 className="text-2xl font-bold">My Incident Reports</h1>
      </header>
      
      <main className="flex-grow p-4 md:p-6 animate-fadeIn">
        <div className="flex flex-col gap-6 md:flex-row">
          {/* User Profile Card */}
          <div className="w-full overflow-hidden transition-transform duration-300 transform bg-white rounded-lg shadow-md md:w-64 hover:scale-105">
            <div className="p-4 bg-gradient-to-r from-green-400 to-blue-500">
              <img 
                src={userInfo.imageUrl} 
                alt="User" 
                className="w-24 h-24 mx-auto border-4 border-white rounded-full"
              />
            </div>
            <div className="p-4">
              <h2 className="mb-2 text-xl font-semibold text-center text-blue-600">{userInfo.nic}</h2>
              <div className="space-y-2 text-gray-600">
                <p><strong>Name:</strong> {userInfo.name}</p>
                <p><strong>Contact:</strong> {userInfo.contact}</p>
                <p><strong>Email:</strong> {userInfo.email}</p>
              </div>
              <button className="w-full py-2 mt-4 text-white transition-colors duration-300 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600">
                Edit Profile
              </button>
            </div>
          </div>

          <div className="flex-grow">
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <table className="w-full">
                <thead className="text-white bg-gradient-to-r from-green-500 to-blue-600">
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">Date</th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">Incident description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-green-200">
                  {incidents.map((incident, index) => (
                    <tr key={index} className="transition-colors duration-150 hover:bg-blue-50">
                      <td className="px-6 py-4 whitespace-nowrap">{incident.date}</td>
                      <td className="px-6 py-4">{incident.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <button 
        className="fixed p-4 text-white transition-all duration-300 transform rounded-full shadow-lg bottom-6 right-6 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 hover:scale-110"
        onClick={() => setIsPopupOpen(true)}
      >
        <Plus size={24} />
      </button>

      <CreateIncidentPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </div>
  );
};

export default Home;