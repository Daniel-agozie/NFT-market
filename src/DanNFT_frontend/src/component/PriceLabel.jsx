import React from 'react'

const PriceLabel = ({sellItem}) => {
  console.log(sellItem);
  
  return (
    <div className='text-green-600'>{sellItem} Dan</div>
  )
}

export default PriceLabel