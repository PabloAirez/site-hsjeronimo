import React from 'react'

const CardText = ({title, text, top, left, right, bottom}) => {


  return (

    

  <>
    <div style={{top: top, left: left, right:right, bottom: bottom}} className={`absolute w-64`}>
        <h3 className='font-body text-primaryColor font-bold text-lg w-64'>{title}</h3>
        <p className='font-body text-primaryColor w-64'>{text}</p>
    </div>

  </>
  )
}

export default CardText