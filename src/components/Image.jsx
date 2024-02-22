import React from 'react'

const Image = ({image, top, left, right, bottom}) => {

  return (
    <div className="relative mt-20" >
    {
        image && <img className='absolute ml-0' src={`${image.src}`} alt={image.alt} style={{top: top, left: left, right:right, bottom: bottom}}></img>
    }
    </div>
  )
}

export default Image