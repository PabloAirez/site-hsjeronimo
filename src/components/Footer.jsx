// Hooks
import { useFetch } from '../hooks/useFetch'
// Componente
import { Link } from 'react-router-dom';


const Footer = () => {
  const {data : footerItems} = useFetch("footerItems");

      
  return (
    <div className='w-full justify-center flex'>
         <ul className='h-full w-full mr-40 ml-20 mt-40 flex justify-center items-center'>
             {footerItems.map((item,i)=>(
                <li key={i} className='mt-100 md:mt-0 cursor-pointer w-full xl:w-auto px-10  py-3 h-auto md:h-full content-center group duration-150 '>
                <Link to={item.href} className='flex justify-center h-auto md:h-full text-lg group-hover:text-white w-full duration-150 text-primaryColor font-body text-menu md:whitespace-nowrap' >{item.text}</Link>
                </li>
             ))}
            

              
    
          </ul>
    </div>
  )
}

export default Footer