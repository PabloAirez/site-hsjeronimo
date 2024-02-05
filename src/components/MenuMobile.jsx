import { useState } from 'react'
import NavItem from './NavItem'
import Dropdown from './Dropdown'
import {Bars3Icon} from "@heroicons/react/24/solid";

const MenuMobile = ({menu}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
    <button onClick={()=> {
        setMobileMenuOpen((prev)=> !prev)
        }}>
        <Bars3Icon  className='w-15 h-10 fill-white  hover:fill-primaryColor transition-colors duration-200'></Bars3Icon>
    </button>

<div className='h-auto m-auto'>

  {

      mobileMenuOpen && (
            menu.map((itemMenu,i)=>(
              itemMenu.subItems ? ( //Caso o item de menu tenha subitens, ele cria um dropdown
                <Dropdown key={i} text={itemMenu.text} subItems={itemMenu.subItems}></Dropdown>
              ) : (
                <NavItem key={i} text={itemMenu.text} href={itemMenu.href}></NavItem>
    
              )
              )
            )
      )
    
      
    } 


</div>

</>
  )
}

export default MenuMobile