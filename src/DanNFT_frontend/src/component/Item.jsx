import React, { useEffect, useState, useContext } from 'react'
import logo from "../../public/favicon.ico"
import { HttpAgent, Actor } from '@dfinity/agent';
import { idlFactory } from '../../../declarations/nft';
import { Principal } from '@dfinity/principal';
import {DanNFT_backend} from "../../../declarations/DanNFT_backend"
import Button from './Button';
import CURRENT_USER_ID from '../main';
import PriceLabel from './PriceLabel';
// import { AddContext } from '../Content/ItemProvider';


const Item = ({Nftid, role}) => {

  // const {name, setName,owner, setOwner,image, setImage, button, setButton, priceInput, setPriceInput, loaderHidden, setLoaderHidden, blur, setBlur, Listed, setListed, PriceLabels, setPriceLabel} = useContext(AddContext)

  const [name, setName] = useState();
  const [owner, setOwner] = useState()
  const [content, setContent] = useState()
  const [image, setImage] = useState()
  const [button, setButton] = useState()
  const [priceInput, setPriceInput] = useState()
  const [loaderHidden, setLoaderHidden] = useState(true)
  const [blur, setBlur] = useState();
  const [Listed, setListed] = useState()
  const [PriceLabels, setPriceLabel] = useState()

 
  // const id = Principal.fromText("a3shf-5eaaa-aaaaa-qaafa-cai");
  const id = Nftid

    const localHost = "http://127.0.0.1:4943/";
    const agent =  HttpAgent.createSync({host: localHost});
  
      agent.fetchRootKey();

  let nftActor;
  const loadNft = async () => {
     nftActor = Actor.createActor(idlFactory, {
      agent,
      canisterId: id
    });

    const name =  await nftActor.getName();
    const owner = await nftActor.getOwner();
    const details = await nftActor.getInfo()
    const imageData = await  nftActor.getAsset();
    const imageContent = new Uint8Array(imageData);
  
    const image = URL.createObjectURL(new Blob([imageContent.buffer], {type: "image/png"}));
    
    setName(name)
    setOwner(owner.toText())
    setContent(details)
    setImage(image)

    const nftIsListed = await DanNFT_backend.isListed(Nftid);

    if (role == "collection") {
      if(nftIsListed) {
        setOwner("DanNFT")
        setBlur({filter: 'blur(5px)'})
        setListed("Listed")
      } else {
        setButton(<Button handleClick={handleSell} text={"sell"}/>)
      }
    } else if (role == "discover") {
      const originalOwner = await DanNFT_backend.getOriginalOwner(Nftid);
      if (originalOwner.toText() != CURRENT_USER_ID.toText()) {
        setButton(<Button handleClick={handleBuy} text={"Buy"} />)
      }
      const price = await DanNFT_backend.getListedNFTPrice(Nftid)
      setPriceLabel(<PriceLabel sellItem={Number(price)} />)
    }

  }

  useEffect(() => {
    loadNft();
  }, [])

  let price;

  const handleSell = () => {
    setPriceInput(
      <div>
      <input className='w-20 rounded-md text-black outline-none' placeholder='price'
      value={price}
      onChange={(e) => price = e.target.value}
      />
    </div>
    )
    setButton(<Button handleClick={sellItem} text={"confirm"}/>)
  }

  const sellItem = async () => {
    setBlur({filter: 'blur(5px)'})
    setLoaderHidden(false)
    const listing = await DanNFT_backend.listItem(Nftid, Number(price))
    console.log(listing);
    
    if (listing == "success") {
      const DanNFTid = await DanNFT_backend.getDanNFTCanisterId()
      const transferResult = await nftActor.transferOwnerShip(DanNFTid)
      console.log("transfer : " + transferResult);
      if (transferResult == "success") {
        setLoaderHidden(true)
        setButton()
        setPriceInput()
        setOwner("DanNFT")
        setListed("Listed")
      }
    }
  }

  const handleBuy = async () => {
    console.log("Buy clicked");
  }

  return (
    <div className='text-white pt-16 w-44 '>
      <div className=''>
        <img className='h-56 bg-blue'style={blur} src={image} alt="NFT info" />
        <div hidden={loaderHidden} className="lds-ellipsis">
          <div hidden={loaderHidden}></div>
          <div hidden={loaderHidden}></div>
          <div hidden={loaderHidden}></div>
          <div hidden={loaderHidden}></div>
        </div>
        <div className='flex flex-col justify-center items-center text-light font-monteserrat gap-2'>
          {PriceLabels }
          <div className='font-bold'>{name} <span className='text-green-500'> {Listed}</span></div>
          <div className="text-sm">{content}</div>
          <div>Owner: {owner}</div>
          {priceInput}
          {button}
        </div>
      </div>
    </div>
  )
}

export default Item