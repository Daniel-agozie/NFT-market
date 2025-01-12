import React from 'react';
import image from "../../public/home-img.png"

const Homefeature = () => {
  return (
    <div className='flex justify-center'>
      <img className='pt-10 md:w-[800px] h-[500px]' src={image} alt="Home image" />
    </div>
  )
}

export default Homefeature