import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

const Header = () => {
  return (
  <div>

      <div className='text-ash flex justify-between p-5 fixed top-0 left-0 right-0 border-b border-blue z-50 bg-coal font-roboto'>

      <NavLink to="/" className='ml-5'>Dan NFT</NavLink>
        
      <div className='flex gap-5 mr-3'>
        <NavLink to="/discover">
          Discover
        </NavLink>

        <NavLink to="/minter">
          Minter
        </NavLink>

        <NavLink to="/nft">
          My NFT
        </NavLink>
      </div>

      </div>
      {/* <Footer/> */}
  </div>
  )
}

export default Header;