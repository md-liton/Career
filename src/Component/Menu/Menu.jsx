import React, { useState } from 'react'


const Menu = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isSubDropdownVisible, setSubDropdownVisible] = useState(false);
  return (
    <div>
      <ul className='md:flex justify-center items-center md:gap-[35px]'>
        <li className='cursor-pointer py-1 md:py-0'>Home</li>
        <li className='cursor-pointer py-1 md:py-0'>Aboute us</li>
        <li className='cursor-pointer relative py-1 md:py-0' onMouseEnter={() => setDropdownVisible(true)} onMouseLeave={() => setDropdownVisible(false)}>
          jobs
          {isDropdownVisible && (
            <div className="job_item absolute text-white text-[14px] bg-[#F5F5F3] top-[20px] left-[-50px]  duration-400 z-[99] flex justify-between text-center ">
              <div className=" mx-auto text-primary">
                <ul className=" w-[150px]">
                  <li className="py-[5px] hover:bg-red-500 hover:text-white duration-300 ">
                    All Jobs
                  </li>
                  <li className="py-[5px] hover:bg-red-500 hover:text-white duration-300 ">
                    Govment
                  </li>
                  <li className="py-[5px] hover:bg-red-500 hover:text-white duration-300 relative" onMouseEnter={() => setSubDropdownVisible(true)} onMouseLeave={() => setSubDropdownVisible(false)}>
                    <div>Private</div>
                    {isSubDropdownVisible && (
                      <div className=" absolute text-white text-[14px] bg-[#F5F5F3] top-0 left-[150px]  duration-400 z-[99] flex justify-between text-center ">
                        <div className=" mx-auto text-primary">
                          <ul className=" w-[150px]">
                            <li className="py-[5px] hover:bg-red-500 hover:text-white duration-300 ">
                              Full Time
                            </li>
                            <li className="py-[5px] hover:bg-red-500 hover:text-white duration-300 ">
                              Part Time
                            </li>
                            <li className="py-[5px] hover:bg-red-500 hover:text-white duration-300 ">
                              Remote
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </li>
        <li className='cursor-pointer py-1 md:py-0 '>Apply</li>
        <li className='cursor-pointer py-1 md:py-0'>Notice</li>
        <li className='cursor-pointer py-1 md:py-0'>Contact</li>
      </ul>
    </div>
  )
}

export default Menu