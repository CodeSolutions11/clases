import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Card from './components/Card'
import Products from './components/Products'

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <section className='max-w-[1640px] mx-auto p-4 py-12 grid grid-cols-3 gap-6'>
        <Card name="Iphone" model="16" img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYDD9Uq5p2-p8TaK4VoCcsz73LFJ0Q2ov1UQ&s'}/> 
        <Card name="Iphone" model="16 pro" img={'https://s.yimg.com/ny/api/res/1.2/MLz0y7AYhIjc3Cs7donqeg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM1MA--/https://media.zenfs.com/es/benzinga_espana_latam_149/894dfc8c38009740b57618d6e90ec053'}/> 
        <Card name="Iphone" model="16 pro max" img={'https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-finish-lineup-240909_big.jpg.large.jpg'}/> 
      </section>
      <Products />
    </div>
  )
}

export default App