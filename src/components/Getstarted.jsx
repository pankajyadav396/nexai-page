import React from 'react'
import Commonbtn from './Commonbtn'

const Getstarted = () => {
    return (
        <>
            <div className='max-w-[1140px] lg:mt-[237px] md:mt-[130px] mt-[100px] px-3 mx-auto'>
                <div className='flex justify-between items-center flex-wrap max-md:justify-center gap-3'>
                    <h1 data-aos="zoom-in" className="max-w-[539px] text-center text-[30px] md:text-[38px] text-white  ff-recharge font-bold lg:text-[40px] leading-[52px]">
                        Ready to get started <br /><span className="!text-[#02CDCF] ">
                            Talk to us Today</span>
                    </h1>
                    <span data-aos="fade-up">
                        <Commonbtn className="hover:shadow-[inset_200px_0_0_0_black]" text="Get Started" />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Getstarted