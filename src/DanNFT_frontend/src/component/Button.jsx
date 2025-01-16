import React from 'react'

const Button = ({handleClick, text}) => {
  return (
    <div>
      <div>
        <button className='bg-blue px-3 py-2 mt-2 rounded-xl'
        onClick={handleClick}>
          {text}
        </button>
      </div>
    </div>
  )
}

export default Button