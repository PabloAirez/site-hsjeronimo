// Componentes
import { Link } from "react-router-dom"


const NavItem = ({text,href, target}) => {
  return (
    <>
    <Link to={href}>
     <li className='mt-100 md:mt-0 cursor-pointer w-full xl:w-auto px-10  py-3 h-auto md:h-fullcontent-center group hover:bg-white duration-150 '>
        <span target={target} className='flex justify-center h-auto md:h-full text-lg group-hover:text-primaryColor w-full duration-150 text-white font-body text-menu md:whitespace-nowrap'>{text}</span>
    </li>
    </Link>
    </>
  )
}

export default NavItem