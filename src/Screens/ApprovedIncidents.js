import React, { useState } from 'react';
import { Eye } from 'lucide-react';

const approvedIncidents = [
  {
    date: '2024-03-15',
    time: '14:30',
    place: 'Main Street',
    incidentType: 'Robbery',
    description: 'Armed robbery at local convenience store',
    status: 'Approved',
    approvedBy: 'Admin',
    approvedDate: '2024-03-16'
  },
  {
    date: '2024-03-14',
    time: '09:15',
    place: 'Central Park',
    incidentType: 'Vandalism',
    description: 'Graffiti on park benches',
    status: 'Approved',
    approvedBy: 'Admin',
    approvedDate: '2024-03-15'
  }
];

const ApprovedIncidents = () => {
  const [selectedIncident, setSelectedIncident] = useState(null);

  const handleView = (incident) => {
    setSelectedIncident(incident);
    console.log('Viewing incident:', incident);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100">
      <header className="p-6 text-white shadow-lg bg-gradient-to-r from-blue-600 to-green-600">
        <h1 className="text-3xl font-bold">Approved Incidents Report</h1>
      </header>

      <main className="p-6">
        <div className="overflow-hidden bg-white rounded-lg shadow-xl">
          <table className="w-full">
            <thead className="text-white bg-gradient-to-r from-blue-500 to-green-500">
              <tr>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">Date</th>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">Time</th>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">Place</th>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">Incident Type</th>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">Description</th>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">ApprovedBy</th>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-left uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {approvedIncidents.map((incident, index) => (
                <tr key={index} className="transition-colors hover:bg-blue-50">
                  <td className="px-4 py-3 whitespace-nowrap">{incident.date}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{incident.time}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{incident.place}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{incident.incidentType}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{incident.description}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{incident.approvedBy}</td>
                  {/* <td className="px-4 py-3 whitespace-nowrap">
                    <span className="px-2 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
                      {incident.status}
                    </span>
                  </td> */}
                  <td className="px-4 py-3 whitespace-nowrap">
                    <button
                      className="inline-flex items-center px-3 py-1 text-sm text-white bg-blue-500 rounded-full hover:bg-blue-600"
                      onClick={() => handleView(incident)}
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
    </div>
  );
};

export default ApprovedIncidents;