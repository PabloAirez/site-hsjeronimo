import React from 'react'
//components
import MenuPrincipal from '../components/MenuPrincipal'
import Banner from '../components/Banner'
//images
import backgroundImage from './../images/hospital.jpg'


const Historia = () => {
  const historyImage = `url('${backgroundImage}')`;
  

  return (
    <>
    <MenuPrincipal></MenuPrincipal>
    <Banner title={"História do Hospital"} backgroundImage={historyImage}></Banner>
    
    </>
  )
}

export default Historia