import React from 'react'

const Button = ({content, styles, aviso, avisoContent}) => {

  return (
    <button onClick={()=>aviso(avisoContent)} className={`border py-1 px-3 rounded-md hover:bg-white hover:text-black ${styles}`}>{content}</button>
  )
}

export default Button