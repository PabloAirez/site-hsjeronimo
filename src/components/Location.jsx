import React from 'react'

const Location = () => {
  return (
    <div className=' h-1/4 w-full'>
        <p className='font-body text-3xl text-primaryColor w-full mb-8 mt-20 text-center'>Localização</p>
        <p className='font-body text-primaryColor text-center mb-5'>O Hospital está localizado na Rua Rio Branco, no 1008,
            Bairro Bela Vista, CEP: 96700-000, no centro da cidade
                de São Jerônimo, a 68 km de Porto Alegre.</p>
        <div className='flex flex-row justify-center m-0 p-0  w-full'>
        <iframe className='border-2 border-solid border-black' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13826.785083574447!2d-51.7164808!3d-29.9594139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951bbfb428c0abbb%3A0x2d7f1bb59e1b62b4!2sHospital%20de%20Caridade%20S%C3%A3o%20Jer%C3%B4nimo!5e0!3m2!1spt-BR!2sbr!4v1707852063636!5m2!1spt-BR!2sbr" width="600" height="450" style={{boder:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Location