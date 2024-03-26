//Hooks
import { useFetch } from '../hooks/useFetch';
import { useState} from 'react';
// Componentes
import Banner from './../components/Banner';
import News from '../components/News';

//images
import backgroundImage from './../images/bannerNoticias.png';


const NoticiasHome = () => {
  const [noticiasPerPagina, setNoticiasPerPagina] = useState(6); // Quantidade de notícias por página
  const [currentPagina, setCurrentPagina] = useState(0); // Página atual
  const indexInicial = currentPagina * noticiasPerPagina; // Primeira notícia da página
  const indexFinal = indexInicial+ noticiasPerPagina; // Última notícia da página
  const {data : noticias} = useFetch("noticias"); // Array com as notícias, vindo de uma request get
  const noticiasDaPagina = noticias.slice(indexInicial, indexFinal); // Notícias da página atual
  const qtdPaginas = Math.ceil(noticias.length/noticiasPerPagina); // Quantidade de páginas de notícia


  const removerCaracteres = (str)=>{
    str = str.replace(/[àáâãäåÀÁÂÃÄÅA]/g,"a");
    str = str.replace(/[èéêÈÉÊËE]/g,"e");
    str = str.replace(/[íìÍÌI]/g,"i");
    str = str.replace(/[óòôÓÒÔO]/g,"o");
    str = str.replace(/[úùÚÙU]/g,"u");
    str = str.replace(/ /g, '-');
    str = str.replace(/[^a-z0-9^-]/g, "");

    return str;
  }

  return (
    <>
    <Banner backgroundImage={backgroundImage} title={"Notícias"}></Banner>
    <div className="flex flex-row flex-wrap justify-center">
    {
      noticiasDaPagina &&
      noticiasDaPagina.map((noticia)=>(
          <News href={`/noticias/${removerCaracteres(noticia.title)}/${noticia.id}`} key={noticia.id} title={noticia.title} description={noticia.description} image={noticia.image} date={noticia.date}></News>
      ))
    }
    </div>


    <div className="flex flex-row justify-center mt-10">

      {qtdPaginas && currentPagina > 0 && <button onClick={(e)=>setCurrentPagina(current=> current-1)} className='text-secondaryColor text-xl mr-3 hover:text-primaryColor duration-100'>{"<"}</button>
      }
      
    {
      qtdPaginas &&
      Array.from(Array(qtdPaginas), (item,index)=>( //Cria um array com tamanho igual à quantidade de páginas, criando um botão para cada página
        <button key={index} onClick={(e)=>setCurrentPagina(Number(e.target.value))} value={index} className={currentPagina == index ? (`text-primaryColor font-body  bg-white p-3 border-solid border-black/50 border-2`) : (`font-body p-3 hover:bg-primaryColor hover:text-white border-solid border-black/50 border-2 focus:bg-white duration-150`)}>{index+1}</button>
      ))
    }

      {qtdPaginas && currentPagina < (qtdPaginas-1) && <button onClick={(e)=>setCurrentPagina(current=> current+1)} className='text-secondaryColor text-xl ml-3 hover:text-primaryColor duration-100'>{">"}</button>
      }
    </div>

    </>
  )
}

export default NoticiasHome