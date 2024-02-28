import React from 'react'
//Componentes
import Banner from '../components/Banner'
import Paragraph from '../components/Paragraph'
import Accordion from '../components/Accordion'
//Images
import backgroundImage from './../images/socioambiental.jpg'

const Socioambiental = () => {
    const environmentalImage = `url('${backgroundImage}')`;

  return (
    <>
    <Banner title={"Política Socioambiental"} backgroundImage={environmentalImage}></Banner>
    <Paragraph title={"Sustentabilidade como prioridade"} text={"O Hospital Regional de São Jerônimo tem, em sua estratégia, a sustentabilidade ambiental como um dos mais importantes pilares de sustentação, pois entendemos que devemos preservar os recursos naturais cada vez mais escassos e minimizar os impactos ambientais decorrentes de nossas atividades."}></Paragraph>
    <Accordion title={"Atendimento legal:"} text={"Cumprir com os requisitos legais e outros requisitos subscritos pela instituição;"}></Accordion>
    <Accordion title={"Ética Socioambiental:"} text={"Criar canais de comunicação aberto junto ao público interno e externo, colaborando com o Desenvolvimento Sustentável;"}></Accordion>
    <Accordion title={"Conscientização Ambiental:"} text={"Promover em todos os níveis a conscientização ambiental com foco no senso de responsabilidade individual e o sentido de prevenção com relação ao meio ambiente;"}></Accordion>
    <Accordion title={"Controle dos Impactos Ambientais:"} text={"Promover alternativas para prevenir a poluição hídrica, da atmosfera e do solo;"}></Accordion>
    <Accordion title={"Melhoria Contínua:"} text={"Prover recursos necessários à implantação desta política e de seu Sistema de Gestão Ambiental, melhorando continuamente suas atividades, processos e serviços."}></Accordion>
   
    </>
  )
}

export default Socioambiental