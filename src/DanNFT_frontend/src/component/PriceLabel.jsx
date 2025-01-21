import React from 'react'

const PriceLabel = ({sellItem}) => {
  console.log(sellItem);
  
  return (
    <div className='text-white'>{sellItem} Dan</div>
  )
}

export default PriceLabel