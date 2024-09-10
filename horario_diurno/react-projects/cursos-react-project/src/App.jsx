import React from 'react'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Cards from './components/Cards'
import Cursos from './components/Cursos'

const App = () => {
  return (
    <>
      <Nav />
      <Banner />
      <div className='max-w-[1640px] mx-auto p-4 py-[3rem] grid grid-cols-3 gap-6'>
        <Cards name='Curso de ReactJS' fecha='07/09' img='https://freeprojectscodes.com/wp-content/uploads/2022/06/React-js-projects-for-beginners-with-source-code.png' />
        <Cards name='Curso de JavaScript' fecha='07/10' img='https://storage.googleapis.com/medium-feed.appspot.com/images%2F9353691196%2F2f49650ed42b1-Para-que-e-usado-o-JavaScript.jpg' />
        <Cards name='Curso de NextJS' fecha='07/11' img='https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg' />
      </div>
      <Cursos />
    </>
  )
}

export default App