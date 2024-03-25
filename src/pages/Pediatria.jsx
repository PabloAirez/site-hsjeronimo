//Hooks
import { useFetch } from '../hooks/useFetch';
// Componentes
import Banner from './../components/Banner';
import Paragraph from './../components/Paragraph';
import Carrossel from '../components/Carrossel';
import List from '../components/List';

//images
import backgroundImage from './../images/bannerPediatria.jpg';
const Pediatria = () => {
  const {data : cuidadosRecemNascido} = useFetch("cuidadosRecemNascido");
  const {data : cuidadosEmergenciaisBebe} = useFetch("cuidadosEmergenciaisBebe");

  return (
    <>
    <Banner backgroundImage={backgroundImage} title={"Pediatria"}></Banner>
    <Paragraph classNameText={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10"} text="Atendimento de Urgência/Emergência 24hrs"></Paragraph>
    <Paragraph classNameText={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10"} text="Atende SUS/Convênios/Particular"></Paragraph>
    <Paragraph classNameTitle={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10 text-center"} title="Orientações para cuidados com o Recém Nascido"></Paragraph>
    <Carrossel cards={cuidadosRecemNascido} hover={false} classNameList={"mb-8 mt-0 sm:ml-20 ml-5 "} classNameCard={"bg-white shadow-2xl p-5 border-solid border-2 border-black/10 sm:rounded-xl  mt-8 lg:ml-1.5   "}></Carrossel>
    <div className="p-5 bg-white ml-64 mr-64 mt-10 rounded-lg">
      <Paragraph classNameTitle={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10 text-center"} title="Sinais de alerta (Levar ao Pronto Atendimento)"></Paragraph>
      <List itens={cuidadosEmergenciaisBebe} classNameItens={"mb-8 mt-8 sm:ml-20 ml-5 "}></List>
    </div>
    </>
  )
}

export default Pediatria