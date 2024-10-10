import React from 'react';

const incidentData = [
  {
    date: '2024-03-15',
    time: '14:30',
    place: 'Main Street',
    incidentType: 'Robbery',
    description: 'Armed robbery at local convenience store',
  },
  {
    date: '2024-03-15',
    time: '14:30',
    place: 'Main Street',
    incidentType: 'Robbery',
    description: 'Armed robbery at local convenience store',
  },
  {
    date: '2024-03-15',
    time: '14:30',
    place: 'Main Street',
    incidentType: 'Robbery',
    description: 'Armed robbery at local convenience store',
  },
  {
    date: '2024-03-15',
    time: '14:30',
    place: 'Main Street',
    incidentType: 'Robbery',
    description: 'Armed robbery at local convenience store',
  },
];

const AdminHome = () => {
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
                  <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">Attachments</th>
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
                      <a href="#" className="text-blue-600 transition-colors duration-150 hover:text-blue-800 hover:underline">View</a>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <button className="px-3 py-1 mr-2 text-sm text-white transition-colors duration-150 bg-green-500 rounded-full hover:bg-green-600">Edit</button>
                      <button className="px-3 py-1 text-sm text-white transition-colors duration-150 bg-red-500 rounded-full hover:bg-red-600">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    );
  };
  
  export default AdminHome;