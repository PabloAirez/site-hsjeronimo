// Componentes
import Paragraph from "./Paragraph";

const Classification = (classifications) => {
  return (
    <div className='p-5 bg-white rounded-xl ml-10 mr-10 mt-10'>
        {
            classifications.map((Classification)=>(
                <div className="flex flex-row">
                    <div className={`rounded-full min-w-5 min-h-5 bg-${Classification.color}  sm:ml-32 ml-10 `}></div> <Paragraph classNameText={`ml-2 text-${Classification.color} `} text={classification.title}></Paragraph> <Paragraph classNameText={"ml-2"} text={classification.description}></Paragraph>
                </div>
            ))
        }
        
        
    </div>
  )
}

export default Classification