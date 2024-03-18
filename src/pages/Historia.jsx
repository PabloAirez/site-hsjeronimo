//hooks
import { useFetch } from '../hooks/useFetch'
import { useState } from 'react'
//components
import Banner from '../components/Banner'
import Paragraph from '../components/Paragraph'
import Image from '../components/Image'
import CardText from '../components/CardText'
import Card from '../components/Card'
//images
import backgroundImage from './../images/hospital.jpg'


const Historia = () => {
  let history = null
  const {data : images} = useFetch("images");
  images.map((image)=>{
    
   image.page == "Historia" ? (history = image) : (history = null)
  });
  

  

  return (
    <>
    <Banner title={"História do Hospital"} backgroundImage={backgroundImage}></Banner>
    <Paragraph text={"A ideia da construção de um Hospital em São Jerônimo surgiu em 1947, pela necessidade de um atendimento à saúde especializado na Região. A construção se deu com a ajuda da comunidade local organizada por algumas pessoas influentes, que compunham a Diretoria da Sociedade Hospitalar."} classNameText={"ml-10 mr-10 mt-10"}></Paragraph>
    <Paragraph text={"Em 30 de setembro de 1952 foi fundado o edificio hospitalar. Após seis meses, a diretoria procurou as religiosas da Congregação das Irmãs do Imaculado Coração de Maria, tornando o Hospital uma entidade filantrópica privada, tendo como Entidade Mantenedora a Sociedade Educação e Caridade."}  classNameText={" mt-3 ml-10 mr-10"}></Paragraph>
    <Paragraph text={"A instituição foi entregue oficialmente à Congregação em 1964, que, através da Sociedade Educação e Caridade (SEC), que manteve a administração do Hospital até 15 de dezembro de 2009. A partir desta data, a AFPERGS - Associação dos Funcionários Públicos do Estado do Rio Grande do Sul, assumiu a entidade mantenedora do Hospital."}  classNameText={"mt-3 ml-10 mr-10"}></Paragraph>
    <Paragraph text={"Atualmente, o HRSJ tem suas atividades baseadas em princípios éticos e tem for finalidade atender o paciente em todas as suas necessidades físicas, psicológicas ou espirituals, quer sejam preventivas ou curativas."} classNameText={"mt-3 ml-10 mr-10 mb-20"}></Paragraph>
    <div className='flex flex-row justify-around flex-wrap'>
      <Card classNameCard={"border-solid border-2 border-black/10 rounded-full shadow-2xl bg-white mr-2 mb-10"}  title={"Missão:"} description={"Proporcionar assistência à saúde, qualificada e humanizada."}  classNameText={"text-center ml-5 mr-5 mb-10"}></Card>
      <Card classNameCard={"border-solid border-2 border-black/10 rounded-full shadow-2xl bg-white mr-2 mb-10"}  title={"Visão:"} description={"Ser referência do Sistema Único de Saúde na Região Metropolitana do Rio Grande do Sul, até 2020."}  classNameText={"text-center ml-5 mr-5 mb-10"}></Card>
      <Card classNameCard={"border-solid border-2 border-black/10 rounded-full shadow-2xl bg-white mr-2 mb-10"}  title={"Valores:"} description={"Humanização, qualidade, ética, credibilidade, sustentabilidade e responsabilidade socioambiental."}  classNameText={"text-center ml-5 mr-5 mb-10"}></Card>
    </div>


   
    
    
    </>
  )
}

export default Historia