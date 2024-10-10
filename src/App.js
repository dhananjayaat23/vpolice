import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import AdminLogin from './Screens/AdminLogin';
import AdminHome from './Screens/AdminHome';

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
      </Routes>
    </BrowserRouter>
  )
}

export default App