// Componentes
import Paragraph from "./Paragraph";
// Hooks 
import { useFetch } from '../hooks/useFetch';


const Classification = () => {
  const {data : classifications} = useFetch("classificacoes");

  return (
    <div className='p-5 bg-white rounded-xl  ml-10 mr-10 mt-10'>
        {
            classifications.map((classification)=>(
              <div className="flex lg:flex-row flex-col">
                <div key={classification.id} className="flex flex-row justify-start  mb-3 lg:mb-8">
                    <div style={{backgroundColor: classification.color}} className={`rounded-full min-w-5 h-5   sm:ml-32 ml-10 `}></div> <Paragraph color={classification.color} classNameText={`ml-2 w-auto whitespace-nowrap `} text={classification.title}></Paragraph> 
                </div>
                <Paragraph classNameText={"lg:text-center text-start xl:ml-2 lg:ml-2 sm:ml-32 ml-10 xl:mb-0 mb-5 "} text={classification.description}></Paragraph>
              </div>
            ))
        }
        
        <Paragraph classNameText={"sm:ml-32 ml-10 mt-3"} text={"Podendo ter alteração do tempo dependendo do fluxo e nivel de superlotação."}></Paragraph>
    </div>
  )
}

export default Classification