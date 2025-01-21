import React,{useState, useEffect, createContext} from 'react'

export const AddContext = createContext()

const ItemProvider = ({children}) => {



  return (
    <div>
      <AddContext.Provider value={{name, setName,owner, setOwner,image, setImage, button, setButton, priceInput, setPriceInput, loaderHidden, setLoaderHidden, blur, setBlur, Listed, setListed, PriceLabels, setPriceLabel}}>
        {children}
      </AddContext.Provider>
    </div>
  )
}

export default ItemProvider