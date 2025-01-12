import React, { useEffect, useState } from 'react'
import logo from "../../public/favicon.ico"
import { HttpAgent, Actor } from '@dfinity/agent';
import { idlFactory, nft } from '../../../declarations/nft';
import { Principal } from '@dfinity/principal';

const Item = () => {

  const [name, setName] = useState();
  const [owner, setOwner] = useState()
  const [image, setImage] = useState()
 
  const Nftid = Principal.fromText("a3shf-5eaaa-aaaaa-qaafa-cai");

  const localHost = "http://localhost:3000/";
  const agent = new HttpAgent({host: localHost});
  agent.fetchRootKey();

  const loadNft = async () => {
    const nftActor =await Actor.createActor(idlFactory, {
      agent,
      canisterId: Nftid
    });

    const name = await nftActor.getName();
    const owner = await nftActor.getOwner();
    const imageData = await nftActor.getAsset();
    const imageContent = new Uint8Array(imageData);
    const image = URL.createObjectURL(new Blob([imageContent.buffer], {type: "image/png"}));
    
    setName(name)
    setOwner(owner.toText())
    setImage(image)
  }

  useEffect(() => {
    loadNft();
  }, [])

  return (
    <div className='text-white pt-24 pb-96 mx-5 w-44'>
      <div>
        <img className='h-56' src={image} alt="NFT info" />
        <div className='flex flex-col justify-center items-center text-light font-monteserrat gap-3'>
          <div className='font-bold'>{name}</div>
          <div>Owner: {owner}</div>
          <button className='bg-blue px-3 py-2 mt-2 rounded-xl'>Sell</button>
        </div>
      </div>
    </div>
  )
}

export default Item