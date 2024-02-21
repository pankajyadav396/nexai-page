import React from 'react'
import hand from '../assets/images/webp/handai.webp'
import lineimg from '../assets/images/webp/lineimg.webp'
import dots from '../assets/images/webp/dotimg.webp'
import { handaiRoadmap } from './common/Helper'
const Handai = () => {
    return (
        <>
            <div className='max-w-[1140px] px-3 mx-auto lg:mt-[150px] md:mt-[110px] mt-[80px]'>
                <h2 data-aos="zoom-in" className='text-[#02CDCF] relative z-10 font-bold text-[32px] sm:text-[40px] text-center mb-[40px] ff-recharge leading-[50.4px]'>NexAI Token & utility</h2>
                <div className='flex -mx-3 flex-wrap flex-col md:flex-row'>
                    <div data-aos="fade-up" className='w-full md:w-1/2 px-3 relative z-[1] items-center justify-center flex'>
                        <img src={hand} alt="img00" className='w-full mt-[-40px] relative z-[-1]' />
                    </div>
                    <div data-aos="fade-up" className='md:w-1/2 w-full pl-4 overflow-y-scroll overflow-x-hidden h-[450px]'>
                        <div className=' flex flex-col items-center justify-center w-full'>
                            <div className="relative z-10 mt-[63px] max-w-[570px]">
                                <img
                                    className=" absolute mt-[20px] min-[522px]:left-[2px] h-[100%] max-w-[8px] top-[-10px] md:left-[10px] left-[10px] z-[-1]"
                                    src={lineimg}
                                    alt="lineimg"
                                />
                                {handaiRoadmap.map((obj, index) => {
                                    return (
                                        <div className={`${index == 5 ? "mb-0" : "mb-[40px] lg:mb-[60px]"} relative flex items-baseline gap-[10px]`}>
                                            <img src={dots} alt="dots" className='absolute md:left-[0px] min-[522px]:left-[-7px] top-[53%]' />
                                            <div className='flex flex-col ml-[40px]'>
                                                <p className="text-white text-[19px] sm:text-[24px] md:text-[19px] lg:text-[24px] font-bold ff-recharge  max-w-[568px]">
                                                    {obj.roadmapTitle}
                                                </p>
                                                <p className='text-[#bbbbbb] text-balance max-w-[502px] ff-["poppins"] mt-[16px] text-[14px] sm:text-[16px] md:text-[14px] lg:text-[16px] font-normal'>{obj.roadmapDescription}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Handai