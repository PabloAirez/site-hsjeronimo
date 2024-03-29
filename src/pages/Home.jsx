import { useState } from 'react'
import Banner from './../components/Banner'
import Card from './../components/Card'
import backgroundImage from '..//images/indexBanner.jpg'
import Carrossel from './../components/Carrossel'
import Location from './../components/Location'
import { useFetch } from '../hooks/useFetch'

const Home = () => {
    const {data : cards, error : cardsError} = useFetch("cards");
    const {data : servicos, error : servicosError} = useFetch("servicos");

  
    return (
      <>

    <Banner backgroundImage={backgroundImage}></Banner>
    <div className='flex flex-row flex-wrap justify-between h-1/4'> {/* Renderizando os cards */}
    {
      cardsError ? (
        <p className='font-body text-3xl text-primaryColor w-full mb-8 mt-20 text-center'>{cardsError}</p>
      ) : (
          cards.map((card)=>(
            <Card key={card.id} title={card.title} image={card.image} href={card.href}></Card>
          ))
      )}
      
   
  
    </div>
  
    <div className=' h-1/4 w-full'>
    <p className='font-body text-3xl text-primaryColor w-full mt-10 text-center'>Serviços</p>
    {
      servicosError ? (
        <p className='font-body text-3xl text-primaryColor w-full mb-8 mt-20 text-center'>{servicosError}</p>
      ):(
        <Carrossel cards={servicos}></Carrossel>
      )
    }
    </div>
  
  
    <Location></Location>
  
      </>
    )
}

export default Home
