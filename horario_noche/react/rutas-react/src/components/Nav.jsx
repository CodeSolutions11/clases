import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex justify-evenly bg-slate-700 text-white items-center'>
        <h1>Imagen</h1>

        <ul className='flex gap-8'>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='servicios' >Servicios</Link></li>
            <li><Link to='contacto' >Contacto</Link></li>
        </ul>
    </nav>
  )
}

export default Nav