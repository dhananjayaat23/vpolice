import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/approvedincidents" element={<ApprovedIncidents />} />
        <Route path="/declinedincidents" element={<DeclinedIncidents />} />
        <Route path="/registrationrequests" element={<UserRegistrationRequests />} />
        <Route path="/users" element={<Users/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App