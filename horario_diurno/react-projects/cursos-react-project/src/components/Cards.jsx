import React from 'react'

const Cards = ({name, fecha, img}) => {
  return (
    <>
        <section className='relative rounded-xl'>
            <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'>
                <p className='font-bold text-2xl px-2 py-4'>{name}</p>
                <span className='px-[0.5rem]'>{fecha}</span>
                <button className='border-white bg-white text-black absolute bottom-4 mx-2'>Adquirir</button>
            </div>
            <img 
                className=' rounded-xl'
                src={img} 
                alt="/" />
        </section>
        
    </>
  )
}

export default Cards