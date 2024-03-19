//Hooks
import { useFetch } from '../hooks/useFetch'
// Componentes
import Banner from './../components/Banner';
import Paragraph from './../components/Paragraph';
import Carrossel from '../components/Carrossel';
//images
import backgroundImage from './../images/bannerBlocoCirurgico.jpg'

const BlocoCirurgico = () => {
  const {data : especialidadesCirurgicas, error : especialidadesError} = useFetch("especialidadesCirurgicas");

  return (
    <>
    <Banner backgroundImage={backgroundImage} title={"Bloco Cirúrgico"}></Banner>
    <Paragraph classNameTitle={"mt-10 text-center w-full"} title={"Especialidades Cirúrgicas"}></Paragraph>
    <Carrossel cards={especialidadesCirurgicas} classNameText={" sm:ml-0 sm:mr-0 sm:w-full  text-center p-10 "}></Carrossel>
    <div className="flex flex-row mt-10 justify-center">
    <Paragraph text={"Para agendamentos de cirurgias, endoscopia e colonoscopia entrar em contato com o "}></Paragraph><a className='text-primaryColor font-body ml-2 font-bold' target='_blank' href='https://wa.me/5136518517'>  Whatsapp (51) 3651-8517</a>
    </div>
    <div className="flex flex-row mt-10 justify-center">
    <Paragraph text={"Para mais informações entre em contato com o Hospital:"}></Paragraph><a className='text-primaryColor font-body ml-2 font-bold' target='_blank' href='tel:+555136518500'>  Telefone (51) 3651-8500</a>
    </div>
    </>
  )
}

export default BlocoCirurgico