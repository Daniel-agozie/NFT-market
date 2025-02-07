import React, { useEffect, useState } from 'react';
import image from "../../public/home-img.png"
import axios from 'axios';
import HomeHeader from "./HomeHeader"

const Homefeature = () => {

  const [cryptoData, setCryptoData] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100'

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(url)
        setCryptoData(res.data);
        console.log(res.data);
        
      } catch (error) {
        console.error("Error Fetching data : ", error)
      }

    }
    fetch();
  }, [])

  return (
    // <div className='flex justify-center'>
    //   <img className='pt-10 md:w-[800px] h-[500px]' src={image} alt="Home image" />
    // </div>

    <div className='pt-20'>
      <HomeHeader />
      <div className="xl:w-[900px] sm:w-[500px] w-[370px] m-auto border px-4 py-2 rounded-xl">
      <div className="grid grid-cols-[0.5fr_1fr_0.7fr_0.6fr] bg-light px-2 py-2 text-blue font-Chewy font-bold text-lg">
        <div>NO</div>
        <div>Coins</div>
        <div>Price</div>
        <div>24H</div>
      </div>

      {cryptoData.map((crypto,idx) => (
        <div className="grid grid-cols-[0.5fr_1fr_0.7fr_0.6fr] pt-14 text-light">
          <div>{idx + 1}</div>

          <div className="flex gap-4">
            <img src={crypto.image} className="w-8 bg-white rounded-xl"/>
            <div>{crypto.symbol.toUpperCase()}</div>
          </div>

          <div>{crypto.current_price}</div>
          <div>{crypto.high_24h}</div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Homefeature