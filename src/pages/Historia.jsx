//hooks
import { useFetch } from '../hooks/useFetch'
import { useState } from 'react'
//components
import Banner from '../components/Banner'
import Paragraph from '../components/Paragraph'
import Image from '../components/Image'
import CardText from '../components/CardText'
//images
import backgroundImage from './../images/hospital.jpg'


const Historia = () => {
  let history = null
  const historyImage = `url('${backgroundImage}')`;
  const {data : images} = useFetch("images");
  images.map((image)=>{
    
   image.page == "Historia" ? (history = image) : (history = null)
  });
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 1024 ? (true) : (false)
  ); // State que controla se o site está aberto em um dispositivo móvel ou não

  window.onresize = function() {
    window.innerWidth < 1024 ? setIsMobile(true) : setIsMobile(false);
};

  

  return (
    <>
    <Banner title={"História do Hospital"} backgroundImage={historyImage}></Banner>
    <Paragraph text={"A ideia da construção de um Hospital em São Jerônimo surgiu em 1947, pela necessidade de um atendimento à saúde especializado na Região. A construção se deu com a ajuda da comunidade local organizada por algumas pessoas influentes, que compunham a Diretoria da Sociedade Hospitalar."}></Paragraph>
    <Paragraph text={"Em 30 de setembro de 1952 foi fundado o edificio hospitalar. Após seis meses, a diretoria procurou as religiosas da Congregação das Irmãs do Imaculado Coração de Maria, tornando o Hospital uma entidade filantrópica privada, tendo como Entidade Mantenedora a Sociedade Educação e Caridade."}></Paragraph>
    <Paragraph text={"A instituição foi entregue oficialmente à Congregação em 1964, que, através da Sociedade Educação e Caridade (SEC), que manteve a administração do Hospital até 15 de dezembro de 2009. A partir desta data, a AFPERGS - Associação dos Funcionários Públicos do Estado do Rio Grande do Sul, assumiu a entidade mantenedora do Hospital."}></Paragraph>
    <Paragraph text={"Atualmente, o HRSJ tem suas atividades baseadas em princípios éticos e tem for finalidade atender o paciente em todas as suas necessidades físicas, psicológicas ou espirituals, quer sejam preventivas ou curativas."}></Paragraph>
    {isMobile ? (
      <div className="flex flex-col mt-16">
      <div className="flex flex-row justify-around gap-5 mb-5">
       <CardText title={"Nossa Missão:"} text={"Proporcionar assistência à saúde, qualificada e humanizada."}  ></CardText>
       <CardText title={"Nossa Visão:"} text={"Ser referência do Sistema Único de Saúde na Região Metropolitana do Rio Grande do Sul, até 2020."} ></CardText>
       </div>
       <div className="flex flex-row justify-center relative">
       <Image image={history} ></Image>
       </div>
       <div className="flex flex-row justify-around gap-5">
       <CardText title={"Nossos Valores:"} text={"Humanização, qualidade, ética, credibilidade, sustentabiliade e responsabilidade socioambiental."} ></CardText>
       <CardText title={"Política de Qualidade:"} text={"Proporcionar assistência à saúde através da prestação de serviços médicos hospitalares com humanização, qualidade, ética, credibilidade, sustentabilidade socioambiental com constante atualização tecnológica e capacitação profissional."} ></CardText>
       </div>     
    </div>

    ) : (

      <div className='relative lg:w-full lg:h-full bg-red-500'>
      <Image image={history} top={"auto"} left={"40%"} right={"0%"} bottom={"auto"}></Image>
      <CardText title={"Nossa Missão:"} text={"Proporcionar assistência à saúde, qualificada e humanizada."}  top={"20%"} left={"28%"} right={"0%"} bottom={"auto"}></CardText>
      <CardText title={"Nossa Visão:"} text={"Ser referência do Sistema Único de Saúde na Região Metropolitana do Rio Grande do Sul, até 2020."} top={"28%"} left={"55%"} right={"0%"} bottom={"auto"}></CardText>
      <CardText title={"Nossos Valores:"} text={"Humanização, qualidade, ética, credibilidade, sustentabiliade e responsabilidade socioambiental."} top={350} left={"35%"} right={"0%"} bottom={"auto"}></CardText>
      <CardText title={"Política de Qualidade:"} text={"Proporcionar assistência à saúde através da prestação de serviços médicos hospitalares com humanização, qualidade, ética, credibilidade, sustentabilidade socioambiental com constante atualização tecnológica e capacitação profissional."} top={380} left={"63%"} right={"0%"} bottom={300}></CardText>
      </div>
    )}


   
    
    
    </>
  )
}

export default Historia