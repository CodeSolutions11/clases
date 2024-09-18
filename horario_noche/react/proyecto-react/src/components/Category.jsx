import React from 'react'
import {categories} from '../data/data.js'

const Category = () => {
    console.log(categories);
  return (
    <section className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-sky-600 font-bold text-4xl text-center'>Top Menu Items</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 py-6'>
            {categories.map((item, index)=>(
                <div
                    key={index}
                    className='bg-gray-200 rounded-lg p-4 flex justify-between items-center'
                >
                    <h2 className='font-bold text-2xl sm:text-xl'>{item.category}</h2>
                    <img src={item.img} alt="/"  className='w-20'/>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Category