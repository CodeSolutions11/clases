import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className="flex justify-around">
        <Link href={"/"} >CodeSolutions</Link>

        <ul className="flex gap-4">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/auth/login"}>Login</Link></li>
            <li><Link href={"/register"}>Registro</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar