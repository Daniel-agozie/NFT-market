import React, { useEffect, useState } from 'react'
import Item from './Item'
import { Principal} from "@dfinity/principal"


const Gallery = (props) => {

  const [items, setItems] = useState()

  const fetchNFTs = () => {
    if (props.ids != undefined) {
      setItems(
        props.ids.map( (NFTID) => (
          <Item Nftid={NFTID} key={NFTID.toText()} />
        ))
      )
    }
  }

  useEffect( () => {
    fetchNFTs()
  }, [])

  return (
    <div className="text-white  ">
      <div className='pt-20 flex justify-center font-bold font-roboto'>MY NFTs</div>
      <div className='flex flex-col justify-center items-center '>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-7'>{items}</div>
      </div>

    </div>
  )
}

export default Gallery;
{/* <Item id="a3shf-5eaaa-aaaaa-qaafa-cai"/> */}