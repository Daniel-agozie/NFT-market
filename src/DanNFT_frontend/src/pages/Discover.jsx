import React from 'react'
import Header from '../component/Header'
import DiscoverContent from '../component/DiscoverContent'

const Discover = ({listingGallery}) => {
  return (
    <div>
      <Header />
      <DiscoverContent listingGallery={listingGallery}/>
    </div>
  )
}

export default Discover