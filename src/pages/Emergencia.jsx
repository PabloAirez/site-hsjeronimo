import { useFetch } from '../hooks/useFetch';
// Componentes
import Banner from './../components/Banner';
import Paragraph from './../components/Paragraph';
import Classification from '../components/Classification';
import Image from './../components/Image';
import List from '../components/List';

//images
import backgroundImage from './../images/bannerLaboratorio.jpg';

const Emergencia = () => {
  const {data : classificacoes} = useFetch("classificacoes");

  return (
    <>
    <Banner title={"Emergência"}></Banner>
    <Paragraph classNameTitle={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10"} title={"Para atendimento na emergência é OBRIGATÓRIO:"} classNameText={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10"} text={"IDENTIDADE E CPF, CARTÃO SUS ou CARTÃO DO CONVÊNIO"}></Paragraph>
    <Paragraph classNameTitle={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10 "} title={"Classificação de risco feita pelo protocolo-ESI"} classNameText={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10"} text={"EMERGENCY SEVERTITY INDEX, escala americana desenvolvida para estratificar o risco dos pacientes. Implantada em 1999 nos hospitais americanos, sendo aperfeiçoada no ano de 2000. É um instrumento de triagem de 5 níveis, baseado em algoritimo de decisão. Classifica os pacientes da emergência avaliando tanto a acuidade como a quantidade de recursos a serem utilizados."}></Paragraph>
    <Classification Classifications={classificacoes}></Classification>
    </>
  )
}

export default Emergencia