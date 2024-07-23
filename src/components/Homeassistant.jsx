import React from 'react'
import home from '../assets/images/webp/Homeassist.webp'
import Commonbtn from './Commonbtn'
const Homeassistant = () => {
    return (
        <>
            <div className='pt-[80px] pb-[90px] md:mt-0 lg:mt-[55px] lg:pb-[120px] relative'>
                <div className="absolute w-[116px] sm:w-[233px] h-[116px] sm:h-[233px] rounded-[50%] bg-[#02CDCF] top-[123px] sm:top-0 lg:top-[103px] right-[-90px] sm:right-[-160px] xl:right-[-140px] blur-[100px] sm:blur-[150px]"></div>
                <div className='max-w-[1240px] mx-auto px-3'>
                    <div className='flex flex-col sm:flex-row -mx-3 flex-wrap'>
                        <div className='w-full md:w-7/12 px-3 flex items-center justify-center relative z-[1]'>
                            <div className='absolute z-[1] w-[231px] h-[231px] rounded-full bg-[#02CDCF] filtur-blur'></div>
                            <img data-aos="zoom-in" src={home} alt="home" className='max-w-[612px] w-full' />
                        </div>
                        <div className='md:w-5/12 w-full px-3 pt-[40px] lg:pt-[70px] flex flex-col items-center justify-center'>
                            <div className='max-w-[516px] max-md:justify-center max-md:flex max-md:items-center max-md:flex-col max-md:text-center'>
                                <h2 data-aos="fade-up" className='text-[#02CDCF] font-bold text-[32px] sm:text-[40px] md:text-[30px] lg:text-[40px] mb-4 ff-recharge sm:leading-[50.4px] leading-[45px]'>Ai-Powered Home Assistant</h2>
                                <p data-aos="fade-up" className='text-lightGrey font-normal text-[14px] sm:text-[16px] md:text-[14px] lg:text-[16px] mb-[6px] font-["poppins"]'>Nexai is an advanced AI-powered home assistant that brings <br className='max-xl:hidden' /> the future to your fingertips. With its ability to engage in natural, fluent conversations in over 15 languages,</p>
                                <p data-aos="fade-up" className='text-lightGrey font-normal text-[14px] sm:text-[16px] md:text-[14px] lg:text-[16px] mb-[6px] font-["poppins"]'>Nexai offers an incredibly futuristic experience. It can take the initiative to ask about your day, schedule meetings, provide <br className=' max-xl:hidden' /> timely reminders</p>
                                <p data-aos="fade-up" className='text-lightGrey font-normal text-[14px] sm:text-[16px] md:text-[14px] lg:text-[16px]  mb-[40px] font-["poppins"]'>assist with cooking by suggesting ingredients, track your fitness and nutrition goals, and even handle bill payments.</p>
                                <div data-aos="fade-up">
                                    <Commonbtn className="hover:shadow-[inset_200px_0_0_0_black]" data-aos="fade-up" text="Learn More" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homeassistant