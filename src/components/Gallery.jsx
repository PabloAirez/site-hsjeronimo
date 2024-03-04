// Componentes
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Gallery = ({images, title}) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleRight = (e) =>{
        e.preventDefault();
        setCurrentImage((currentImage)=>(currentImage == images.length - 1 ? 0 : currentImage+1));
    };

    const handleLeft = (e) =>{
        e.preventDefault();
        setCurrentImage((currentImage)=>(currentImage == 0 ? images.length - 1 : currentImage-1));
    };

  return (
    <div>
        {images.length === 1 ? (
            <div className="flex">
                    <img key={images.id} src={images.src} alt={images.alt} className='w-full'/>
                </div>
            ):(
            <div className="overflow-hidden shadow-2xl relative w-1/2 m-auto mt-20 mb-10 border-1 border-solid border-black">
                <div className="flex transition-transform ease-out duration-1000 " style={{transform: `translateX(-${currentImage*100}%)`}}>
                    {
                        images.map((image)=>(
                            <img key={image.id} src={image.src} alt={image.alt} className='w-full'/>
                        ))
                    }
                </div>
               

                <div className="absolute inset-0 flex items-end  justify-center"><p className='bg-black/50 w-full text-center text-white h-24 font-bold text-xl font-body '>{title}</p></div>
                
                <div className="absolute inset-0 flex items-center justify-between p-4 ">
                    <button onClick={handleLeft} className='group p-1 rounded-full bg-white hover:bg-secondaryColor shadow duration-100'><ChevronLeftIcon className='w-10 h-10  stroke-primaryColor group-hover:stroke-white'></ChevronLeftIcon></button>
                    <button onClick={handleRight} className='group p-1 rounded-full bg-white hover:bg-secondaryColor shadow duration-100'><ChevronRightIcon className='w-10 h-10 stroke-primaryColor group-hover:stroke-white'></ChevronRightIcon></button>
                </div>
                
            </div>
        )}
    </div>
  )
}

export default Gallery