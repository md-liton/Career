import React, { useState } from 'react'
import Menu from '../Menu/Menu'
import { IoMenu, IoClose } from "react-icons/io5";



const Navbar = () => {
  const [menu, setMenu] = useState(false)
  return (
    <nav className='bg-yellow-500 '>
      <div className="container">
        <div className={`nav_main flex justify-between items-center py-[10px] bg-green-500 h-[50px] md:h-full`}>
          <div className={`logo h-[100ox] w-[100px] `}>Logo</div>
          <div className="menu">
            <div className='hidden md:block'>
              <Menu />
            </div>
          </div>
          <div className='hidden md:block'>
            <div className=" flex justify-end items-center gap-[15px] ">
              <div className='w-[40px] h-[40px] rounded-full bg-red-500'></div>
              <div className='bg-red-500 py-[8px] px-[25px] rounded-lg text-white cursor-pointer'>Login</div>
            </div>
          </div>

          <div className="md:hidden">
            {/* Toggle Menu Button */}
            <IoMenu
              className={`text-[25px] cursor-pointer ${menu && 'hidden'}`}
              onClick={() => setMenu(!menu)}
            />
            <IoClose
              className={`text-[25px] cursor-pointer ${!menu && 'hidden'}`}
              onClick={() => setMenu(!menu)}
            />
          </div>

          {/* Dropdown Menu */}
          <div
            className={`md:hidden absolute top-0 left-0 z-[99] w-[70%] bg-red-500 rounded-r-lg duration-500 transition-all transform 
  ${menu ? 'translate-x-0 opacity-100 visible' : '-translate-x-full opacity-0 invisible'}`}
          >
            <div className="p-5">
              <div className="w-[50px] h-[50px] rounded-full bg-green-500"></div>
              <div>
                <p className="text-[20px] font-bold">name</p>
                <Menu />
                <button className="bg-green-500 py-[8px] px-[25px] rounded-lg text-white cursor-pointer">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar