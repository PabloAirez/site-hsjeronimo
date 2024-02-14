import { useState, useEffect } from 'react'
import MenuPrincipal from './../components/MenuPrincipal'
import Banner from './../components/Banner'
import Card from './../components/Card'
import backgroundImage from '..//images/indexBanner.jpg'
import Carrossel from './../components/Carrossel'
import Location from './../components/Location'
import Footer from './../components/Footer'
import FetchApi from '../utils/FetchApi.js'


const Home = () => {
    const indexImage = `url('${backgroundImage}')`;
    const [cards,setCards] = useState([]); 
    const [servicos,setServicos] = useState([]);
    useEffect(()=>{
    FetchApi("cards",setCards);
    FetchApi("servicos",setServicos);

    },[]);
   
  
    return (
      <>
    <MenuPrincipal></MenuPrincipal>
    <Banner backgroundImage={indexImage}></Banner>
    <div className='flex flex-row flex-wrap h-1/4'> {/* Renderizando os cards */}
    {cards.map((card)=>(
        <Card key={card.id} title={card.title} image={card.image}></Card>
    ))}
  
    </div>
  
    <div className=' h-1/4 w-full'>
    <p className='font-body text-3xl text-primaryColor w-full mb-8 mt-20 text-center'>Serviços</p>
    <Carrossel cards={servicos}></Carrossel>
    </div>
  
  
    <Location></Location>
  
    <Footer></Footer>
      </>
    )
}

export default Home
