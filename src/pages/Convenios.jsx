// Componentes
import Banner from "../components/Banner"
import Card from "../components/Card"
// Hooks
import { useFetch } from '../hooks/useFetch'
// Imagens
import backgroundImage from "./../images/conveniosBanner.jpg"

const Convenios = () => {

  const {data : cards, error : cardsError} = useFetch("cards");

  return (
    <>
    <Banner title={"Convênios e Planos"} backgroundImage={backgroundImage}></Banner>
    {
          cards.map((card)=>(
            <Card key={card.id}  image={card.image} rounded={true}></Card>
          ))
    }

    </>
  )
}

export default Convenios