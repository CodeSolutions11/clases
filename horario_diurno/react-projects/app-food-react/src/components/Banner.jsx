import React from 'react'

const Banner = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 max-h-[500px] relative '>
        <div className='absolute w-full h-full text-gray-400 max-h-[500px] bg-black/60 flex flex-col justify-center '>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                Code <span className='text-sky-600'>Solutions</span>
            </h1>
            <h2 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '>
                Aprende a  <span className='text-sky-600'>Programar</span>
            </h2>
        </div>
        <img 
            src="https://www.consultoresexpertos.org/wp-content/uploads/2021/07/shutterstock_1078387013-scaled-1.jpeg" 
            alt="imagen de programacion"
            className='w-full max-h-[500px] object-cover rounded-md'
        />
    </div>
  )
}

export default Banner