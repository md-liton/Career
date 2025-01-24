import React from 'react'

const Menu = () => {
  return (
    <div>
        <ul className='flex justify-center items-center gap-[25px]'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>jobs</li>
            <li className='cursor-pointer'>Apply</li>
            <li className='cursor-pointer'>Notice</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
    </div>
  )
}

export default Menu