import React from 'react'

const Image = ({image, classNameImage}) => {
  return (
    <div className=" flex flex-row justify-center" >
    {
        image && <img className={`ml-0 ${classNameImage}`} src={`${image.src}`} alt={image.alt}></img>
    }
    </div>
  )
}

export default Image