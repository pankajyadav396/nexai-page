import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { threeSlider } from './common/Helper';

const Threesliders = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'Linear',
        slidesToShow: 4.2,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1454,
                settings: {
                    slidesToShow: 4,
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
                breakpoint: 680,
                settings: {
                    slidesToShow: 1.6,
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
            <h2 data-aos="fade-up" className='text-[#02CDCF] lg:mt-[150px] md:mt-[100px] mt-[80px] xl:mt-[200px] font-bold text-[28px] text-center sm:text-[40px] mb-4 ff-recharge leading-[50.4px]' id='about'>NexAi does all this. And more.</h2>
            <p data-aos="fade-up" className='text-lightGrey font-normal md:mb-[90px] sm:mb-[70px] mb-[50px] text-[14px] max-w-[957px] mx-auto text-center sm:text-[16px] md:text-[14px] lg:text-[16px] font-[poppins]'>Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
            <Slider {...settings}>
                {threeSlider.map((obj, index) => {
                    return (<div data-aos="zoom-in" className='bg-[url(./assets/images/webp/bg-threeslider.webp)] flex flex-col items-center justify-center bg-no-repeat bg-100-100 bg-center h-[170px] w-[300px] sm:h-[220px] sm:w-[340px]'>
                        <div className='justify-center items-center flex flex-col w-full h-full'>
                            <p className='text-white ff-recharge font-bold leading-[32px] max-w-[212px] text-center mx-auto text-[16px] sm:text-[20px]'>{obj.slideTitle}</p>
                        </div>
                    </div>)
                })}
            </Slider>
            <Slider rtl {...settings} className='mt-[10px]'>
                {threeSlider.map((obj, index) => {
                    return (<div data-aos="zoom-in" className='bg-[url(./assets/images/webp/bg-threeslider.webp)] flex flex-col items-center justify-center bg-no-repeat bg-100-100 bg-center h-[170px] w-[300px] sm:h-[220px] sm:w-[340px]'>
                        <div className='justify-center items-center flex flex-col w-full h-full'>
                            <p className='text-white ff-recharge font-bold leading-[32px] max-w-[212px] text-center mx-auto text-[16px] sm:text-[20px]'>{obj.slideTitle}</p>
                        </div>
                    </div>)
                })}
            </Slider>
            <Slider {...settings} className='mt-[10px]'>
                {threeSlider.map((obj, index) => {
                    return (<div data-aos="zoom-in" className='bg-[url(./assets/images/webp/bg-threeslider.webp)] flex flex-col items-center justify-center bg-no-repeat bg-100-100 bg-center h-[170px] w-[300px] sm:h-[220px] sm:w-[340px]'>
                        <div className='justify-center items-center flex flex-col w-full h-full'>
                            <p className='text-white ff-recharge font-bold leading-[32px] max-w-[212px] text-center mx-auto text-[16px] sm:text-[20px]'>{obj.slideTitle}</p>
                        </div>
                    </div>)
                })}
            </Slider>
        </>)
}

export default Threesliders