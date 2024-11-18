import React from 'react';
import { Users, FileText, UserPlus, CheckCircle, XCircle, Users as UsersIcon } from 'lucide-react';

const DashboardCard = ({ title, icon: Icon, children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-xl overflow-hidden ${className}`}>
    <div className="px-4 py-3 bg-gradient-to-r from-green-400 to-blue-400">
      <div className="flex items-center space-x-2 text-white">
        {Icon && <Icon size={24} />}
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
    </div>
    <div className="p-4">
      {children}
    </div>
  </div>
);

const Dashboard = () => {
  const newReports = [
    { id: 1, title: 'Robbery 1', date: '2024-03-15', status: 'New' },
    { id: 2, title: 'Robbery 2', date: '2024-03-15', status: 'New' },
    { id: 3, title: 'Robbery 3', date: '2024-03-15', status: 'New' },
  ];

  const registrationRequests = [
    { id: 1, name: 'Dananjaya Silva', email: 'dana@example.com', date: '2024-03-15' },
    { id: 2, name: 'Dananjaya Silva', email: 'dana@example.com', date: '2024-03-15' },
    { id: 3, name: 'Dananjaya Silva', email: 'dana@example.com', date: '2024-03-15' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100">
      <header className="p-6 text-white shadow-lg bg-gradient-to-r from-green-600 to-blue-600">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </header>

      <main className="p-6 space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <DashboardCard title="New Incident Reports" icon={FileText}>
            <div className="space-y-4">
              {newReports.map(report => (
                <div 
                  key={report.id} 
                  className="p-3 transition-colors duration-150 border border-gray-200 rounded-lg hover:bg-blue-50"
                >
                  <h3 className="font-medium">{report.title}</h3>
                  <p className="text-sm text-gray-600">{report.date}</p>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard title="New User Registration Requests" icon={UserPlus}>
            <div className="space-y-4">
              {registrationRequests.map(request => (
                <div 
                  key={request.id} 
                  className="p-3 transition-colors duration-150 border border-gray-200 rounded-lg hover:bg-blue-50"
                >
                  <h3 className="font-medium">{request.name}</h3>
                  <p className="text-sm text-gray-600">{request.email}</p>
                  <div className="flex mt-2 space-x-2">
                    <button className="px-3 py-1 text-sm text-white transition-colors duration-150 bg-green-500 rounded-full hover:bg-green-600">
                      Approve
                    </button>
                    <button className="px-3 py-1 text-sm text-white transition-colors duration-150 bg-red-500 rounded-full hover:bg-red-600">
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          <div className="space-y-6">
            <DashboardCard title="Approved Incidents" icon={CheckCircle}>
              <div className="text-2xl font-bold">25</div>
              <p className="text-gray-600">Total approved this month</p>
            </DashboardCard>

            <DashboardCard title="Declined Incidents" icon={XCircle}>
              <div className="text-2xl font-bold">8</div>
              <p className="text-gray-600">Total declined this month</p>
            </DashboardCard>

            <DashboardCard title="Active Users" icon={UsersIcon}>
              <div className="text-2xl font-bold">142</div>
              <p className="text-gray-600">Currently active users</p>
            </DashboardCard>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;