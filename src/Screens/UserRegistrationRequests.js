import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';

const UserRegistrationRequests = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Sample data with your structure
  const registrationRequests = [
    {
      id: 1,
      firstName: 'Dananjaya',
      lastName: 'Silva',
      email: 'dana@example.com',
      dob: '1990-01-01',
      nic: '123456789V',
      address: '123 Main St, City',
      contactNo: '+1234567890',
      profilePic: null
    },
    {
      id: 2,
      firstName: 'Dananjaya',
      lastName: 'Silva',
      email: 'dana@example.com',
      dob: '1992-05-15',
      nic: '987654321V',
      address: '456 Side St, Town',
      contactNo: '+9876543210',
      profilePic: null
    }
  ];

  const handleViewRequest = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const RequestModal = ({ user, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative z-50 w-full max-w-2xl mx-4 bg-white rounded-lg shadow-2xl">
        {/* Header */}
        <div className="relative p-4 border-b">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 text-gray-500 hover:text-gray-700 rounded-full"
          >
            <X size={24} />
          </button>
          <h2 className="text-xl font-bold text-gray-900">
            Approve User
          </h2>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex gap-6">
            {/* Left side - Photo */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-lg border-2 border-gray-300 overflow-hidden bg-gray-100 flex items-center justify-center">
                {user.profilePic ? (
                  <img
                    src={user.profilePic}
                    alt="User photo"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-gray-400">No Photo</div>
                )}
              </div>
            </div>

            {/* Right side - User Details */}
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500">First Name</label>
                  <p className="mt-1 text-gray-900">{user.firstName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Last Name</label>
                  <p className="mt-1 text-gray-900">{user.lastName}</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Contact No</label>
                <p className="mt-1 text-gray-900">{user.contactNo}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Email</label>
                <p className="mt-1 text-gray-900">{user.email}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Address</label>
                <p className="mt-1 text-gray-900">{user.address}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">NIC No.</label>
                <p className="mt-1 text-gray-900">{user.nic}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">DOB</label>
                <p className="mt-1 text-gray-900">{user.dob}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="flex-1 px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Approve
            </button>
            <button className="flex-1 px-4 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100">
      <header className="p-6 text-white shadow-lg bg-gradient-to-r from-green-600 to-blue-600">
        <h1 className="text-3xl font-bold">User Registration Requests</h1>
      </header>

      <main className="p-6">
        <div className="overflow-hidden bg-white rounded-lg shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="text-white bg-gradient-to-r from-green-400 to-blue-400">
                <tr>
                  <th className="px-6 py-4 text-sm font-medium tracking-wider text-left uppercase">First Name</th>
                  <th className="px-6 py-4 text-sm font-medium tracking-wider text-left uppercase">Last Name</th>
                  <th className="px-6 py-4 text-sm font-medium tracking-wider text-left uppercase">Email</th>
                  <th className="px-6 py-4 text-sm font-medium tracking-wider text-left uppercase">Contact No</th>
                  <th className="px-6 py-4 text-sm font-medium tracking-wider text-center uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {registrationRequests.map((request) => (
                  <tr key={request.id} className="transition-colors duration-150 hover:bg-blue-50">
                    <td className="px-6 py-4 whitespace-nowrap">{request.firstName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{request.lastName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{request.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{request.contactNo}</td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <button
                        onClick={() => handleViewRequest(request)}
                        className="inline-flex items-center px-3 py-1 text-sm text-white transition-colors duration-150 bg-blue-500 rounded-full hover:bg-blue-600"
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
        </div>
      </main>

      {showModal && selectedUser && (
        <RequestModal 
          user={selectedUser} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </div>
  );
};

export default UserRegistrationRequests;