import React,{useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Discover from "./pages/Discover";
import Minter from "./pages/Minter";
import NFTs from "./pages/NFTs";
import {DanNFT_backend} from "../../declarations/DanNFT_backend"
import CURRENT_USER_ID from "./main"
import Gallery from "./component/Gallery";

const App = () => {

  const [userOwnedGallery, setOwnedGallery] = useState()
  const [listingGallery, setListingGallery] = useState()
  
  const getNFTs = async () => {
    const userNFTIds =  await DanNFT_backend.getOwnedNFTs(CURRENT_USER_ID)
    console.log(userNFTIds)
    setOwnedGallery(<Gallery ids={userNFTIds} title={"My NFTs"}  role="collection"/>)

    const listedNFTIds = await DanNFT_backend.getListedNFTs();
    console.log(listedNFTIds);
    setListingGallery(<Gallery ids={listedNFTIds} title={"Discover NFTs"} role="discover"/>)
   }
 
   useEffect(() => {
     getNFTs()
   }, [])

  return(
    <Routes forceRefresh={true} >
      <Route path="/" element = {<Homepage />} />
      <Route path="/discover" element = {<Discover listingGallery={listingGallery}/>} />
      <Route path="/minter" element = {<Minter />} />
      <Route path="/nft" element = {<NFTs userOwnedGallery={userOwnedGallery}/>} />
    </Routes>
  )
}

export default App;