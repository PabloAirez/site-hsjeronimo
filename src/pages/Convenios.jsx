// Componentes
import Banner from "../components/Banner"
import Card from "../components/Card"
import Carrossel from "../components/Carrossel"
import Paragraph from "../components/Paragraph"
// Hooks
import { useFetch } from '../hooks/useFetch'
// Imagens
import backgroundImage from "./../images/conveniosBanner.jpg"

const Convenios = () => {

  const {data : planosSaude} = useFetch("planosSaude");
  const {data : convenios} = useFetch("convenios");

  return (
    <>
    <Banner title={"Convênios e Planos"} backgroundImage={backgroundImage}></Banner>
    
      <Carrossel cards={planosSaude} classNameCard={"mt-10 h-1/4"} rounded={true} classNameText={" sm:ml-0 sm:mr-0 sm:w-full  text-center p-10 "}></Carrossel>
      <Paragraph classNameText={"text-center mb-16"} text={"(Obs: somente o paciente beneficiado de Afpergs + IPE tem direito à internação de emergência)."}></Paragraph>
      <div className="flex flex-row justify-center flex-wrap">
          {
            convenios.map((convenio)=>(
              <Card image={convenio.image} rounded={true}></Card>
            ))
          }
      </div>
    </>
  )
}

export default Convenios