import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { blockchainSliderList } from './common/Helper';

const Blockchain = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'Linear',
        slidesToShow: 4.5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1654,
                settings: {
                    slidesToShow: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 1454,
                settings: {
                    slidesToShow: 3.5,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1.6,
                    dots: true,
                    speed: 5000,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='relative'>
                <h2 data-aos="fade-up" className='text-[#02CDCF] mt-[70px] md:mt-[100px] lg:mt-[160px] font-bold text-[28px] sm:text-[40px] text-center md:text-[30px] lg:text-[40px] mb-4 ff-recharge leading-[50.4px]'>Blockchain & AI technology</h2>
                <p data-aos="fade-up" className='text-lightGrey font-normal text-[14px] max-w-[1057px] mx-auto text-center sm:text-[16px] md:text-[14px] lg:text-[16px] mb-[6px] font-[poppins]'>Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home.Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
                <p data-aos="fade-up" className='text-[18px] sm:text-[20px] ff-recharge text-white leading-[32px] mt-[50px] md:mt-[96px] max-w-[684px] text-center mx-auto'>By building the software on blockchain, Nexai provides the following advantages</p>
                <div className="absolute w-[116px] z-[-1] sm:w-[233px] h-[116px] sm:h-[233px] rounded-[50%] bg-[#02CDCF] top-[172px] sm:top-0 lg:top-[123px] right-[-90px] sm:right-[-160px] xl:right-[-140px] blur-[100px] sm:blur-[150px]"></div>
                <div className="absolute w-[116px] sm:w-[233px] h-[116px] sm:h-[233px] rounded-[50%] bg-[#02CDCF] top-[372px] sm:top-[300px] lg:top-[303px] z-[-1] left-[-90px] sm:left-[-160px] xl:left-[-140px] blur-[100px] sm:blur-[150px]"></div>
                <div className=' overflow-hidden  z-[1] w-full max-[1450px]:max-w-[1290px]  max-[1310px]:max-w-[1140px] max-[1650px]:max-w-[1300px] max-[2000px]:max-w-[1600px] ml-auto' id='market'>
                    <Slider {...settings} className='mt-[60px]'>
                        {blockchainSliderList.map((obj, index) => {
                            return (
                                <div data-aos="zoom-in" className={`bg-[url(./assets/images/bg-img-slider.png)] bg-no-repeat bg-100-100 bg-center h-[330px] sm:h-[367px] w-[367px] ${index % 2 !== 0 ? "sm:mt-[100px]" : ""} `}>
                                    <div className='justify-center items-center flex flex-col w-full h-full'>
                                        <div className='justify-center items-center flex flex-col w-[58px] h-[58px] rounded-full bg-transparent shadow-[inset_0px_4px_16px_0px_#02CDCF]'>
                                            <h3 className='text-white ff-recharge font-bold md:text-[32px] text-[26px]'>{obj.chainTitle}</h3>
                                        </div>
                                        <p className='text-white ff-recharge font-bold leading-[32px] mt-[30px] max-w-[212px] text-center mx-auto text-[20px] max-sm:text-[16px]'>{obj.chainDescription}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Blockchain