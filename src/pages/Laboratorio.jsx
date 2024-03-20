import { useFetch } from '../hooks/useFetch';
// Componentes
import Banner from './../components/Banner';
import Paragraph from './../components/Paragraph';
import Image from './../components/Image';
import List from '../components/List';

//images
import backgroundImage from './../images/bannerLaboratorio.jpg';
import pncq from './../images/PNCQ.png';

const Laboratorio = () => {
  const {data : diferenciaisLaboratorio} = useFetch("diferenciaisLaboratorio");
  const imgPncq = {"src": pncq, "alt": "Placa do Programa Nacional de Controle de Qualidade, aferindo o desempenho do laboratório como excelente"};

  return (
    <>
    <Banner backgroundImage={backgroundImage} title={"Laboratório"}></Banner>
    <Paragraph classNameText={"sm:ml-32 ml-10 sm:mr-40 mr-10 mb-3 mt-5"} text={"O Laboratório de Análises Clínicas do Hospital Regional de São Jerônimo possui o que há de mais moderno no seguimento de diagnóstios laboratoriais no atendimento ambulatorial hospitalar, voltados à rede pública e privada."}></Paragraph>
    <Paragraph classNameText={"sm:ml-32 ml-10 sm:mr-40 mr-10 mb-3 mt-5"} text={"Nossa equipe conta com profissionais técnicos especializados e preparados para proporcionar aos clientes um atendimento diferenciado, ágil e de qualidade, atuando 24h por dia, 7 dias da semana, garantindo a qualificação de excelência no Programa Nacional de Controle de Qualidade (PNCQ)."}></Paragraph>
    <Image image={imgPncq}></Image>
    <Paragraph classNameTitle={"sm:ml-32 ml-10 mt-10 "} title={"Alguns diferenciais do Laboratorio de Análises Clínicas:"}></Paragraph>
    <List itens={diferenciaisLaboratorio} classNameItens={"sm:ml-32 mt-10 ml-10"}></List>
    <Paragraph classNameText={"sm:ml-32 ml-10 sm:mr-40 mr-10 mb-3 mt-5"} text={"O Laboratório de Análises Clínicas conta com mais uma facilidade, agora você pode agendar os seu exames pelo WhatsApp."}></Paragraph>
    <Paragraph classNameText={"sm:ml-32 ml-10 sm:mr-40 mr-10 mb-3 mt-5"} text={"O horário de atendimento externo é de segunda a sexta-feira, das 7h às 16h."}></Paragraph>
    <div className="flex flex-row">
      <Paragraph classNameText={"sm:ml-32 ml-10 font-bold"} text={"Contato:"}></Paragraph>
      <a href="tel:+555136518560"><Paragraph classNameText={"ml-2 underline"} text={"(51) 3651-8560"}></Paragraph></a>
      <Paragraph classNameText={"ml-2"} text={"/"}></Paragraph>
      <a href="https://wa.me/5551995397016" target="_blank"><Paragraph classNameText={"ml-2 underline"} text={"(51) 995397016 (WhatsApp)"}></Paragraph></a>
    </div>
    </>
  )
}

export default Laboratorio