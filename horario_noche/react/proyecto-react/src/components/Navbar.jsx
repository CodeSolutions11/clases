import React, { useState } from 'react'
import { IoMdMenu, IoMdSearch, IoMdCart, IoMdClose, IoMdLaptop, IoMdHome } from "react-icons/io";
import { MdOutlinePhoneAndroid, MdLocalOffer   } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";

const Navbar = () => {

    const [nav, setNav] = useState(false)

  return (
    <header className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>

        <section className='flex items-center'>
            <div className='cursor-pointer'>
                <IoMdMenu
                    onClick={()=>setNav(!nav)}
                    size={30} 
                />
            </div>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Tienda <span className='font-bold text-sky-500'>Online</span>
            </h2>
            <div className='hidden lg:flex items-center bg-gray-300 rounded-full  text-[14px]'>
                <span className='bg-black text-white rounded-full p-2'>Dark</span>
                <span className='p-4'>White</span>
            </div>
        </section>

        <section className='bg-gray-300 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] '>
            <IoMdSearch size={25} />
            <input 
                className='bg-transparent p-2 w-full focus:outline-none'
                type="text" 
                placeholder='Buscar Télefonos'
            />
        </section>

        <button className='bg-black text-white hidden md:flex items-center p-3 px-6 rounded-[1rem]'>
            <IoMdCart size={25} />
        </button>


        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

        <aside className={ nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
            <IoMdClose 
                onClick={()=>setNav(!nav)}
                className='absolute right-4 top-4 cursor-pointer'
                size={30}
            />

            <h2 className='text-2xl px-4 mt-12 text-center'>
                Tienda <span className='font-bold text-sky-500'>Online</span>
            </h2>

            <nav className='w-full flex justify-center'>
                <ul className='flex flex-col p-4 text-sky-700'>
                    <li className='text-xl py-4 flex'> <IoMdHome  size={25} /> Home</li>
                    <li className='text-xl py-4 flex'> <MdOutlinePhoneAndroid size={25} /> Iphones</li>
                    <li className='text-xl py-4 flex'> <MdOutlinePhoneAndroid size={25} /> Samsung</li>
                    <li className='text-xl py-4 flex'> <MdOutlinePhoneAndroid size={25} /> Xiaomi </li>
                    <li className='text-xl py-4 flex'> <IoMdLaptop size={25} /> Laptops</li>
                    <li className='text-xl py-4 flex'> <FaLaptopCode size={25} /> Pc's</li>
                    <li className='text-xl py-4 flex'> <MdLocalOffer  size={25} />Ofertas</li>
                </ul>
            </nav>

        </aside>

    </header>
  )
}

export default Navbar