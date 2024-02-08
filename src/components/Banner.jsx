import React from 'react'
import NavItem from './NavItem'
import SearchBar from './SearchBar'

const menu = [
    {"text":"Laudos Médicos Online",
    "href" : "#"},
    {"text":"Pesquisa de Satisfação",
    "href" : "#"}
    ]


const Banner = ({imageBackground, title}) => {
  

  return (
    <div  className={`h-banner w-screen   bg-center bg-cover ${imageBackground}`}>
        <div className='bg-blue-900/50 grid grid-rows-2 h-full w-full'>
            <div className="grid grid-cols-2 col-gap-2">
                    <img src="/logo.png" className='w-64 mt-16  h-32 ml-5 ' alt="logo do Hospital"  />
                    <ul className=' ml-20 mt-24 h-10 mr-5  xl:flex items-center justify-end'>
                        {menu.map((option,i)=>(
                            <NavItem key={i} text={option.text} href={option.href}></NavItem>
                        ))}
                        
                    </ul>
            </div>
            <div className="flex-row ">
                {title ? (
                    <p className='text-5xl font-bold text-white'>{title}</p>
                ): (
                    <div className="flex-col">
                        <SearchBar></SearchBar>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Banner