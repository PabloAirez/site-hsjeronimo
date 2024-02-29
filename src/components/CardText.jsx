import React from 'react'

const CardText = ({title, text, top, left, right, bottom}) => {


  return (

    

  <>
    <div style={{top: top, left: left, right:right, bottom: bottom}} className={`lg:absolute lg:w-64 w-40 relative`}>
        <h3 className='font-body text-primaryColor font-bold lg:left-auto left-64 text-lg lg:w-64 w-40 '>{title}</h3>
        <p className='font-body text-primaryColor lg:w-64  lg:left-auto left-64 '>{text}</p>
    </div>

  </>
  )
}

export default CardText