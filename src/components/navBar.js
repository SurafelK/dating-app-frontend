import React from 'react'
import { MdAccountCircle } from "react-icons/md";
import { IoLogoTux } from "react-icons/io";
import { RiMessageFill } from "react-icons/ri";
const NavBar = () =>
{
    const style = {fontSize: "48"}
    return(
        <div className='flex bg-gray-500 w-full h-20 items-center p-5'>
  <div className='flex  items-center'>
    <MdAccountCircle style={style} className='cursor-pointer' />
  </div>

  <div className='flex ml-auto items-center'>
    <IoLogoTux style={style} className='cursor-pointer' />
  </div>
  <div className='flex ml-auto items-center'>
    <RiMessageFill style={style} className='cursor-pointer' />
  </div>

</div>

      
    )
}
export default NavBar