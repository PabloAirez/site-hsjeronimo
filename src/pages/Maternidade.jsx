//Hooks
import { useFetch } from '../hooks/useFetch';
// Componentes
import Banner from './../components/Banner';
import Paragraph from './../components/Paragraph';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
//images
import backgroundImage from './../images/bannerMaternidade.jpg';
import imgRecemNascido from './../images/recem-nascido.jpg';
import imgGestante from './../images/gestante.jpg';


const Maternidade = () => {
  const {data : itensGestante} = useFetch("itensGestante");
  const {data : itensRecemNascidos} = useFetch("itensRecemNascidos");
  const imagemBebe = {"src": imgRecemNascido, "alt": "Recém-nascido"};
  const imagemGestante = {"src": imgGestante, "alt": "Gestante"};


  //itensGestante
  return (
    <>
    <Banner backgroundImage={backgroundImage} title={"Maternidade"}></Banner>
    <div className="flex flex-row mt-10">
      <span className="text-primaryColor font-body font-bold sm:ml-32 ml-10 ">Atendimento Obstétrico 24h</span> <Paragraph classNameText={"ml-2"} text={" - Atende SUS/Convênio e Particular."}></Paragraph>
    </div>
    <Paragraph classNameText={"sm:ml-32 ml-10 mt-3"} text={"A gestante pode possuir 01 acompanhante"}></Paragraph>
    <Paragraph classNameText={"sm:ml-32 ml-10 mt-10"} text={"Restante dos familiares devem aguardar no saguão do hospital."}></Paragraph>
    <Paragraph classNameTitle={"mt-16 mb-10 text-center text-bold"} title={"O que trazer para o parto?"}></Paragraph>
    <div className="flex flex-row justify-center">
      <Card  title={"Gestante"} image={imagemGestante} rounded={true} hover={false} list={itensGestante} classNameCard={"lg:mr-20 sm:mr-5 mr-1 bg-white shadow-2xl p-5 border-solid border-2 border-black/10 sm:rounded-xl"} classNameTitle={"font-bold"}></Card>
      <Card image={imagemBebe} rounded={true} hover={false} title={"Recém-nascido"} list={itensRecemNascidos} classNameCard={"bg-white shadow-2xl p-5 border-solid border-2 border-black/10 sm:rounded-xl"} classNameTitle={"font-bold"} ></Card>
    </div>
    <div className="flex flex-row mt-20 justify-center">
      <Paragraph  text={"Para mais informações sobre a pediatria e cuidados com o recém nascido, "}></Paragraph> <Link to="/servicos/pediatria"> <Paragraph></Paragraph></Link>
    </div>
    </>
  )
}

export default Maternidade