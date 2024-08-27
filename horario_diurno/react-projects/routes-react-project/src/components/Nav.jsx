import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <nav>
        <ul className='flex gap-[20px]'>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='login' >Login</Link></li>
            <li><Link to='register' >Register</Link></li>

        </ul>
    </nav>
  )
}

export default Nav