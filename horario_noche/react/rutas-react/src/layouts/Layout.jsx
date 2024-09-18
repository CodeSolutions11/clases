import React from 'react'
import Nav from '../components/Nav'
import Home from '../pages/Home'
import Routers from '../routes/Routers'

const Layout = () => {
  return (
    <div className='grid grid-rows-[10vh,90vh]'>
        <Nav />
        <main className='flex items-center justify-center'>
            <Routers />
        </main>
    </div>
  )
}

export default Layout