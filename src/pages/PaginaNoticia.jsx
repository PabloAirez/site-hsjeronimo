//Hooks
import { useFetch } from '../hooks/useFetch';
import { useEffect, useState} from 'react';
// Componentes
import Banner from './../components/Banner';
import Paragraph from '../components/Paragraph';
import NewsTitle from '../components/NewsTitle';
import Image from '../components/Image';
//images
import backgroundImage from './../images/bannerNoticias.png';
import { useParams } from 'react-router-dom';
import ShareIcon from '../components/ShareIcon';

const PaginaNoticia = () => {
  const {id} = useParams();
  const [responsavelPost,setResponsavelPost] = useState(false);
  const {data : noticia} = useFetch(`noticias/${id}`); // Array com a notícia clicada, vindo de uma request get
  const {data : icons} = useFetch(`compartilhamento`); // Array com os ícones de compartilhamento

  useEffect(()=>{
    async function capturaUser(){
      const res = await fetch(`http://192.168.8.75:3000/usuarios/${noticia.user}`);
      const data = await res.json();
      setResponsavelPost(data);
    }
    noticia != undefined && capturaUser();
    
  },[noticia])
  

  
 
 

  return (
    <>
      <Banner backgroundImage={backgroundImage} title={"Notícias"}></Banner>
      <NewsTitle title={noticia.title} className={"text-center mt-5"}></NewsTitle>
      <Paragraph classNameTitle={"mt-5 mb-10 text-center text-gray-500 "} title={noticia.subtitle}></Paragraph>
      <Image image={noticia.image} classNameImage={"xl:w-1/2 min-w-1/2  min-h-1/4"}></Image>
      <Paragraph classNameText={"text-center mt-3"} text={noticia.date}></Paragraph>
      {responsavelPost && <Paragraph classNameText={"text-center mt-2"} text={`Publicado por: ${responsavelPost.name} - ${responsavelPost.function}`}></Paragraph>}
      <Paragraph classNameText={"sm:ml-32 ml-10 sm:mr-40 mr-10 mt-10"} text={noticia.content}></Paragraph>
      <NewsTitle title={"Compartilhe nas redes sociais:"} className={"text-center mt-32"}></NewsTitle>

      <div className='flex flex-row justify-center mt-5'>

        {
          icons &&
          icons.map((icon)=>(
            <ShareIcon key={icon.id} urlPage={window.location.href} urlSocialMedia={icon.urlSocialMedia} icon={icon.icon} color={icon.color} className={"w-10 h-10 mr-5"}></ShareIcon>
          ))
        }
      </div>

    </>
  )
}

export default PaginaNoticia