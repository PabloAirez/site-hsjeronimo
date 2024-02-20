// Hooks

// Componentes
import MenuPrincipal from "./../components/MenuPrincipal"
import Banner from "../components/Banner"
import backgroundImage from "./../images/estruturaBanner.png"

const Estrutura = () => {
  const estruturaImage = `url('${backgroundImage}')`;

  return (
    <>
    <MenuPrincipal></MenuPrincipal>
    <Banner title={"Estrutura"} backgroundImage={estruturaImage}></Banner>
    </>
  )
}

export default Estrutura