import React from 'react'
import Login from '../pages/Login'
import Navbar from '../components/Navbar'
import Routers from '../routes/Routers'

const Layout = () => {
  return (
    <div className='grid grid-rows-[10vh,90vh]'>
        {/* <header className='h-[10vh] w-[100vw]'>
          <Navbar />
        </header>
        <main className='bg-[#999] h-[90vh] w-[100vw]'>
          <Routers/>
        </main> */}
        <Navbar />
        <main className='bg-[#999]'>
          <Routers/>
        </main>
    </div>
  )
}

export default Layout