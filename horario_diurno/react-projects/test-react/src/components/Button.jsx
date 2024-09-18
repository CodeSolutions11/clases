import React from 'react'

const Button = ({functionBtn, content}) => {

    console.log(functionBtn);  
  return (
    <button 
        onClick={functionBtn}
        className='bg-sky-300 px-10 py-4 rounded-lg hover:bg-white font-bold text-black text-2xl'
    
    >{content}</button>
  )
}

export default Button