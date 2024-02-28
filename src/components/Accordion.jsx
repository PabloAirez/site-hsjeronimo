import React, {useState} from 'react'
//Componente
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/24/outline";

const Accordion = ({title, text, image}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (

    <div className="flex flex-col pl-40 pr-40 mt-16 sm:ml-32 ml-10 sm:mr-56 mr-10">
      <div className="flex flex-row justify-center border-b-2 border-solid border-black/10">
      <button onClick={() => setAccordionOpen(!accordionOpen)}className="flex justify-between w-full">
        <span className="text-body text-primaryColor  text-subtitle mb-4 ml-3">{title}</span>
        {accordionOpen ? <ChevronUpIcon className='w-3 h-6'/> : <ChevronDownIcon  className='w-3 h-6'/> }
      </button>
      </div>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
        accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}>
        <div className="overflow-hidden text-body text-primaryColor mt-4 ml-3">{text}</div>
      </div>

    </div>
  )
}

export default Accordion