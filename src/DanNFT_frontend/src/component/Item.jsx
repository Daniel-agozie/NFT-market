import React, { useEffect, useState } from 'react'
import logo from "../../public/favicon.ico"
import { HttpAgent, Actor } from '@dfinity/agent';
import { idlFactory } from '../../../declarations/nft';
import { Principal } from '@dfinity/principal';


const Item = ({Nftid}) => {

  const [name, setName] = useState();
  const [owner, setOwner] = useState()
  const [image, setImage] = useState()
 
  // const id = Principal.fromText("a3shf-5eaaa-aaaaa-qaafa-cai");
  const id = Nftid

    const localHost = "http://127.0.0.1:4943/";
    const agent =  HttpAgent.createSync({host: localHost});
  
      agent.fetchRootKey();
  
  const loadNft = async () => {
    const nftActor = Actor.createActor(idlFactory, {
      agent,
      canisterId: id
    });

    const name =  await  nftActor.getName();
    const owner = await  nftActor.getOwner();
    const imageData = await  nftActor.getAsset();
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
    <div className='text-white pt-16 w-44 '>
      <div className=''>
        <img className='h-56 bg-blue' src={image} alt="NFT info" />
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