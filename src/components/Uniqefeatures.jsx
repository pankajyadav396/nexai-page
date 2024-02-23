import React from 'react'
import { uniqeFeaturesList } from './common/Helper'

const UniqeFeatures = () => {
    return (
        <div className='px-3' id='tokens'>
            <div className='max-w-[1340px] min-[1600px]:max-w-[1440px] mx-auto px-3 z-[1] border-[2px] border-white rounded-[20px] overflow-hidden h-[810px] bg-center relative bg-[url(./assets/images/webp/Uniqe-bg.webp)] bg-cover'>
                <div className="absolute animate-pulse w-[116px] sm:w-[233px] h-[116px] sm:h-[233px] rounded-[50%] bg-[#02CDCF] top-[172px] sm:top-0 lg:top-[103px] right-[-90px] sm:right-[-160px] xl:right-[-140px] blur-[100px] sm:blur-[150px]"></div>
                <div className="absolute animate-pulse w-[116px] sm:w-[233px] h-[116px] sm:h-[233px] rounded-[50%] bg-[#02CDCF] top-[472px] sm:top-[400px] lg:top-[503px] z-[-1] left-[-90px] sm:left-[-160px] xl:left-[-140px] blur-[100px] sm:blur-[150px]"></div>
                <div className=' h-full w-full'>
                    <div className='sm:px-3 md:px-7 lg:px-[80px]'>
                        <h3 data-aos="zoom-in" className='ff-recharge text-[24px] sm:text-[35px] md:text-[40px] text-center text-white mt-[40px] md:mt-[80px]'>Unique features</h3>
                        <p data-aos="zoom-in" className='ff-poppins font-normal mb-[50px] lg:mb-[80px] text-[13px] mt-3 text-balance sm:text-[16px] text-white flex mx-auto text-center max-w-[590px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magni sint laboriosam ea excepturi officia beatae natus fugit necessitatibus facilis.</p>
                        <div className='overflow-y-scroll overflow-x-hidden h-[600px] sm:h-[585px] md:h-[570px] pb-[40px] sm:pb-[80px]'>
                            {uniqeFeaturesList.map((obj, index) => {
                                return (
                                    <div key={index} className={`${index % 2 !== 0 ? 'justify-end' : ''} flex`}>
                                        <div className={`bg-white sm:max-w-[350px] max-w-[300px] sm:min-h-[400px] min-h-[280px] rounded-[16px] sm:p-[30px_24px] px-[18px] py-5 mb-4 hover:scale-95 duration-300 hover:shadow-2xl ${index !== 0 ? ' min-[820px]:mt-[-115px]' : 'mt-5'} `}>
                                            <span className='mb-5'> {obj.featureIcon} </span>
                                            <h5 className='ff-recharge text-[15px] sm:text-[20px] text-black mx-w-[350px] mt-4 mb-3'>
                                                {obj.title}</h5>
                                            <p className='ff-poppins font-normal text-[12px] sm:text-[16px] text-grey'>
                                                {obj.discription}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UniqeFeatures