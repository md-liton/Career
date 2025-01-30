import React from 'react'
import { AiOutlineFileSearch } from "react-icons/ai";
import { IoBusinessSharp } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";




const Service = () => {
  return (
    <section className='md:py-[50px]'>
        <div className="container">
            <div className="service_main">
                <div className='text-center md:w-[800px] mx-auto'>
                <h2>Our Service</h2>
                <p>Career Index BD empowers youth with job applications, business growth, freelancing, scholarships, and career development for a brighter future.</p>
                </div>
                <div className="items md:flex justify-between items-center gap-[30px] py-[30px]">
                        <div className="item border rounded-lg text-center p-[25px] cursor-pointer">
                              <div className='flex justify-center'>
                                  <AiOutlineFileSearch className='text-[40px]' />
                              </div>
                              <h4 className='my-[10px]'>Job Apply</h4>
                              <p>Career Index BD supports job seekers with resume writing, applications, interview preparation, and career guidance.</p>
                              <button className='py-[10px] px-[25px] rounded-lg border mt-[20px]'>Read More</button>
                        </div>
                        <div className="item border rounded-lg text-center p-[25px] cursor-pointer">
                              <div className='flex justify-center'>
                                  <IoBusinessSharp className='text-[40px]' />
                              </div>
                              <h4 className='my-[10px]'>Business Development</h4>
                              <p>Career Index BD helps entrepreneurs with planning, strategy, networking, and growth to build successful businesses.</p>
                              <button className='py-[10px] px-[25px] rounded-lg border mt-[20px]'>Read More</button>
                        </div>
                      <div className="item border rounded-lg text-center p-[25px] cursor-pointer">
                          <div className='flex justify-center'>
                              <FaComputer className='text-[40px]' />
                          </div>
                          <h4 className='my-[10px]'>Freelancing</h4>
                          <p>Career Index BD guides freelancers with skill development, profile optimization, client acquisition, and earning opportunities.</p>
                          <button className='py-[10px] px-[25px] rounded-lg border mt-[20px]'>Read More</button>
                      </div>
                        <div className="item border rounded-lg text-center p-[25px] cursor-pointer">
                              <div className='flex justify-center'>
                                  <GiTakeMyMoney className='text-[40px]' />
                              </div>
                              <h4 className='my-[10px]'>Scholarship</h4>
                              <p>Career Index BD helps students secure scholarships and admission for higher studies abroad with expert guidance.</p>
                              <button className='py-[10px] px-[25px] rounded-lg border mt-[20px]'>Read More</button>
                        </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service