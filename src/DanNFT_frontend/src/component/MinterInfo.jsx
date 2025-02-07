import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { DanNFT_backend } from "../../../declarations/DanNFT_backend"
import { Principal } from '@dfinity/principal'
import Item from './Item'
import * as dayjs from 'dayjs';

const MinterInfo = () => {

  const {register, handleSubmit, formState: { errors }} = useForm()
  const [nftPrincipal, setNftPrincipal] = useState("")
  const [loaderHidden, setLoaderHidden] = useState(true)
  const [fileName, setfileName] = useState("No File Selected")
  
    const day = dayjs().unix()
    const time = dayjs()
    const now = time.format('DD/MM/YYYY')
    // console.log(now);

    // const fileChange = (e) => {
    //   const file = e.target.files[0];
    //   setfileName(file ? file.name : "No file Selected")
    // }

  const onSubmit = async (data) => {
    setLoaderHidden(false)
    const name = data.name;
    const details = data.content;
    // const date = parseInt(data.date);
    // const timestampInMilliseconds = date.valueOf()
    // const timestampInNanoSeconds = BigInt(timestampInMilliseconds)
    const date = day
    const image = data.image[0];
    const imageByteData = [...new Uint8Array(await image.arrayBuffer())];

    const newNFTID = await DanNFT_backend.mint(imageByteData, name, details, date);
    setNftPrincipal(newNFTID)
    setLoaderHidden(true)
  }

  if (nftPrincipal == "") {

  return (
    <div className='text-white pt-10'>

        <div hidden={loaderHidden} className="lds-ellipsis pt-10">
          <div hidden={loaderHidden}></div>
          <div hidden={loaderHidden}></div>
          <div hidden={loaderHidden}></div>
          <div hidden={loaderHidden}></div>
        </div>

      <div className="font-bold font-roboto flex justify-center text-2xl"> Create NFT </div>

        <div className=' flex flex-col items-center justify-center h-90vh mt-10'>

          <form className="flex flex-col gap-10  items-center justify-center mx-10" noValidate="" autoComplete="off" onSubmit={handleSubmit(onSubmit)} >

            <div className="flex flex-col gap-3 items-center mt-10">

              <input
                {...register("image", {required: true})}
                className="rounded-full font-playFair hidden"
                type="file"
                id='fileInput'
                accept="image/x-png,image/jpeg,image/gif,image/svg+xml,image/webp"
                // onChange={fileChange}
              />

              <label for="fileInput" className='cursor-pointer py-24 px-24 border border-dotted border-ash hover:text-purple-800'>
                <div>{fileName}</div>
              </label>

            {errors.image && <div className='text-red-500'>Image required</div>}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-10'>

            <div className='flex flex-col gap-5'>
            <div className="font-bold font-playFair">Collection Name</div>
              <div className="flex flex-col gap-5">
                <input
                  {...register("name", {required: true})}
                    placeholder="e.g. CryptoDunks"
                    type="text"
                    className="rounded-md bg-transparent border border-blue outline-none px-2 py-2"
                />

              {errors.name && <div className='text-red-500'>Name Required . . .</div>}
              </div>
              </div>


            <div className='flex flex-col gap-5'>
              <div className='font-playFair'>Content Name</div>
              <div className='flex flex-col gap-5'>
              <input 
              {...register("content", {required: true})}
              type="type"
              placeholder="Details of the NFT ..."
              className='bg-transparent border py-2 px-2 rounded-lg'
              />

            {errors.content && <div className='text-red-500'>Details Required . . .</div>}
            </div>
            </div>

            <div className='flex flex-col gap-5'>
              <div className='font-playFair'>Date</div>
              <div className='flex flex-col gap-5'>
              <input 
              {...register("date", {required: true})}
              type="type"
              value={now}
              className='bg-transparent border py-2 px-2 rounded-lg'
              />

            </div>
            </div>

            </div>


            <div className="flex justify-center">
              <button className="bg-blue px-2 py-2 rounded-xl font-monteserrat"  type='submit'>Mint NFT</button>
            </div>
         </form>

      </div>
      </div>
  ) } else {
   return( 
   <div className='mx-20'>
      <div className='text-white'>Minted</div>
      <div> <Item Nftid={nftPrincipal.toText()} /> </div>
    </div>
    )
  }
}

export default MinterInfo