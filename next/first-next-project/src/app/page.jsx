import React from 'react'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <div className='grid grid-rows-[10vh,1fr]'>
      <Navbar />
      <h1>Home</h1>
    </div>
  )
}

export default page