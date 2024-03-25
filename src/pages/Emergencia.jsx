// Componentes
import Banner from './../components/Banner';
import Paragraph from './../components/Paragraph';
import Classification from '../components/Classification';

//images
import backgroundImage from './../images/bannerEmergencia.jpg';

const Emergencia = () => {

  return (
    <>
    <Banner backgroundImage={backgroundImage} title={"Emergência"}></Banner>
    <Paragraph classNameTitle={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10"} title={"Para atendimento na emergência é OBRIGATÓRIO:"} classNameText={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10"} text={"IDENTIDADE E CPF, CARTÃO SUS ou CARTÃO DO CONVÊNIO"}></Paragraph>
    <Paragraph classNameTitle={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10 "} title={"Classificação de risco feita pelo protocolo-ESI"} classNameText={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10"} text={"EMERGENCY SEVERTITY INDEX, escala americana desenvolvida para estratificar o risco dos pacientes. Implantada em 1999 nos hospitais americanos, sendo aperfeiçoada no ano de 2000. É um instrumento de triagem de 5 níveis, baseado em algoritimo de decisão. Classifica os pacientes da emergência avaliando tanto a acuidade como a quantidade de recursos a serem utilizados."}></Paragraph>
    <Classification></Classification>
    <Paragraph classNameTitle={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10 font-bold"} title={"Pacientes internados na Emergência"}></Paragraph>
    <Paragraph classNameTitle={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10"} title={"Informações aos familiares:"} classNameText={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10"} text={"Informações aos familiares de pacientes internados na Emergência sala laranja e vermelha com boletim informativo."}></Paragraph>
    <Paragraph classNameTitle={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10"} title={"Horários de visitas:"} classNameText={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10"} text={"Das 11h às 11h20 e das 16h30 às 16h50"}></Paragraph>
    <Paragraph classNameText={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10"} text={"(Podendo haver alterações nos horários)."}></Paragraph>
    <Paragraph classNameText={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10"} text={"É autorizada a entrada de apenas 2 familiares por paciente."}></Paragraph>


    </>
  )
}

export default Emergencia