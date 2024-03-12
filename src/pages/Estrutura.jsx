// Hooks
import { useFetch } from "../hooks/useFetch"

// Componentes
import MenuPrincipal from "./../components/MenuPrincipal"
import Banner from "../components/Banner"
import backgroundImage from "./../images/estruturaBanner.png"
import Gallery from "../components/Gallery"

const Estrutura = () => {
  const {data : imagens} = useFetch("imagensEstrutura");

  return (
    <>
    <Banner title={"Estrutura"} backgroundImage={backgroundImage}></Banner>
    <Gallery images={imagens}></Gallery>
    </>
  )
}

export default Estrutura