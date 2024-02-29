import React from 'react'

const Image = ({image, top, left, right, bottom}) => {

  return (
    <div className="relative mt-20 opacity-40" >
    {
        image && <img className='absolute ml-0 w-1/3 ' src={`${image.src}`} alt={image.alt} style={{top: top, left: left, right:right, bottom: bottom}}></img>
    }
    </div>
  )
}

export default Image