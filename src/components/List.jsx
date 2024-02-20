import React from 'react'

const List = ({itens, error}) => {

  return (
    <ul>
         {
      error ? (
        <li className='font-body text-3xl text-primaryColor w-full mb-8 mt-20 text-center'>{error}</li>
      ) : (
          itens.map((item)=>(
            <li className='list-disc font-body  text-primaryColor w-full mb-8 mt-16 ml-20' key={item.id}>{item.title}</li>
          ))
      )}

    </ul>
  )
}

export default List