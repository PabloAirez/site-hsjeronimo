import React from 'react'

const Card = ({title, image}) => {


  return (

    <div className='p-20 w-1/2 flex-none  xl:w-1/4 hover:bg-secondaryColor hover:border-solid hover:border-2 hover:border-white duration-100 group flex flex-wrap'>
      <a href="#" className='w-full h-full'>
        <p className=' font-body text-xl text-primaryColor w-full mb-8 text-center group-hover:text-white duration-100'>{title}</p>
        <img src={`${image.src}`} alt={image.alt} className='h-1/2 w-full min-h-32 min-w-32 rounded-3xl flex-none' />
      </a>
    </div>
  )
}

export default Card