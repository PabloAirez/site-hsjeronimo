// Componentes
import Paragraph from './Paragraph';
import List from './List';
import { IconContext } from "react-icons";
import * as Icons from 'react-icons';
import IconsData from '../data/IconsData.js'; 
// Hooks
import { useState } from 'react';
// Data




const Card = ({title, href, targetBlank = false,   description, image, rounded = false, hover = true, classNameCard, classNameImage, classNameTitle, classNameText, classNameList, icon, list}) => {
/*
* rounded - Prop que, se for verdadeiro, faz a imagem ser circular
*/

const [iconComponent, setIconComponent] = 
useState(
  IconsData.find(function (icons) {
  return icons.title == icon;
})); // Caso seja passado um ícone para o card, este state pega a lista de ícones de IconsData e faz um find para pegar apenas o ícone desejado

  return (

    <div className={`w-1/2 lg:w-1/3 flex-none xl:w-1/4 ${ hover && "hover:bg-secondaryColor hover:border-solid hover:border-2 hover:border-white duration-100 group"} ${classNameCard}`}>
      <a href={href} target={targetBlank ? "_blank" : "_self" } className='w-full h-full flex flex-col flex-wrap'>
        {title && <p className={` font-body 2xl:text-xl sm:text-lg text-sm text-primaryColor text-center w-full mb-8  mt-8 ${ hover && "group-hover:text-white duration-100"} whitespace-nowrap ${classNameTitle}`}>{title}</p>
        }
        <div className="flex flex-row justify-center w-full">
        {
          image && <img src={`${image.src}`} alt={image.alt} className={`h-40 w-40 sm:h-56 sm:w-56  min-h-32 min-w-32 rounded-3xl  mb-8 ${rounded && "rounded-full"} ${classNameImage}`} />
        }

        {
          icon &&  
          <IconContext.Provider value={{ className: "w-20 h-20 fill-primaryColor group-hover:fill-white mb-5" }}>
              {
                <iconComponent.icon></iconComponent.icon>
              }
          </IconContext.Provider>
          
        }

        </div>
        {description && <Paragraph text={description} classNameText={classNameText} hover={hover && "text-white"}></Paragraph>}
        {list && <List classNameItens={classNameList} itens={list}></List> }
      </a>
    </div>
  )
}

export default Card