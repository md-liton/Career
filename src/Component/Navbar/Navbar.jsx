import React from 'react'
import Menu from '../Menu/Menu'

const Navbar = () => {
  return (
    <nav className='bg-yellow-500'>
        <div className="container">
            <div className={`nav_main flex justify-between items-center py-[10px] bg-green-500`}>
                <div className={`logo h-[100ox] w-[100px] `}>Logo</div>
                <div className="menu">
                  <Menu/>
                </div>
                <div className="menu flex justify-end items-center gap-[15px]">
                  <div className='w-[40px] h-[40px] rounded-full bg-red-500'></div>
                  <div className='bg-red-500 py-[8px] px-[25px] rounded-lg text-white cursor-pointer'>Login</div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar