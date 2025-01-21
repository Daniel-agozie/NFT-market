import React, {useEffect, useState} from 'react'
import Item from '../component/Item';
import Header from '../component/Header';
import Gallery from '../component/Gallery';
import CURRENT_USER_ID from "../main"
import {DanNFT_backend} from "../../../declarations/DanNFT_backend"


const NFTs = ({userOwnedGallery}) => {


  return (
    <div>
      <Header />
      {userOwnedGallery}
    </div>
  )
}

export default NFTs;