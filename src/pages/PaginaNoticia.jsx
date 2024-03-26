//Hooks
import { useFetch } from '../hooks/useFetch';
import { useState} from 'react';
// Componentes
import Banner from './../components/Banner';
import Paragraph from '../components/Paragraph';
import Image from '../components/Image';
//images
import backgroundImage from './../images/bannerNoticias.png';
import { useParams } from 'react-router-dom';

const PaginaNoticia = () => {
  const {id} = useParams();
  const {data : noticia} = useFetch(`noticias/${id}`); // Array com a notícia clicada, vindo de uma request get
 
 

  return (
    <>
      <Banner backgroundImage={backgroundImage} title={"Notícias"}></Banner>
      <Paragraph classNameTitle={"mt-16 mb-10 text-center opacity-60"} title={noticia.title}></Paragraph>

    </>
  )
}

export default PaginaNoticia