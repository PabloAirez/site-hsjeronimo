//Hooks
import React from 'react'
import { useFetch } from '../hooks/useFetch'
//Componentes
import Banner from './../components/Banner'
import Carrossel from '../components/Carrossel'
//Imagens
import backgroundImage from './../images/especialidadesBanner.jpg'

const Especialidades = () => {
  const {data : especialidades, error : especialidadesError} = useFetch("especialidades");


  return (
    <>

    <Banner backgroundImage={backgroundImage} title={"Especialidades Médicas"}></Banner>
    {
      <Carrossel cards={especialidades}></Carrossel>
    }
   

    </>
  )
}

export default Especialidades