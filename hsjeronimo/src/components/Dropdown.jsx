import React from 'react'
import { useState } from 'react';
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/24/outline";

const Dropdown = ({text, subItems}) => {

    const [dropdownOpen,setDropdownOpen] = useState(false);

    const activeDropdown = (button)=>{
            button.parentElement.classList.toggle("bg-white");
            button.classList.toggle("p-primary-color");
            return;
       
    };

    
  return (
<div className='relative'>
    <li className='active:bg-white w-auto px-10 py-3 h-full content-center group hover:bg-white duration-150'>
        <button onClick={event=> {
        activeDropdown(event.currentTarget);
        setDropdownOpen((prev)=> !prev);
        }} className='inline-flex text-lg group-hover:p-primary-color w-full duration-150 text-white font-body whitespace-nowrap text-menu '>
            {text}
            {dropdownOpen ? (
            <ChevronUpIcon className='w-3 h-6'></ChevronUpIcon>
            ) : (
                <ChevronDownIcon className=' w-3 h-6'></ChevronDownIcon>
            )}
            </button>
    </li>

    {dropdownOpen && (
                <div className='bg-white absolute top-full w-64 rounded-b-2xl rounded-l-lg rounded-r-lg pb-10 pl-5 pr-5 pt-5 rounded-t-none'>
                    <ul className='w-full p-0'>
                        {subItems.map((subItem,i)=>(
                            <li key={i} className='w-full  hover:bg-gray-100 cursor-pointer pb-4'><a href={subItem.href} className='p-primary-color w-full '>{subItem.text}</a></li>
                        ))}
                    </ul>
                </div>
            )}

</div>  
  )
}

export default Dropdown