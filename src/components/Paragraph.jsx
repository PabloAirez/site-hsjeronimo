import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Paragraph = ({title, text, classNameText, classNameTitle, hover, color}) => {

  return (
    <>
       {
         title && <p className={`font-body text-primaryColor text-body text-subtitle  ${classNameTitle} group-hover:${hover}`}>{title}</p>
       }
        <p style={{color: color}} className={`font-body text-primaryColor ${classNameText} group-hover:${hover}`}>{text}</p>
    </>
  )
}

export default Paragraph