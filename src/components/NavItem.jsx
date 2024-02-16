
const NavItem = ({text,href}) => {
  return (
    <>
     <li className='mt-100 md:mt-0 cursor-pointer w-full xl:w-auto px-10  py-3 h-auto md:h-fullcontent-center group hover:bg-white duration-150 '>
        <a className='flex justify-center h-auto md:h-full text-lg group-hover:text-primaryColor w-full duration-150 text-white font-body text-menu md:whitespace-nowrap' href={href}>{text}</a>
    </li>
    </>
  )
}

export default NavItem