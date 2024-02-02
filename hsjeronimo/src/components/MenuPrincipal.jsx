import { useState } from 'react'
import NavItem from './NavItem'
import Dropdown from './Dropdown'


const menu = [
{"text":"Instituição",
"subItems":[
    {"text":"Centro obstétrico e Maternidade",
    "href":"#"},
    {"text":"subitem2",
    "href":"#"}
]},
{"text":"Serviços",
"href" : "#"},
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
    <nav className="  bg-secondary-color shadow flex items-center">
      <ul className='h-full w-full mr-40 ml-20  flex items-center'>
        {menu.map((itemMenu,i)=>(
          itemMenu.subItems ? (
            <Dropdown key={i} text={itemMenu.text} subItems={itemMenu.subItems}></Dropdown>
          ) : (
            <NavItem key={i} text={itemMenu.text} href={itemMenu.href}></NavItem>

          )
          )
        )}
       
      </ul>
    </nav>
  )
}



