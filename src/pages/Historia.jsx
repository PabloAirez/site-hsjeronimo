import React from 'react'
//components
import Banner from '../components/Banner'
//images
import backgroundImage from './../images/hospital.jpg'


const Historia = () => {
  const historyImage = `url('${backgroundImage}')`;
  

  return (
    <>
    <Banner title={"História do Hospital"} backgroundImage={historyImage}></Banner>
    
    </>
  )
}

export default Historia