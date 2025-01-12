import React from 'react';
import dayjs from "dayjs"

const Footer = () => {

  const Date = dayjs();
  const now = Date.year();

  return (
    <footer className='fixed bottom-0 w-full text-ash p-5 border-t border-blue z-50 bg-coal font-playFair'>
      <div className='flex justify-center mt-2'>
        Dan NFT one the biggest where you can find Non-fungible tokens (NFTs). Where you Buy, Sell, Discover new exclusive digital items.
      </div>
      <div className='text-hunter mt-10 flex justify-center'>Copyright © {now}</div>
    </footer>
  )
}

export default Footer