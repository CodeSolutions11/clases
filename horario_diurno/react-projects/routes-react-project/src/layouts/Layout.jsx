import React from 'react'
import Nav from '../components/Nav'
import Routers from '../routes/Routers'
const Layout = () => {
  return (
    <>
        <Nav />
        <main>
          <Routers />
        </main>
    </>
  )
}

export default Layout