import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak';
import PrivateRoute from './Components/PrivateRoute';

import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import AdminLogin from './Screens/AdminLogin';
import AdminHome from './Screens/AdminHome';
import Dashboard from './Screens/Dashboard';
import ApprovedIncidents from './Screens/ApprovedIncidents'
import DeclinedIncidents from './Screens/DeclinedIncidents';
import UserRegistrationRequests from './Screens/UserRegistrationRequests';
import Users from './Screens/Users';

function App() {
  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={{
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        pkceMethod: 'S256'
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/approvedincidents"
            element={
              <PrivateRoute>
                <ApprovedIncidents />
              </PrivateRoute>
            }
          />
          <Route
            path="/declinedincidents"
            element={
              <PrivateRoute>
                <DeclinedIncidents />
              </PrivateRoute>
            }
          />
          <Route
            path="/adminhome"
            element={
              <PrivateRoute roles={['admin']}>
                <AdminHome />
              </PrivateRoute>
            }
          />
          <Route
            path="/registrationrequests"
            element={
              <PrivateRoute roles={['admin']}>
                <UserRegistrationRequests />
              </PrivateRoute>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRoute roles={['admin']}>
                <Users />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ReactKeycloakProvider>
  )
}

export default App