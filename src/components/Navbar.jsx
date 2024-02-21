import React from 'react'
import { useState } from 'react'
import Commonbtn from './Commonbtn'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  function show() {
    setNav(!nav)
    if (nav === false) {
      document.body.classList.add("max-lg:overflow-hidden")
    }
    else {
      document.body.classList.remove("max-lg:overflow-hidden")
    }
  };

  return (
    <>
      <div className='lg:px-4'>
        <div className='px-4 pt-[15px] '>
          <nav
            className="max-w-[1156px] ml-auto lg:py-[15.8px] max-[1100px]:mt-10 bg-transparent flex items-center justify-between lg:justify-center mx-auto">
            <ul
              className={`${nav ? "left-0" : "left-[-100%]"
                } flex items-center gap-[28px] mobileView duration-300`}>
              <li><a onClick={show} href="#home"
                className="text-white ff-recharge sm:font-['poppins'] max-sm:text-[20px] text-[16px] font-normal leading-normal hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#fff] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[15px] after:transition-all after:duration-300 after:ease-linear">Home</a>
              </li>
              <li><a onClick={show} href="#market"
                className="text-white ff-recharge sm:font-['poppins'] max-sm:text-[20px] text-[16px] font-normal leading-normal hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#fff] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[15px] after:transition-all after:duration-300 after:ease-linear">Marketplace</a>
              </li>
              <li><a onClick={show} href="#about"
                className="text-white ff-recharge sm:font-['poppins'] max-sm:text-[20px] text-[16px] font-normal leading-normal hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#fff] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[15px] after:transition-all after:duration-300 after:ease-linear">About</a>
              </li>
              <li><a onClick={show} href="#nexchat"
                className="text-white ff-recharge sm:font-['poppins'] max-sm:text-[20px] text-[16px] font-normal leading-normal hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#fff] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[15px] after:transition-all after:duration-300 after:ease-linear">NexChat</a>
              </li>
              <li><a onClick={show} href="#tokens"
                className="text-white ff-recharge sm:font-['poppins'] max-sm:text-[20px] text-[16px] font-normal leading-normal hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#fff] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[15px] after:transition-all after:duration-300 after:ease-linear">Tokens</a>
              </li>
            </ul>
            <ul data-aos="zoom-in" data-aos-delay="3000" className="absolute 2xl:right-[10%] right-8">
              <li><Commonbtn className="hover:shadow-[inset_200px_0_0_0_black]" text="Sign Up" /></li>
            </ul>
            <label className='sm:hidden ml-5' onClick={show}>
              {nav ? (
                <div className='relative z-50'>
                  <span className=' flex w-6 h-1 bg-[#02CDCF] duration-300 rounded-2xl rotate-45 mb-1'></span>
                  <span className=' flex w-6 h-1 bg-[#02CDCF] duration-300 rounded-2xl absolute top-0 -rotate-45 mb-1'></span>
                </div>
              ) : (
                <div className='relative z-40'>
                  <span className=' flex w-6 h-1 bg-[#02CDCF] duration-300 rounded-2xl mb-1'></span>
                  <span className=' flex w-6 h-1 bg-[#02CDCF] duration-300 rounded-2xl mb-1'></span>
                  <span className=' flex w-6 h-1 bg-[#02CDCF] duration-300 rounded-2xl'></span>
                </div>
              )}
            </label>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar