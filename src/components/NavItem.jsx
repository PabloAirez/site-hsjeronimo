import React from 'react'

const NavItem = ({text,href}) => {
  return (
    <>
     <li className=' cursor-pointer w-auto px-10  py-3 h-full content-center group hover:bg-white duration-150 '>
        <a className=' text-lg group-hover:text-primaryColor w-full duration-150 text-white font-body text-menu whitespace-nowrap' href={href}>{text}</a>
    </li>
    </>
  )
}

export default NavItem