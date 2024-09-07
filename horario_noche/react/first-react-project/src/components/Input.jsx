import React from 'react'

const Input = ({placeholder, styles, type}) => {
  return (
    <input 
      type={type}
      placeholder={placeholder} 
      className={`px-[10px] py-[5px] rounded-md font-bold ${styles}`}/>
  )
}

export default Input