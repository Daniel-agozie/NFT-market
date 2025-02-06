import React from 'react'

const Button = ({handleClick, text}) => {
  return (
    <div>
      <div>
        <button className='bg-blue px-10 py-1 mt-2 rounded-xl'
        onClick={handleClick}>
          {text}
        </button>
      </div>
    </div>
  )
}

export default Button