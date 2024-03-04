import React from 'react'

const Card = ({title, image}) => {


  return (

    <div className='w-1/2 lg:w-1/4 flex-none xl:w-1/5 hover:bg-secondaryColor hover:border-solid hover:border-2 hover:border-white duration-100 group '>
      <a href="#" className='w-full h-full flex flex-col flex-wrap'>
        <p className=' font-body 2xl:text-xl sm:text-lg text-sm text-primaryColor text-center w-full mb-8  mt-8  group-hover:text-white duration-100 whitespace-nowrap'>{title}</p>
        <div className="flex flex-row justify-center">
        <img src={`${image.src}`} alt={image.alt} className='h-40 w-40 sm:h-56 sm:w-56  min-h-32 min-w-32 rounded-3xl  mb-8 '/>
        </div>
      </a>
    </div>
  )
}

export default Card