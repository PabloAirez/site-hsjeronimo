import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Paragraph = ({title, text, className }) => {

  return (
    <>
        <p className={`font-body text-primaryColor mt-16 mb-10 sm:ml-32 ml-10 text-body text-primaryColor text-subtitle mb-4 ${className}`}>{title}</p>
        <p className={`font-body text-primaryColor mb-5 sm:ml-32 ml-10  ${className}`}>{text}</p>
    </>
  )
}

export default Paragraph