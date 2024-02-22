import { useState, useEffect,useRef} from 'react'
import { TypeAnimation } from 'react-type-animation';


const SearchBar = () => {

    const [onFocus, setOnFocus] = useState(false); 
    const inputRef = useRef();

    useEffect(()=>{
      let handler = (e)=>{
          if((e.target.nodeName != "INPUT") && (e.target.nodeName != "P") && (inputRef.value == "")){
            setOnFocus(false);
          }
      }
  document.addEventListener("click",handler);
 });


  return (
    <div>
        <div onClick={()=> {setOnFocus(true)}} className='bg-white w-search mt-16 h-12 rounded-r-3xl'>
           
                { onFocus ? (
                   <form className='h-full' action="">
                     <input ref={inputRef}  className='w-full h-full bg-transparent focus:outline-0	 text-center' type="text" />
                  </form>
                ) :
                (
                 <div className='h-full w-full text-center pt-3 text-primaryColor'>    
                      <TypeAnimation 
                    sequence={[
                      '',
                      1000, 
                      'O que você está procurando?',
                      1000,
                      'Como agendar consultas no Centro Clínico?',
                      1000,
                      'Convênios disponíveis',
                      1000,
                      'Especialidades disponíveis',
                      1000,
                    ]}
                    wrapper="p"
                    speed={70}
                    repeat={Infinity}
                    cursor={false}
                  />

                </div>
                )
                }
         </div>
     </div>
  )
}

export default SearchBar