import React from 'react'
//components
import Banner from '../components/Banner'
import Paragraph from '../components/Paragraph'
import Accordion from '../components/Accordion'
//images
import backgroundImage from './../images/lgpd.jpg'

const LGPD = () => {

  return (
    <>
      <Banner title={"LGPD"} backgroundImage={backgroundImage}></Banner>
      <Paragraph text={"LGPD - Lei Geral de Proteção de Dados. Descrição e informações referente ao LGPD"} classNameText={"ml-32 mr-32 mb-10 mt-16"}></Paragraph>
      <Accordion title={"Informar o Título"} text={"Descrição o texto"}></Accordion>
    </>
  )
}

export default LGPD