import React from 'react'

const NewsTitle = ({title, className}) => {
  return (
    <>
    <h1 className={`font-body text-primaryColor text-3xl ${className}`}>{title}</h1>
    </>
  )
}

export default NewsTitle