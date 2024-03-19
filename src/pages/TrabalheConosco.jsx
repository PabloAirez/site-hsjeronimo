import React from 'react'
//Componentes
import Banner from '../components/Banner'
import Paragraph from '../components/Paragraph'
import {NewspaperIcon} from "@heroicons/react/24/outline";
//Images
import backgroundImage from './../images/trabalhe-conosco.jpg'

const TrabalheConosco = () => {

  return (
    <>
    <Banner title={"Trabalhe Conosco"} backgroundImage={backgroundImage}></Banner>
    <div className='flex flex-row align-middle'>
      <div className='flex flex-col w-auto'>
        <Paragraph classNameText={"sm:ml-32 ml-10"} classNameTitle={"sm:mr-5 mr-5 mt-16 sm:ml-32 ml-10 mb-4"} title={"Faça parte da nossa equipe!"} text={"Envie seu currículo para o e-mail:"}></Paragraph>
        <a href='mailto:recrutamentohsj@gmail.com' className='font-body text-primaryColor sm:ml-32 ml-10'>recrutamentohsj@gmail.com</a> 
      </div>
    <NewspaperIcon className=' w-20 h-30 mt-20'></NewspaperIcon>
    </div>
    </>
  )
}

export default TrabalheConosco