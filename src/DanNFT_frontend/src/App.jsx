import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Discover from "./pages/Discover";
import Minter from "./pages/Minter";
import NFTs from "./pages/NFTs";

const App = () => {


  return(
    <Routes>
      <Route path="/" element = {<Homepage />} />
      <Route path="/discover" element = {<Discover />} />
      <Route path="/minter" element = {<Minter />} />
      <Route path="/nft" element = {<NFTs />} />
    </Routes>
  )
}

export default App;