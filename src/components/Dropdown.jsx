// Hooks
import { useState, useRef, useEffect } from 'react';
// Componentes
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"

const Dropdown = ({text, subItems}) => {


   
       
    const [dropdownOpen,setDropdownOpen] = useState(false);
    const buttonRef = useRef(); 
   
    //O Hook useEffect abaixo tem como função verificar quando o mouse receber um novo clique, para assim, fechar o dropdown
   useEffect(()=>{
        let handler = (e)=>{
            if(e.target.tagName != "A"){
                setDropdownOpen(false);
            }            
        }
    document.addEventListener("mousedown",handler);
   });

    
  return (
<div className=' w-full xl:w-auto relative '>
    <li className={`active:bg-white  px-10 py-3 h-full content-center group hover:bg-white duration-150 w-full xl:w-auto ${dropdownOpen ? "bg-white" : ""}`}>
        <button ref={buttonRef} onClick={()=> {
        setDropdownOpen((prev)=> !prev);
        }}  className={`justify-center inline-flex text-lg group-hover:text-primaryColor w-full duration-150 text-white font-body whitespace-nowrap text-menu ${dropdownOpen ? "p-primary-color" : ""}`}>
            {text}
            {dropdownOpen ? (
            <ChevronUpIcon className='w-3 h-6'></ChevronUpIcon>
            ) : (
                <ChevronDownIcon className=' w-3 h-6'></ChevronDownIcon>
            )}
            </button>
    </li>


    <div  className={`bg-white ${dropdownOpen ? "max-h-screen" : "max-h-0 invisible hidden xl:inline-flex"} transition-all duration-500 ease-in-out overflow-hidden  xl:absolute top-full w-full xl:w-64 rounded-b-2xl rounded-l-lg rounded-r-lg pb-10 pl-5 pr-5 pt-5 rounded-t-none`}>
                    <ul className='w-full p-0'>
                        {subItems.map((subItem,i)=>(
                            <li key={i} className='w-full  hover:bg-gray-100 transition duration-200 cursor-pointer pb-4'><Link to={subItem.href} className='text-primaryColor w-full flex justify-center xl:justify-start'>{subItem.text}</Link></li>
                        ))}
                    </ul>
                </div>
        

</div>  
  )
}

export default Dropdown
