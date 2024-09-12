import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex'>
        <h3>IMAGEN</h3>
        <ul className='flex'>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='login' >Login</Link></li>
            <li><Link to='register' >Register</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar