import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className="flex justify-around items-center">
        <Link href={"/"} >CodeSolutions</Link>

        <ul className="flex gap-4">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/pages/contact"}>Contact</Link></li>
            <li><Link href={"/pages/login"}>Login</Link></li>
            <li><Link href={"/pages/register"}>Registro</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar