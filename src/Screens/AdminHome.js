import React, { useState } from 'react';
import { Eye } from 'lucide-react';

const incidentData = [
  {
    date: '2024-03-15',
    time: '14:30',
    place: 'Main Street',
    incidentType: 'Robbery',
    description: 'Armed robbery at local convenience store',
    userId: 'USR001',
    userName: 'Dananjaya Silva',
    contact: '+1234567890',
    email: 'dana@example.com'
  },
  {
    date: '2024-03-15',
    time: '14:30',
    place: 'Main Street',
    incidentType: 'Robbery',
    description: 'Armed robbery at local convenience store',
    userId: 'USR002',
    userName: 'Dananjaya Silva',
    contact: '+1234567890',
    email: 'dana@example.com'
  },
  {
    date: '2024-03-15',
    time: '14:30',
    place: 'Main Street',
    incidentType: 'Robbery',
    description: 'Armed robbery at local convenience store',
    userId: 'USR003',
    userName: 'Dananjaya Silva',
    contact: '+1234567890',
    email: 'dana@example.com'
  },
  {
    date: '2024-03-15',
    time: '14:30',
    place: 'Main Street',
    incidentType: 'Robbery',
    description: 'Armed robbery at local convenience store',
    userId: 'USR004',
    userName: 'Dananjaya Silva',
    contact: '+1234567890',
    email: 'dana@example.com'
  },
];

const IncidentModal = ({ isOpen, onClose, incident }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-5xl w-full mx-auto shadow-2xl relative">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-t-xl p-6 pr-12">
          <h2 className="text-2xl font-bold text-white">Incident Summary</h2>
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-white hover:bg-blue-700 rounded-full p-2 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Incident Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Incident Name</label>
                    <p className="text-gray-800 mt-1">{incident?.incidentType}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Description</label>
                    <p className="text-gray-800 mt-1">{incident?.description}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Time</label>
                      <p className="text-gray-800 mt-1">{incident?.time}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Date</label>
                      <p className="text-gray-800 mt-1">{incident?.date}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Place</label>
                      <p className="text-gray-800 mt-1">{incident?.place}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Attachments</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg h-32 flex items-center justify-center">
                <div className="text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">No attachments available</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">User Details</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">User ID</label>
                    <p className="text-gray-800 mt-1">{incident?.userId}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Name</label>
                    <p className="text-gray-800 mt-1">{incident?.userName}</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Contact</label>
                  <p className="text-gray-800 mt-1">{incident?.contact}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <p className="text-gray-800 mt-1">{incident?.email}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Validity Check</h3>
              <div className="flex space-x-4">
                <button 
                  className="flex-1 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium"
                  onClick={() => console.log('Approved')}
                >
                  Approve
                </button>
                <button 
                  className="flex-1 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium"
                  onClick={() => console.log('Declined')}
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminHome = () => {
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewIncident = (incident) => {
    setSelectedIncident(incident);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100">
      <header className="p-6 text-white shadow-lg bg-gradient-to-r from-green-600 to-blue-600">
        <h1 className="text-3xl font-bold">Incident Reports</h1>
      </header>
      <main className="p-6">
        <div className="overflow-hidden bg-white rounded-lg shadow-xl">
          <table className="w-full">
            <thead className="text-white bg-gradient-to-r from-green-400 to-blue-400">
              <tr>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">Date</th>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">Time</th>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">Place</th>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">Incident Type</th>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">Description</th>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-green-200">
              {incidentData.map((incident, index) => (
                <tr key={index} className="transition-colors duration-150 hover:bg-blue-50">
                  <td className="px-4 py-3 whitespace-nowrap">{incident.date}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{incident.time}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{incident.place}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{incident.incidentType}</td>
                  <td className="px-4 py-3">{incident.description}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <button
                        className="inline-flex items-center px-3 py-1 text-sm text-white transition-colors duration-150 bg-blue-500 rounded-full hover:bg-blue-600"
                        onClick={() => handleViewIncident(incident)}
                    >
                      <Eye size={16} className="mr-1" />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      
      <IncidentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        incident={selectedIncident}
      />
    </div>
  );
};

export default AdminHome;