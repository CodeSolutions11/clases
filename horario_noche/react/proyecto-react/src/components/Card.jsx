import React from 'react'

const Card = ({name, model, img}) => {
  return (

        <div className='relative'>
            <div className='absolute w-full h-full bg-black/50 text-white'>
                <h2 className='font-bold text-2xl px-2 pt-4'>{name}</h2>
                <span className='px-2'>{model}</span>
                <button className='text-black hover:text-white'>Reservar</button>
            </div>
            <img 
                className='max-h-[10rem] w-full'
                src={img} alt={name} />
        </div>
  )
}

export default Card