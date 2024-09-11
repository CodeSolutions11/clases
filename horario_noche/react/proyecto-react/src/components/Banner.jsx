import React from 'react'
import img from '../img/image.png'


const Banner = () => {
  return (
    <section className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            <div className='absolute w-full h-full text-white max-h-[500px] bg-black/40 flex flex-col justify-center items-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Nuevos <span className=' text-white'>Iphones</span></h1>
                <p className='px-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>disponibles a partir del <span>proximo mes</span></p>
            </div>

            <img
                className='w-full object-cover max-h-[500px]' 
                src={img} alt="/" />
        </div>
    </section>
  )
}

export default Banner