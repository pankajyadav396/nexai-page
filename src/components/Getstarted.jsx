import React from 'react'
import Commonbtn from './Commonbtn'

const Getstarted = () => {
    return (
        <>
            <div className='max-w-[1140px] lg:mt-[237px] md:mt-[130px] mt-[100px] px-3 mx-auto'>
                <div className='flex justify-between items-center flex-wrap max-[502px]:justify-center max-[502px]:gap-5'>
                    <h1 data-aos="zoom-in" className=" max-w-[300px] sm:max-w-[429px] md:max-w-[539px] sm:text-[32px] text-[22px] md:text-[38px] text-[#02CDCF]  ff-recharge font-bold lg:text-[40px]  leading-[52px]">
                        <span className="text-white">Ready to get started
                        </span> Talk to us Today
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