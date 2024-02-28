//Hooks
import React from 'react'
import { useFetch } from '../hooks/useFetch'
//Componentes
import Banner from './../components/Banner'
import List from '../components/List'
//Imagens
import backgroundImage from './../images/especialidadesBanner.jpg'

const Especialidades = () => {
  const especialidadeImage = `url('${backgroundImage}')`;
  const {data : especialidades, error : especialidadesError} = useFetch("especialidades");


  return (
    <>

    <Banner backgroundImage={especialidadeImage} title={"Especialidades Médicas"}></Banner>
    <List itens={especialidades} error={especialidadesError}></List>
   

    </>
  )
}

export default Especialidades