import React from 'react'
import image from "../../public/NFT.jpeg"

const HomeHeader = () => {
  return (
    <div className="my-16">
      <div className="flex sm:flex-row flex-col items-center font-roboto text-lg sm:text-xl text-light gap-10">

        <img src={image} className="w-[300px] sm:w-[700px] mx-10 rounded-xl"/>

        <div className="mx-10"> Welcome to Danny NFTs marketplace where cretors and collectors come together to trade unique digital assets. Built on ICP Blockchain, our platform offers a seamless and secure experience for minting, buying and selling NFTs.
        </div>
      </div>

      <div className="flex flex-col m-auto items-center mt-10">
        <div className="text-xl font-Chewy">Join The Future of Web3</div>
        <div className="font-roboto text-lg mt-5">Whether you're an artist looking to monetize your work, a gamer seeking rare in-game assets, or a collector for the next digital masterpiece, Danny NFTs is your gateway to the NFT revolution. <span className="text-xl text-green-600 font-bold"> Start Exploring Today. </span></div>
      </div>
    </div>
  )
}

export default HomeHeader