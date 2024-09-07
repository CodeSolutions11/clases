import React, {useState} from 'react'
import { IoMdMenu, IoIosSearch, IoIosClose, IoLogoJavascript, IoMdTime, IoIosRecording    } from "react-icons/io";
import { FaServicestack } from "react-icons/fa";
import { MdViewModule } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

const Nav = () => {
    const [nav, setNav ] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <div onClick={()=>setNav(!nav)} className='cursor-pointer'>
                <IoMdMenu className='text-sky-400' size={30} />
            </div>
            <h1 className='text-2xl px-2 sm:text-3xl lg:text-4xl '>
                Code <span className='font-bold'>Solutions</span>
            </h1>
            <div className='bg-gray-200 rounded-full p-1 text-[15px]'>
                <span className='bg-black text-white rounded-full p-2'>Dark</span>
                <span className='p-2'>white</span>
            </div>

        </div>
        <div className='bg-gray-200 rounded-3xl flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            < IoIosSearch size={30} />
            <input 
                type="text"
                placeholder='search'
                className='p-2 w-full bg-transparent focus:outline-none'
            />
        </div>

        <button className='bg-black text-white hidden md:flex items-center'>
            <FaServicestack size={24} className='mr-2' /> Services
        </button>

        {nav ? <div className='fixed top-0 left-0 w-full h-screen z-10 bg-black/70'></div> : ''}

        <div className={ nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-20 duration-500' : 'fixed top-0 left-[-100%] w-[-300px] h-screen bg-white z-20 duration-200' }>
            <IoIosClose 
                onClick={()=>setNav(!nav)}
                size={45}
                className='cursor-pointer absolute right-4 top-4'    
            />
             <h2 className='text-2xl p-4'>
                Code <span className='font-bold'>Solution</span>
            </h2>
            <aside>
                <ul className='p-4 flex flex-col text-gray-700'>
                    <li className='flex text-xl py-4'><IoLogoJavascript size={25} className='mr-4' /> Cursos</li>
                    <li className='flex text-xl py-4'><MdViewModule size={25} className='mr-4' /> Modulos</li>
                    <li className='flex text-xl py-4'><IoMdTime size={25} className='mr-4' /> Horarios</li>
                    <li className='flex text-xl py-4'><IoLogoJavascript size={25} className='mr-4' /> Clases</li>
                    <li className='flex text-xl py-4'><FaBookOpen size={25} className='mr-4' /> Temarios</li>
                    <li className='flex text-xl py-4'><FaSitemap size={25} className='mr-4' /> Read Map</li>
                </ul>
            </aside>
        </div>
    </div>
  )
}

export default Nav