import {useRef} from 'react'
import Card from './Card'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

const Carrossel = ({cards,  rounded = false, classNameCard, classNameImage, classNameText}) => {


    const carrossel = useRef(null);

    const handleRight = (e) =>{
        e.preventDefault();
        carrossel.current.scrollLeft += carrossel.current.offsetWidth;
    };

    const handleLeft = (e) =>{
        e.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
    };
  return (
    <>
    <div className='w-full flex flex-row justify-center mt-16'>
        <button className='group' onClick={handleLeft}><ChevronLeftIcon className='w-5 h-5 mr-8 mb-2 stroke-primaryColor group-hover:stroke-white'></ChevronLeftIcon></button>
        <button className='group' onClick={handleRight}><ChevronRightIcon className='w-5 h-5 mb-2 stroke-primaryColor group-hover:stroke-white'></ChevronRightIcon></button>

    </div>
    
    <div ref={carrossel} className='flex overflow-x-auto scroll-smooth no-scrollbar flex-none w-full'>
        {cards.map((card)=>(
                <Card  key={card.id} title={card.title} description={card.description} image={card.image} href={card.href} icon={card.icon} rounded={rounded} classNameCard={classNameCard} classNameImage={classNameImage} classNameText={classNameText}></Card>
         ))}
    </div>

    </>
  )
}

export default Carrossel