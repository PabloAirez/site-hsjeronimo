import React from 'react'
//components
import Banner from '../components/Banner'
import Paragraph from '../components/Paragraph'
import Accordion from '../components/Accordion'
//images
import backgroundImage from './../images/lgpd.jpg'

const LGPD = () => {
  const securityImage = `url('${backgroundImage}')`;

  return (
    <>
      <Banner title={"LGPD"} backgroundImage={securityImage}></Banner>
      <Paragraph text={"LGPD - Lei Geral de Proteção de Dados. Descrição e informações referente ao LGPD"}></Paragraph>
      <Accordion title={"Informar o Título"} text={"Descrição o texto"}></Accordion>
    </>
  )
}

export default LGPD