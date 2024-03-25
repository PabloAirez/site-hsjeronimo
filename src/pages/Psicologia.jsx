//Hooks
import { useFetch } from '../hooks/useFetch';
// Componentes
import Banner from './../components/Banner';
import Paragraph from './../components/Paragraph';
import Carrossel from '../components/Carrossel';
import List from '../components/List';

//images
import backgroundImage from './../images/bannerPsicologia.jpg';

const Psicologia = () => {
  return (
    <>
    <Banner backgroundImage={backgroundImage} title={"Psicologia"}></Banner>
    <Paragraph classNameText={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10"} text="A psicologia hospitalar proporciona suporte emocional para pacientes internados no hospital e seus familiares, auxiliando-os na elaboração das experiências do adoecimento, crises e perdas com o intuito de tornar a experiência da internação mais humana."></Paragraph>
    <Paragraph classNameTitle={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10 "} title="Equipe do Setor de Psicologia:" classNameText={"sm:ml-32 ml-10 mt-10 sm:mr-40 mr-10"} text="Atualmente, o setor de Psicologia é composto por uma Psicóloga e duas estagiárias acadêmicas do Curso de Psicologia da Ulbra."></Paragraph>

    </>
  )
}

export default Psicologia