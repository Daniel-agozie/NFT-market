import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import icon from "../../public/hamburger.png"

const Header = () => {

  const [isOpen, setIsOpen] = useState()

  const menu = () => {
    setIsOpen(!isOpen)
  }

  const action = ({ isActive }) => (
    isActive ? "border-b border-white animate-slidedown" : "border-none"
  )


  return (
  <nav className='text-ash flex justify-between items-center p-5 fixed left-0 right-0 border-b h-16 border-blue z-50 bg-coal font-roboto'>

      <div className='flex flex-1'>
        <NavLink to="/" className='ml-5'>Dan NFT</NavLink>
      </div>

      <div className=''>
        <img src={icon} alt="menu" className='w-10 cursor-pointer md:hidden block' onClick={menu}/>
      </div>
      
      {isOpen && ( 
        <div className='flex flex-col gap-10 text-white bg-black opacity-80 justify-center items-center h-screen w-56 absolute top-16 right-0 animate-slideright'>
          <NavLink to="/discover" className={action}>
            Discover
          </NavLink> 

          <NavLink to="/minter" className={action}>
            Minter
          </NavLink>

          <NavLink to="/nft" className={action}>
            My NFT
          </NavLink>
        </div>
      )}

  
    <div className='hidden md:block '>
      <div className='flex gap-10 mr-3 '>
        <NavLink to="/discover" className={action}>
          Discover
        </NavLink>

        <NavLink to="/minter" className={action}>
          Minter
        </NavLink>

        <NavLink to="/nft" className={action}>
          My NFT
        </NavLink>
      </div>
      </div>


      {/* <Footer/> */}
      </nav>
  )
}

export default Header;