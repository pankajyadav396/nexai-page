import React from 'react'
import Commonbtn from './Commonbtn'
import ai from '../assets/images/webp/airound.webp'
const Nexaigif = () => {
    return (
        <>
            <div className='px-3 md:mt-[120px] mt-[80px] lg:mt-[160px]'>
                <div className='border-white  border-[1px] flex items-center justify-center flex-col mx-auto px-3 rounded-[24px] bg-[url(./assets/images/ai_img.gif)] bg-no-repeat bg-100-100 bg-center min-h-[810px]'>
                    <div className='flex flex-wrap flex-col-reverse md:flex-row -mx-3 min-[1440px]:w-[100%]'>
                        <div className='md:w-1/2 w-full px-3 mb-10 md:mb-0 flex flex-col items-center'>
                            <div className='max-w-[500px]'>
                                <h2 data-aos="fade-up" className='text-[#02CDCF] max-md:text-center text-nowrap mt-5 md:max-w-[480px] font-bold text-[28px] sm:text-[40px] md:text-[30px] lg:text-[40px] mb-4 ff-recharge leading-[50.4px]'>What is NexAi?</h2>
                                <p data-aos="fade-up" className='text-lightGrey max-md:text-center md:max-w-[480px] font-normal text-[14px] sm:text-[16px] md:text-[14px] lg:text-[16px] mb-[6px] ff-["poppins"]'>Beyond its convenience, Nexai revolutionizes the way you interact with your home environment. It enhances productivity, efficiency, and overall well-being. From managing your schedules to transforming the way you experience smart living, Nexai opens up a world of possibilities.</p>
                                <p data-aos="fade-up" className='text-lightGrey max-md:text-center md:max-w-[480px] font-normal text-[14px] sm:text-[16px] md:text-[14px] lg:text-[16px] mb-[40px] ff-["poppins"]'>Nexai's software can be installed on all your smart devices, including smartphones, computers, smart TVs, and kitchen appliances. It acts as a centralized control hub, allowing you to manage and interact with all your devices seamlessly. Whether it's adjusting the temperature, turning on appliances, or even accessing files on your home computer from anywhere, Nexai empowers you with effortless control.</p>
                                <div data-aos="fade-up" className=' max-md:flex items-center justify-center'>
                                    <Commonbtn text="Learn More" />
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" className='w-full md:w-1/2 px-3 flex items-center justify-center'>
                            <img src={ai} alt="image" className=' mix-blend-lighten' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nexaigif