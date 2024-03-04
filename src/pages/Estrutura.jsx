// Hooks
import { useFetch } from "../hooks/useFetch"

// Componentes
import MenuPrincipal from "./../components/MenuPrincipal"
import Banner from "../components/Banner"
import backgroundImage from "./../images/estruturaBanner.png"
import Gallery from "../components/Gallery"

const Estrutura = () => {
  const estruturaImage = `url('${backgroundImage}')`;
  const {data : imagens} = useFetch("imagensEstrutura");

  return (
    <>
    <Banner title={"Estrutura"} backgroundImage={estruturaImage}></Banner>
    <Gallery images={imagens} title={"Conheça a nossa Estrutura"}></Gallery>
    </>
  )
}

export default Estrutura