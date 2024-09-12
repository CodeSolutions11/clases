import React from 'react'

import { categories } from '../data/data'

const Category = () => {
    console.log(categories);

  return (
    <section className='max-w-[1640px] m-auto px-4 py-12'>
        <h2 className='text-sky-500 font-bold text-4xl text-center'>Category Menu Items</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 py-6'>
            {categories.map((item, index)=>(
                <div
                    className='bg-gray-200 rounded-lg p-4 flex justify-between items-center'
                    key={index}
                >
                    <h3 className='font-bold sm:text-xl'>{item.name}</h3>
                    <img src={item.img} alt={item.name} className='w-20' />
                </div>
            ))}
        </div>

    </section>
  )
}

export default Category