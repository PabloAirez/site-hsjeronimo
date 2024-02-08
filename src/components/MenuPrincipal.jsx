import { useState, useRef } from 'react'
import NavItem from './NavItem'
import Dropdown from './Dropdown'
import MenuMobile from './MenuMobile';
import { HomeIcon } from '@heroicons/react/24/outline';


const menu = [
{"text":"Instituição",
"subItems":[
    {"text":"História do Hospital",
    "href":"#"},
    {"text":"Especialidades",
    "href":"#"},
    {"text":"Estrutura",
    "href":"#"},
    {"text":"Convênios e Planos",
    "href":"#"},
    {"text":"Trabalhe conosco",
    "href":"#"}
]},
{"text":"Serviços",
"subItems":[
  {"text":"Assistência Social;",
  "href":"#"},
  {"text":"Bloco Cirúrgico",
  "href":"#"},
  {"text":"Centro Clínico",
  "href":"#"},
  {"text":"Centro Obstétrico e Maternidade",
  "href":"#"},
  {"text":"Internação",
  "href":"#"},
  {"text":"Laboratório de Análises Clínicas",
  "href":"#"},
  {"text":"Pronto Atendimento/Emergência",
  "href":"#"},
  {"text":"Pediatria",
  "href":"#"},
  {"text":"Psicologia",
  "href":"#"}
]},
{"text":"Notícias",
"href" : "#"},
{"text":"Marcação de Consultas e Exames",
"href" : "#"},
{"text":"Doação de Sangue",
"href" : "#"},
{"text":"Parcerias",
"href" : "#"},
{"text":"LGPD",
"href" : "#"},
]



export default function MenuPrincipal() {

  

   
    return (
    <nav className="bg-secondaryColor shadow flex items-center w-screen fixed">

      { //Esta sessão é para mobile  
      }
      <ul className='h-full w-full xl:hidden flex items-center flex-col'>
          <MenuMobile menu={menu}></MenuMobile>        
      </ul>


      { //Esta sessão é para desktops e TVs 
      }
     <div className="hidden xl:flex">

        <ul className='h-full w-full mr-40 ml-20  flex items-center'>
          <li className='mt-100 md:mt-0 cursor-pointer w-full xl:w-auto px-10  py-3 h-auto md:h-fullcontent-center group hover:bg-white duration-150 '>
              <a href="#">
                  <HomeIcon className='h-5 w-5 stroke-white group-hover:stroke-primaryColor'></HomeIcon>

              </a>
          </li>
          
          {menu.map((itemMenu,i)=>(
            itemMenu.subItems ? ( //Caso o item de menu tenha subitens, ele cria um dropdown
              <Dropdown key={i} text={itemMenu.text} subItems={itemMenu.subItems}></Dropdown>
            ) : (
              <NavItem key={i} text={itemMenu.text} href={itemMenu.href}></NavItem>

            )
            )
          )}
        
        </ul>
      </div>  
    </nav>
  )
}