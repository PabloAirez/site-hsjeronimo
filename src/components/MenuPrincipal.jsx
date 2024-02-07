import { useState } from 'react'
import NavItem from './NavItem'
import Dropdown from './Dropdown'
import MenuMobile from './MenuMobile';


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
    <nav className="bg-secondaryColor shadow flex items-center">

      { //Esta sessão é para mobile  
      }
      <ul className='h-full w-full xl:hidden flex items-center flex-col'>
          <MenuMobile menu={menu}></MenuMobile>        
      </ul>


      { //Esta sessão é para desktops e TVs 
      }
     <div className="hidden xl:flex">

        <ul className='h-full w-full mr-40 ml-20  flex items-center'>
          
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