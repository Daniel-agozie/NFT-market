import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {DanNFT_backend} from "../../../declarations/DanNFT_backend"
import { Principal } from '@dfinity/principal'
import Item from './Item'

const MinterInfo = () => {

  const {register, handleSubmit, formState: { errors }} = useForm()
  const [nftPrincipal, setnftPrincipal] = useState("")

  const onSubmit = async (data) => {
    const name = data.name;
    const image = data.image[0];
    const imageByteData = [...new Uint8Array(await image.arrayBuffer())];

    const newNFTID = await DanNFT_backend.mint(imageByteData, name);
    setnftPrincipal(newNFTID.toText())
  }


  if (nftPrincipal == "") {
  return (
    <div className='text-white pt-20'>
      <div className="font-bold font-roboto flex justify-center mt-10 text-2xl"> Create NFT </div>
        <div className=' flex flex-col items-center justify-center h-90vh gap-5'>
          <form className="flex flex-col gap-5" noValidate="" autoComplete="off" onSubmit={handleSubmit(onSubmit)} >
            <div className="">
              <input
                {...register("image", {required: true})}
                className="rounded-full font-playFair"
                type="file"
                accept="image/x-png,image/jpeg,image/gif,image/svg+xml,image/webp"
              />
            </div>
            {errors.image && <div>Image required</div>}
            <div className="font-bold font-playFair">Collection Name</div>
            <div className="">
              <div className="">
                <input
                  {...register("name", {required: true})}
                    placeholder="e.g. CryptoDunks"
                    type="text"
                    className="rounded-md bg-transparent border border-blue"
                />
              </div>
              {errors.name && <div>name required</div>}
            </div>
            <div className="flex justify-center">
              <button className="bg-blue px-2 py-2 rounded-xl font-monteserrat"  type='submit'>Mint NFT</button>
            </div>
         </form>

      </div>
    </div>
  ) } else {
   return( 
   <div>
      <div className='text-white'>Minted</div>
      <div> <Item /> </div>
    </div>
    )
  }
}

export default MinterInfo