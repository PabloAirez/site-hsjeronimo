//Hooks
import { useFetch } from '../hooks/useFetch';
// Componentes
import Banner from './../components/Banner';
import Paragraph from './../components/Paragraph';
import List from './../components/List';

//images
import backgroundImage from './../images/bannerInternacao.jpg';


const Internacao = () => {
  const {data : documentosInternacao} = useFetch("documentosInternacao");
  return (
    <>
    <Banner backgroundImage={backgroundImage} title={"Internação"}></Banner>
    <Paragraph classNameText={"sm:ml-32 ml-10 sm:mr-40 mr-10 mb-3 mt-5"} text={"O hospital Regional São Jerônimo conta com as unidades de internação em Clínica Cirúrgica, Clínica Médica, UTI, Maternidade e Pediatria com ampla e qualificada estrutura e leitos. Cada andar de internação possui um Posto de Enfermagem para atender os pacientes e familiares."}></Paragraph>
    <Paragraph classNameTitle={"sm:ml-32 ml-10 mt-10"} title={"Procedimentos para Internação"} classNameText={"sm:ml-32 ml-10 sm:mr-40 mr-10 mb-3 mt-5"} text={"Para seguir com o processo de internação, o paciente deverá agendar previamente com o médico a data e o horário para realizar a baixa hospitalar."}></Paragraph>
    <Paragraph classNameText={"sm:ml-32 ml-10 sm:mr-40 mr-10 mb-3 mt-5"} text={"Com as seguintes informações, o paciente poderá realizar ainternação no dia e horário informado, munido de documentos e requisição médica."}></Paragraph>
    <Paragraph classNameTitle={"sm:ml-32 ml-10 mt-10"} title={"Documentos necessários para internação:"}></Paragraph>
    <List itens={documentosInternacao} classNameItens={"sm:ml-32 mt-10 ml-10"}></List>
    <Paragraph classNameTitle={"sm:ml-32 ml-10 mt-10"} title={"Quantidade de leitos:"} classNameText={"sm:ml-32 ml-10 sm:mr-40 mr-10 mb-3 mt-5"} text={"Obs: a acomodação nos leitos é realizada conforme a disponibilidade do Hospital."}></Paragraph>

    </>
  )
}

export default Internacao