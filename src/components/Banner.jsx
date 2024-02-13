import React from 'react'
import NavItem from './NavItem'
import SearchBar from './SearchBar'


const menu = [
    {"text":"Laudos Médicos Online",
    "href" : "#"},
    {"text":"Pesquisa de Satisfação",
    "href" : "#"}
    ]


const Banner = ({backgroundImage, title}) => {
  return (
    <div  className={`h-banner w-screen   bg-center bg-cover`} style={{backgroundImage: backgroundImage}}>
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
                {title ? ( // Se for passado um Título de página, ele será exibido no lugar da barra de busca e número (que aparece no index)
                    <p className='text-5xl font-bold text-white'>{title}</p>
                ): (
                    <div className="flex-col content-center w-search">
                        <SearchBar></SearchBar>
                        <div className='flex content-center flex-row'>
                            <div className='rounded-full bg-transparent w-10 h-10 border-white border-solid border-2   ml-14 mt-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 stroke-white mt-2 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>

                            </div>
                            <p className='mt-8 ml-2 font-body text-white'>(51) 3651-8500</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Banner