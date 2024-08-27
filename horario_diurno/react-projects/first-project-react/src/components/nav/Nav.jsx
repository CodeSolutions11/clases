import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

const Nav = ({logo}) => {
  return (
    <nav>
        <img src={logo} alt="" />

        <ul>
          <li>Pagina 1</li>
          <li>Pagina 2</li>
          <li>Pagina 3</li>
        </ul>
    </nav>
  )
}

export default Nav