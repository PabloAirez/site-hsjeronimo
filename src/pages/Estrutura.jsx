// Hooks
import { useFetch } from "../hooks/useFetch"

// Componentes
import MenuPrincipal from "./../components/MenuPrincipal"
import Banner from "../components/Banner"
import backgroundImage from "./../images/estruturaBanner.png"
import Carrossel from "./../components/Carrossel"

const Estrutura = () => {
  const estruturaImage = `url('${backgroundImage}')`;
  const {data : servicos, error : servicosError} = useFetch("servicos");

  return (
    <>
    <MenuPrincipal></MenuPrincipal>
    <Banner title={"Estrutura"} backgroundImage={estruturaImage}></Banner>
    <Carrossel cards={servicos}></Carrossel>
    </>
  )
}

export default Estrutura