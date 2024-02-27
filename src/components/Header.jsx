import React from 'react'
import Commonbtn from './Commonbtn'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
      <div id='home' className="mt-4 bg-[url(./assets/images/webp/heroimg.webp)] min-h-screen min-[1200px]:h-[810px] w-full bg-center bg-no-repeat bg-cover min-[1400px]:bg-contain relative flex flex-col">
        <Navbar />
        <div className="grow max-w-[1164px] w-full flex flex-col justify-center min-[1200px]:justify-start mx-auto px-3 min-[1200px]:mt-[144px]">
          <div className="max-w-[577px] w-full">
            <p data-aos="zoom-out" data-aos-delay="3000" className="ff-recharge font-bold text-[35px] sm:text-[60px] sm:leading-[76 .6px] text-white">
              <span className="text-[#02CDCF]">Nexai</span> is an advanced
              AI-powered home assistant
            </p>
            <p data-aos="zoom-out" data-aos-delay="3000" className="mt-0 mb-[51px] font-['poppins'] font-normal text-base leading-[25.6px] text-white">
              Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla
              odio.
            </p>
            <div data-aos="zoom-in" data-aos-delay="3000" className='block'>
              <Commonbtn className="hover:shadow-[inset_200px_0_0_0_black]"
                text="Know More"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header