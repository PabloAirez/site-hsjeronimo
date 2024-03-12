import React from 'react'

const Paragraph = ({title, text, classNameText, classNameTitle, hover}) => {

  return (
    <>
       {
         title && <p className={`font-body text-primaryColor mt-16 sm:ml-32 ml-10 sm:mr-40 mr-10 text-body  text-subtitle mb-4 ${classNameTitle} group-hover:${hover}`}>{title}</p>
       }
        <p className={`font-body text-primaryColor mb-20 sm:ml-32 ml-10 sm:mr-40 mr-10 ${classNameText} group-hover:${hover}`}>{text}</p>
    </>
  )
}

export default Paragraph