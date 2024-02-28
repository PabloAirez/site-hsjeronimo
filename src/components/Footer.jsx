import React from 'react'

const Footer = () => {
    const footerItems = [
        {
          text:"Trabalhe Conosco",
          href:"#"
        },
        {
            text:"Política de Privacidade",
            href:"#"
          },
          {
            text:"Política Socioambiental",
            href:"#"
          },
          {
            text:"Política de Controle de Infecção",
            href:"#"
          },

        
    ]
  return (
    <div className='w-full justify-center flex'>
         <ul className='h-full w-full mr-40 ml-20 mt-40 flex justify-center items-center'>
             {footerItems.map((item,i)=>(
                <li key={i} className='mt-100 md:mt-0 cursor-pointer w-full xl:w-auto px-10  py-3 h-auto md:h-full content-center group duration-150 '>
                <a className='flex justify-center h-auto md:h-full text-lg group-hover:text-white w-full duration-150 text-primaryColor font-body text-menu md:whitespace-nowrap' href={item.href}>{item.text}</a>
                </li>
             ))}
            

              
    
          </ul>
    </div>
  )
}

export default Footer