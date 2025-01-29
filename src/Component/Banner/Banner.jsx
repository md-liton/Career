import React from 'react'
import banner from '../../assets/banner-1.svg'

const Banner = () => {
  return (
    <section className='bg-[url(assets/banner.jpg)] bg-cover bg-no-repeat bg-center text-white '>
        <div className='bg-[#081b2985]'>
        <div className="container">
            <div className="banner_main py-[255px] text-center">
              <h1 className='text-[65px] font-bold px-[50px] '>Career Index BD – Empowering Careers, Connecting Opportunities</h1>
              <p className='my-[32px]'>Career Index BD is dedicated to empowering the young generation by bridging the gap between ambition and opportunity. We provide comprehensive support in job placement, scholarships, IT skill development, self-improvement, professional CV writing, and freelancing. Our mission is to equip individuals with the necessary tools to build successful careers in the modern job market. Whether you're looking for your first job, seeking higher education funding, enhancing your technical skills, or starting a freelance career, Career Index BD is here to guide you. Join us and take the next step toward a brighter future with expert advice and tailored career solutions.</p>
              <button className='py-[10px] px-[25px] rounded-lg border'>Registration</button>
              </div>
        </div>
        </div>
    </section>
  )
}

export default Banner