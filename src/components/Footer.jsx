import React from 'react'
import Facebook, { Telegram, Twitter } from './common/Icons'

const Footer = () => {
    const d = new Date().getFullYear();
    return (
        <>
            <div className='bg-[url(./assets/images/webp/footerimg.webp)] bg-100 bg-no-repeat bg-bottom md:min-h-[492px] mt-[100px]'>
                <div className='max-w-[1140px] px-3 mx-auto border-b-[1px] border-[#b6bbbb] pb-[30px]'>
                    <div className='flex flex-row flex-wrap -mx-3 justify-between max-md:pt-[0px] pt-[80px]'>
                        <div className='xl:w-4/12 pr-3 sm:pl-7 pl-3'>
                            <h1 data-aos="zoom-out" className="md:max-w-[577px]  text-[#02CDCF] max-w-full recharge font-bold sm:text-[60px] text-4xl sm:leading-[76px] leading-[50px]">
                                Nexai
                            </h1>
                            <p data-aos="fade-up" className='font-bold text-lightGrey mt-5 mb-5 text-base ff-recharge max-w-[340px]'>Nullam viverra natoque amet et sed scelerisque viverra fringilla platea. Ullamcorper.</p>
                            <div data-aos="fade-up" className='flex gap-2'>
                                <a href="https://twitter.com/?lang=en" target='_blan0' className='hover:scale-105 hover:-translate-y-1 duration-300'><Twitter /></a>
                                <a href="https://www.facebook.com/" target='_blan0' className='hover:scale-105 hover:-translate-y-1 duration-300'><Facebook /></a>
                                <a href="https://web.telegram.org/k/" target='_blan0' className='hover:scale-105 hover:-translate-y-1 duration-300'><Telegram /></a>
                            </div>
                        </div>
                        <div className='flex justify-between gap-16 max-sm:gap-[24px] xl:w-4/12 px-3 max-md:mt-8 max-sm:pl-3 max-md:pl-6'>
                            <ul data-aos="fade-up" className='gap-3 sm:gap-5 flex flex-col'>
                                <l1 className=' text-[18px] text-nowrap text-white ff-recharge font-bold'>
                                    Quick Links
                                </l1>
                                <li>
                                    <a id='home' className='text-[#b6bbbb] ff-recharge max-sm:text-[14px] text-[16px] font-normal leading-normal hover:after:w-[100%] after:mx-auto after:right-[0px] after:items-center after:w-0 after:absolute after:bg-[#B6BBBB] after:h-[2px] cursor-pointer relative after:left-[0] after:bottom-[-2px] after:rounded-[15px] after:transition-all after:duration-300 after:ease-linear'>
                                        Home
                                    </a></li>
                                <li> <a id='features' className='text-[#b6bbbb] ff-recharge max-sm:text-[14px] text-[16px] font-normal leading-normal hover:after:w-[100%] after:mx-auto after:right-[0px] after:items-center after:w-0 after:absolute after:bg-[#B6BBBB] after:h-[2px] cursor-pointer relative after:left-[0] after:bottom-[-2px] after:rounded-[15px] after:transition-all after:duration-300 after:ease-linear'>
                                    Features
                                </a></li>
                                <li> <a id='market' className='text-[#b6bbbb] ff-recharge max-sm:text-[14px] text-[16px] font-normal leading-normal hover:after:w-[100%] after:mx-auto after:right-[0px] after:items-center after:w-0 after:absolute after:bg-[#B6BBBB] after:h-[2px] cursor-pointer relative after:left-[0] after:bottom-[-2px] after:rounded-[15px] after:transition-all after:duration-300 after:ease-linear'>
                                    MarketPlace
                                </a></li>
                                <li> <a id='tokens' className='text-[#b6bbbb] ff-recharge max-sm:text-[14px] text-[16px] font-normal leading-normal hover:after:w-[100%] after:mx-auto after:right-[0px] after:items-center after:w-0 after:absolute after:bg-[#B6BBBB] after:h-[2px] cursor-pointer relative after:left-[0] after:bottom-[-2px] after:rounded-[15px] after:transition-all after:duration-300 after:ease-linear'>
                                    Tokens
                                </a></li>
                                <li> <a id='nexchat' className='text-[#b6bbbb] ff-recharge max-sm:text-[14px] text-[16px] font-normal leading-normal hover:after:w-[100%] after:mx-auto after:right-[0px] after:items-center after:w-0 after:absolute after:bg-[#B6BBBB] after:h-[2px] cursor-pointer relative after:left-[0] after:bottom-[-2px] after:rounded-[15px] after:transition-all after:duration-300 after:ease-linear'>
                                    NexChat
                                </a></li>
                                <li><a id='about' className='text-[#b6bbbb] ff-recharge max-sm:text-[14px] text-[16px] font-normal leading-normal hover:after:w-[100%] after:mx-auto after:right-[0px] after:items-center after:w-0 after:absolute after:bg-[#B6BBBB] after:h-[2px] cursor-pointer relative after:left-[0] after:bottom-[-2px] after:rounded-[15px] after:transition-all after:duration-300 after:ease-linear'>
                                    About
                                </a ></li>
                            </ul >
                            <ul data-aos="fade-up" className='gap-3 sm:gap-5 flex flex-col'>
                                <l1 className=' text-[18px] text-white ff-recharge font-bold'>
                                    Information's
                                </l1>
                                <li>
                                    <a className='text-[#b6bbbb] ff-recharge max-sm:text-[14px] text-[16px] font-normal leading-normal hover:after:w-[100%] after:mx-auto after:right-[0px] after:items-center after:w-0 after:absolute after:bg-[#B6BBBB] after:h-[2px] cursor-pointer relative after:left-[0] after:bottom-[-2px] after:rounded-[15px] after:transition-all after:duration-300 after:ease-linear'>
                                        Contact
                                    </a></li>
                                <li> <a className='text-[#b6bbbb] ff-recharge max-sm:text-[14px] text-[16px] font-normal leading-normal hover:after:w-[100%] after:mx-auto after:right-[0px] after:items-center after:w-0 after:absolute after:bg-[#B6BBBB] after:h-[2px] cursor-pointer relative after:left-[0] after:bottom-[-2px] after:rounded-[15px] after:transition-all after:duration-300 after:ease-linear'>
                                    terms
                                </a></li>
                                <li> <a className='text-[#b6bbbb] ff-recharge max-sm:text-[14px] text-[16px] font-normal leading-normal hover:after:w-[100%] after:mx-auto after:right-[0px] after:items-center after:w-0 after:absolute after:bg-[#B6BBBB] after:h-[2px] cursor-pointer relative after:left-[0] after:bottom-[-2px] after:rounded-[15px] after:transition-all after:duration-300 after:ease-linear'>
                                    Privacy
                                </a></li>
                            </ul >
                        </div >
                    </div >
                </div >
                <p className='text-[#b6bbbb] py-[20px] mx-auto text-center ff-recharge text-[16px] font-normal leading-normal '>
                    @Copyright.nexai <span>{d}</span>
                </p>
            </div >
        </>
    )
}

export default Footer