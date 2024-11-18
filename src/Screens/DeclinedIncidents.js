import React, { useState } from 'react';
import { Eye, Archive } from 'lucide-react';

// Sample data for declined incidents
const declinedIncidents = [
  {
    date: '2024-03-15',
    time: '14:30',
    place: 'Main Street',
    incidentType: 'Robbery',
    description: 'Armed robbery at local convenience store',
    status: 'Declined',
    declinedBy: 'Admin',
    declinedDate: '2024-03-16',
    reason: 'Insufficient evidence'
  },
  {
    date: '2024-03-14',
    time: '09:15',
    place: 'Central Park',
    incidentType: 'Vandalism',
    description: 'Graffiti on park benches',
    status: 'Declined',
    declinedBy: 'Admin',
    declinedDate: '2024-03-15',
    reason: 'Duplicate report'
  }
];

const DeclinedIncidents = () => {
  const [selectedIncident, setSelectedIncident] = useState(null);

  const handleView = (incident) => {
    setSelectedIncident(incident);
    console.log('Viewing incident:', incident);
  };

  const handleArchive = (incident) => {
    console.log('Archiving incident:', incident);
    // Add archive functionality here
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-red-100 to-gray-100">
    //   <header className="p-6 text-white shadow-lg bg-gradient-to-r from-red-600 to-gray-600">
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100">
      <header className="p-6 text-white shadow-lg bg-gradient-to-r from-blue-600 to-green-600">
        <h1 className="text-3xl font-bold">Declined Incidents Report</h1>
      </header>

      <main className="p-6">
        <div className="overflow-hidden bg-white rounded-lg shadow-xl">
          <table className="w-full">
          <thead className="text-white bg-gradient-to-r from-blue-500 to-green-500">
            {/* <thead className="text-white bg-gradient-to-r from-red-500 to-gray-500"> */}
              <tr>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">Date</th>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">Time</th>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">Place</th>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">Incident Type</th>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">Description</th>
                {/* <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">Status</th> */}
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">Reason</th>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {declinedIncidents.map((incident, index) => (
                <tr key={index} className="transition-colors hover:bg-blue-50">
                  <td className="px-4 py-3 whitespace-nowrap">{incident.date}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{incident.time}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{incident.place}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{incident.incidentType}</td>
                  <td className="px-4 py-3">{incident.description}</td>
                  {/* <td className="px-4 py-3 whitespace-nowrap">
                    <span className="px-2 py-1 text-sm font-medium text-red-700 bg-red-100 rounded-full">
                      {incident.status}
                    </span>
                  </td> */}
                  <td className="px-4 py-3">{incident.reason}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button
                        className="inline-flex items-center px-3 py-1 text-sm text-white bg-blue-500 rounded-full hover:bg-blue-600"
                        onClick={() => handleView(incident)}
                      >
                        <Eye size={16} className="mr-1" />
                        View
                      </button>
                      <button
                        className="inline-flex items-center px-3 py-1 text-sm text-white bg-gray-500 rounded-full hover:bg-gray-600"
                        onClick={() => handleArchive(incident)}
                      >
                        <Archive size={16} className="mr-1" />
                        Archive
                      </button>
                    </div>
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

export default DeclinedIncidents;