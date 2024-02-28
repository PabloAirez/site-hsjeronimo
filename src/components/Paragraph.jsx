import React from 'react'

const Paragraph = ({title, text}) => {

  return (
    <>
        <p className="font-body text-primaryColor mt-16 mb-10 sm:ml-32 ml-10 sm:mr-40 mr-10 text-body text-primaryColor text-subtitle mb-4">{title}</p>
        <p className="font-body text-primaryColor mb-20 sm:ml-32 ml-10 sm:mr-40 mr-10 ">{text}</p>
    </>
  )
}

export default Paragraph