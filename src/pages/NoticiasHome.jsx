//Hooks
import { useFetch } from '../hooks/useFetch';
// Componentes
import Banner from './../components/Banner';
import News from '../components/News';

//images
import backgroundImage from './../images/bannerNoticias.png';
import imgRecemNascido from './../images/recem-nascido.jpg';


const NoticiasHome = () => {
  const imagemBebe = {"src": imgRecemNascido, "alt": "Recém-nascido"};

  return (
    <>
    <Banner backgroundImage={backgroundImage} title={"Notícias"}></Banner>
    <News image={imagemBebe} title={"Título da notícia"} description={"Descrição da notícia"} date={"25/03/2024"}></News>
    </>
  )
}

export default NoticiasHome