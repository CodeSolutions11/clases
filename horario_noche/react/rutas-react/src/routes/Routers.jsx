import React from 'react'
import Home from '../pages/Home'
import Contacto from '../pages/Contacto'
import Servicios from '../pages/Servicios'

import {Route, Routes} from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/home' element={<Home />} />

        <Route path='/servicios' element={<Servicios />} />
        
        <Route path='/contacto' element={<Contacto />} />
    </Routes>
  )
}

export default Routers