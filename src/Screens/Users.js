import React, { useState } from 'react';
import { Eye, Edit, Trash2, X, User } from 'lucide-react';

const Users = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const users = [
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
      address: '123 Main St, City',
      contactNo: '+1987654321',
      profilePic: null
    }
  ];

  const handleViewProfile = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleDelete = (userId) => {
    console.log('Deleting user:', userId);
    setShowModal(false);
  };

  const handleEdit = (user) => {
    console.log('Editing user:', user);
  };

  const ProfileModal = ({ user, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative z-50 w-full max-w-md mx-4 overflow-hidden bg-white shadow-2xl rounded-xl">
        <div className="relative h-32 bg-gradient-to-r from-green-400 to-blue-500">
          <button
            onClick={onClose}
            className="absolute p-1 text-white transition-colors duration-150 rounded-full top-4 right-4 hover:bg-white/20"
          >
            <X size={24} />
          </button>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute flex items-center justify-center w-32 h-32 mx-auto overflow-hidden bg-white border-4 border-white rounded-full shadow-lg -top-16">
            {user.profilePic ? (
              <img
                src={user.profilePic}
                alt={`${user.firstName} ${user.lastName}`}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-100">
                <User size={64} className="text-gray-400" />
              </div>
            )}
          </div>
        </div>

        <div className="px-6 pt-20 pb-6">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
            {user.firstName} {user.lastName}
          </h2>
          
          <div className="space-y-6">
            <div className="p-4 space-y-4 rounded-lg bg-gray-50">
              <h3 className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-500">Email</label>
                  <p className="mt-1 text-gray-800">{user.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Contact Number</label>
                  <p className="mt-1 text-gray-800">{user.contactNo}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Address</label>
                  <p className="mt-1 text-gray-800">{user.address}</p>
                </div>
              </div>
            </div>

            <div className="p-4 space-y-4 rounded-lg bg-gray-50">
              <h3 className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
                Personal Information
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500">Date of Birth</label>
                  <p className="mt-1 text-gray-800">{user.dob}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">NIC</label>
                  <p className="mt-1 text-gray-800">{user.nic}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <button
              onClick={() => handleEdit(user)}
              className="flex-1 py-2.5 px-4 text-white text-sm font-medium transition-colors duration-150 bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div className="flex items-center justify-center">
                <Edit size={16} className="mr-2" />
                Edit Profile
              </div>
            </button>
            <button
              onClick={() => handleDelete(user.id)}
              className="flex-1 py-2.5 px-4 text-white text-sm font-medium transition-colors duration-150 bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <div className="flex items-center justify-center">
                <Trash2 size={16} className="mr-2" />
                Delete User
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100">
      <header className="p-6 text-white shadow-lg bg-gradient-to-r from-green-600 to-blue-600">
        <h1 className="text-3xl font-bold">Users</h1>
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
                  <th className="px-6 py-4 text-sm font-medium tracking-wider text-center uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id} className="transition-colors duration-150 hover:bg-blue-50">
                    <td className="px-6 py-4 whitespace-nowrap">{user.firstName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.lastName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <button
                        onClick={() => handleViewProfile(user)}
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
        <ProfileModal 
          user={selectedUser} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </div>
  );
};

export default Users;