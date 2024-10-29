import React from 'react';
import logo from '../../../public/assets/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoHomeOutline } from 'react-icons/io5';
import { GoGear, GoGraph } from 'react-icons/go';
import { CiUnlock } from 'react-icons/ci';

function Header() {
  return (
    <div className='z-50 w-full h-12 bg-[#F8F7F7] flex items-center text-black fixed'>
        <div className='h-full w-44 flex items-center justify-between'>
            <img src='/assets/logo.png' className='h-full p-2 pl-4 w-32' alt="Infogreen Logo" />
            <GiHamburgerMenu/>
        </div>

        <div className='flex items-center px-5 justify-between w-full'>
          <div className=' font-bold'>
          Infogreen Cloud Solutions
          </div>
          <div className='flex justify-between space-x-5 text-xl font-bold p-3'>
            <div  className='h-10 px-2 flex items-center hover:bg-gray-200 hover:cursor-pointer' >
          <IoHomeOutline/>
            </div>
            <div  className='h-10 px-2 flex items-center hover:bg-gray-200 hover:cursor-pointer' >
          
            <GoGraph />
            </div>
            <div  className='h-10 px-2 flex items-center hover:bg-gray-200 hover:cursor-pointer' >
            <GoGear />
            </div>
            <div  className='h-10 px-2 flex items-center hover:bg-gray-200 hover:cursor-pointer' >
            <CiUnlock />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header