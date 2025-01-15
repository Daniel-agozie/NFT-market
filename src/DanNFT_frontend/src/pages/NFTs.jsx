import React, {useEffect, useState} from 'react'
import Item from '../component/Item';
import Header from '../component/Header';
import Gallery from '../component/Gallery';
import CURRENT_USER_ID from "../main"
import {DanNFT_backend} from "../../../declarations/DanNFT_backend"


const NFTs = () => {

  const [userOwnedGallery, setOwnedGallery] = useState()
  
  const getNFTs = async () => {
    const userNFTIds =  await DanNFT_backend.getOwnedNFTs(CURRENT_USER_ID)
    console.log(userNFTIds)
    setOwnedGallery(<Gallery ids={userNFTIds}/>)
   }
 
   useEffect(() => {
     getNFTs()
   }, [])

  return (
    <div>
      <Header />
      {userOwnedGallery}
    </div>
  )
}

export default NFTs;