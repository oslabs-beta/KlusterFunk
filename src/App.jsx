import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './component/Homepage.jsx'
import Login from './component/login.jsx'
import Cluster from './component/Cluster.jsx'
import Dashboard from './component/Dashboard.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/cluster' element={<Cluster />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </>
  )
}

export default App
