import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Register from '../pages/Register'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default Routers