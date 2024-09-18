import React, { useState }  from 'react'
import {data} from '../data/data.js'

const Products = () => {
    console.log(data);

    const [product, setProduct] = useState(data);

    const filterType = (category) =>{
        setProduct(
            data.filter((item) => {
                return item.category == category
            })
        )
    }

  return (
    <section className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-4xl text-sky-600 text-center font-bold'>Apple Products</h1>

        {/* Filters */}

        <div>
            <h3>Filter Types</h3>
            <div>
                <button
                    onClick={()=>setProduct(data)}
                    className='m-1'
                >
                    All
                </button>
                <button
                    onClick={()=>filterType('Iphone')}
                    className='m-1'
                >
                    Iphones
                </button>
                <button
                    onClick={()=>filterType('Mac')}
                    className='m-1'
                >
                    Macs
                </button>
                <button
                    onClick={()=>filterType('Ipad')}
                    className='m-1'
                >
                    Ipads
                </button>
            </div>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {product.map((item, index)=>(
                <div
                    key={index}
                    className='border shadow-lg rounded-lg hover:scale-105 duration-300'
                >
                    <img 
                        className='w-full h-[200px] object-contain'
                        src={item.img} alt={item.name} />

                    <div className='flex justify-between px-2 py-4'>
                        <h3 className='text-sky-500 underline font-bold'>{item.name}</h3>
                        <span className='bg-sky-800 text-white font-bold p-1 rounded-full'>{item.price}</span>
                    </div>
                </div>
            ))}
        </div>

    </section>
  )
}

export default Products