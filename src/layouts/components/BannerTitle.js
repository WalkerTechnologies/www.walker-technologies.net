import React, {useState, useContext} from 'react'

export const BannerTitleContext = React.createContext()

export const BannerTitleProvider = ({children}) => (
  <BannerTitleContext.Provider value={useState("Walker Technologies")}>
    {children}
  </BannerTitleContext.Provider>
)

export const SetBannerTitle = ({value}) => {
  const [_, setTitle] = useContext(BannerTitleContext)

  setTitle(value)

  return null
}

const BannerTitle = () => {
  const [title] = useContext(BannerTitleContext)

  return title
}

export default BannerTitle
