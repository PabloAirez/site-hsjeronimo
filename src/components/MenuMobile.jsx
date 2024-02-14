import { useState } from 'react'
import NavItem from './NavItem'
import Dropdown from './Dropdown'
import {Bars3Icon} from "@heroicons/react/24/solid";
import { HomeIcon } from '@heroicons/react/24/outline';

const MenuMobile = ({menu}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
  <li className='self-end mr-5'>  
    <button onClick={()=> {
        setMobileMenuOpen((prev)=> !prev)
        }}>
        <Bars3Icon  className='w-15 h-10 fill-white  hover:fill-primaryColor transition-colors duration-200'></Bars3Icon>
    </button>

  </li>

    <div className={`${mobileMenuOpen ? "max-h-screen" : "max-h-0 invisible"} w-full transition-all duration-500 ease-in-out overflow-hidden`}>
            <li className='cursor-pointer flex justify-center w-full xl:w-auto px-10  py-3 h-full content-center group hover:bg-white duration-150'>
              <a href="#">
                 <HomeIcon className='h-5 w-5 stroke-white group-hover:stroke-primaryColor'></HomeIcon>
              </a>
            </li>

  {
            menu.map((itemMenu)=>(
              itemMenu.subItems ? ( //Caso o item de menu tenha subitens, ele cria um dropdown
                <Dropdown key={itemMenu.id} text={itemMenu.text} subItems={itemMenu.subItems}></Dropdown>
              ) : (
                <NavItem key={itemMenu.id} text={itemMenu.text} href={itemMenu.href}></NavItem>
    
              )
              )
            )   
    } 
</div>


</>
  )
}

export default MenuMobile