//Hooks
import { useFetch } from '../hooks/useFetch'
// Componentes
import Banner from './../components/Banner';
import Paragraph from './../components/Paragraph';
import Carrossel from '../components/Carrossel';
//images
import backgroundImage from './../images/bannerCentroClinico.jpg'

const CentroClinico = () => {
  const {data : especialidadesCentroClinico, error : especialidadesError} = useFetch("especialidadesCentroClinico");

  return (
    <>
    <Banner backgroundImage={backgroundImage} title={"Centro Clínico"}></Banner>
    <Paragraph classNameTitle={"mt-10 text-center w-full"} title={"Especialidades"}></Paragraph>
    <Carrossel cards={especialidadesCentroClinico} classNameText={" sm:ml-0 sm:mr-0 sm:w-full  text-center p-10 "}></Carrossel>
    </>
  )
}

export default CentroClinico