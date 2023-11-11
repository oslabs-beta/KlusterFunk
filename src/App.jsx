import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Homepage from './containers/Homepage.jsx';
import Login from './containers/login.jsx';
import Dashboard from './containers/Dashboard.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default App;
