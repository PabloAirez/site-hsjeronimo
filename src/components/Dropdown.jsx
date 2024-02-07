import React from 'react'
import { useState } from 'react';
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/24/outline";

const Dropdown = ({text, subItems}) => {

    const [dropdownOpen,setDropdownOpen] = useState(false);

    /*
    * A função activeDropdown é ativada ao clicar no botão 
    * de dropdown. Ela serve para manter as classes do efeito hover
    * ativas após clicar no botão, sem necessidade de ficar com o mouse
    * por cima. Recebe como parâmetro um elemento de botão 
    */

    const activeDropdown = (button)=>{
            button.parentElement.classList.toggle("bg-white");
            button.classList.toggle("p-primary-color");
            return;
       
    };

    
  return (
<div className=' w-full xl:w-auto relative '>
    <li className='active:bg-white  px-10 py-3 h-full content-center group hover:bg-white duration-150 w-full xl:w-auto'>
        <button onClick={event=> {
        activeDropdown(event.currentTarget);
        setDropdownOpen((prev)=> !prev);
        }} className='justify-center inline-flex text-lg group-hover:text-primaryColor w-full duration-150 text-white font-body whitespace-nowrap text-menu '>
            {text}
            {dropdownOpen ? (
            <ChevronUpIcon className='w-3 h-6'></ChevronUpIcon>
            ) : (
                <ChevronDownIcon className=' w-3 h-6'></ChevronDownIcon>
            )}
            </button>
    </li>

    {dropdownOpen && (
                <div className='bg-white  xl:absolute top-full w-full xl:w-64 rounded-b-2xl rounded-l-lg rounded-r-lg pb-10 pl-5 pr-5 pt-5 rounded-t-none'>
                    <ul className='w-full p-0'>
                        {subItems.map((subItem,i)=>(
                            <li key={i} className='w-full  hover:bg-gray-100 transition duration-200 cursor-pointer pb-4'><a href={subItem.href} className='text-primaryColor w-full flex justify-center'>{subItem.text}</a></li>
                        ))}
                    </ul>
                </div>
            )}

</div>  
  )
}

export default Dropdown
