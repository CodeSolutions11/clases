import React, { useState } from 'react'
import {data} from '../data/data.js'

const Cursos = () => {

    const [cursos, setCursos] = useState(data);
    console.log(cursos)

    const filterCategory = (category)=>{
        setCursos(
            data.filter(item => {
                return item.category == category
            })
        )
    }

  return (
    <div className='max-w-[1640px] m-auto px-4 py-[3rem]'>
        <h1 className='text-sky-500 font-bold text-4xl text-center underline'>Desarrollo Web</h1>

        {/*  Filtro */}
        <div className='flex flex-col justify-between lg:flex-row'>
            <div>
                <h3 className='font-bold text-sky-900'>Filter type</h3>
                <div className='flex flex-wrap justify-between'>
                    <button 
                        className='m-1 border-sky-500 text-sky-700 hover:bg-sky-600 hover:text-white'
                        onClick={()=>setCursos(data)}
                    >
                        All
                    </button>
                    <button 
                        className='m-1 border-sky-500 text-sky-700 hover:bg-sky-600 hover:text-white'
                        onClick={()=>filterCategory('FrontEnd')}
                    >
                        FrontEnd
                    </button>
                    <button 
                        className='m-1 border-sky-500 text-sky-700 hover:bg-sky-600 hover:text-white'
                        onClick={()=>filterCategory('BackEnd')}
                    >
                        BackEnd
                    </button>
                    <button 
                        className='m-1 border-sky-500 text-sky-700 hover:bg-sky-600 hover:text-white'
                        onClick={()=>filterCategory('DataBase')}
                    >
                        DataBase
                    </button>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-3 gap-6 pt-4 '>
            {cursos.map((item, id)=>(
                <div
                    className='border shadow-lg rounded-lg hover:scale-105 duration-300'
                    key={id}
                >
                    <img 
                        className='h-[14rem] w-full'
                        src={item.img} 
                        alt="/" 
                    />
                    <div>
                        <h3 className='font-bold'>{item.name}</h3>
                        <span className='bg-sky-200 text-sky-900 p-1 '>{item.price}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cursos