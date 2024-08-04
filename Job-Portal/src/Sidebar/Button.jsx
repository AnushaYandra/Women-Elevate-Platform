import React from 'react'

function Button({handleClick, value, title}) {
  return (
    <button onClick={handleClick} value={value} className='px-3 py-1 border rounded-md text-base hover:bg-brown'>
      {title}
    </button> 
  )
}

export default Button
