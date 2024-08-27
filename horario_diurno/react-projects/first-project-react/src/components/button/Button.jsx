import React from 'react'
import './button.css'

const Button = ({content, attr, handleColor}) => {
    console.log(content);

  return (
    <button onClick={handleColor} className={attr}>{content}</button>
  )
}

export default Button