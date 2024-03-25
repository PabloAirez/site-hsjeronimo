//Hooks
import { useFetch } from '../hooks/useFetch';
// Componentes
import Banner from './../components/Banner';
import Paragraph from './../components/Paragraph';
import Card from '../components/Card';
import List from '../components/List';

//images
import backgroundImage from './../images/bannerParcerias.jpg';
const Parcerias = () => {
  const {data : parcerias} = useFetch("parcerias");

  return (
    <>
    <Banner backgroundImage={backgroundImage} title={"Parcerias"}></Banner>

    <div className='flex flex-row justify-center flex-wrap'>
        {
          parcerias.map((parceria)=>(
            <Card href={parceria.href} targetBlank={true} description={parceria.description} image={parceria.image} rounded={true} classNameCard={"mt-10 h-1/4 p-2"} classNameText={" sm:ml-0 sm:mr-0 sm:w-full  text-center p-10 "}></Card>
          ))
        }
    </div>
    </>
  )
}

export default Parcerias