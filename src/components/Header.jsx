import React, { useState } from 'react'
import Commonbtn from './Commonbtn'
function Header() {
  const [open, setOpen] = useState(false);
  {
    open
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div
        id="home"
        className="min-h-screen min-[1200px]:h-[810px] min-[1200px]:min-h-0 w-full bg-headerbg bg-center bg-no-repeat bg-cover min-[1441px]:bg-contain relative flex flex-col"
      >
        {/* small screen navpage */}
        <ul
          className={`flex gap-5 w-full h-full fixed justify-center items-center flex-col bg-[#040404] left-[-100%] sm:hidden z-[7] duration-300 ${open == false ? "" : "left-[0%]"
            }`}
        >
          <li>
            <a
              className="font-poppins font-normal text-base text-white relative after:absolute after:h-[1px] after:w-0 hover:after:w-full after:left-[0] hover:after:right-[0%] after:duration-300 after:bg-[#02cdcf] after:bottom-[-3px]"
              href="#home"
              onClick={() => setOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-poppins font-normal text-base text-white relative after:absolute after:h-[1px] after:w-0 hover:after:w-full after:left-[0] hover:after:right-[0%] after:duration-300 after:bg-[#02cdcf] after:bottom-[-3px]"
              href="#market"
              onClick={() => setOpen(false)}
            >
              Marketplace
            </a>
          </li>
          <li>
            <a
              className="font-poppins font-normal text-base text-white relative after:absolute after:h-[1px] after:w-0 hover:after:w-full after:left-[0] hover:after:right-[0%] after:duration-300 after:bg-[#02cdcf] after:bottom-[-3px]"
              href="#about"
              onClick={() => setOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="font-poppins font-normal text-base text-white relative after:absolute after:h-[1px] after:w-0 hover:after:w-full after:left-[0] hover:after:right-[0%] after:duration-300 after:bg-[#02cdcf] after:bottom-[-3px]"
              href="#nexchat"
              onClick={() => setOpen(false)}
            >
              NexChat
            </a>
          </li>
          <li>
            <a
              className="font-poppins font-normal text-base text-white relative after:absolute after:h-[1px] after:w-0 hover:after:w-full after:left-[0] hover:after:right-[0%] after:duration-300 after:bg-[#02cdcf] after:bottom-[-3px]"
              href="#tokens"
              onClick={() => setOpen(false)}
            >
              Tokens
            </a>
          </li>
        </ul>
        {/* navbar */}
        <nav
          className="max-w-[1224px] w-full mx-auto px-3 h-[110px] pt-[10px] flex justify-between items-center"
        >
          <a
            href="#home"
            className="w-[50px] sm:hidden z-10"
            onClick={() => setOpen(false)}
          >
          </a>
          <div className="w-full justify-between items-center hidden sm:flex">
            <ul className="max-w-[801px] w-full justify-start min-[1200px]:justify-end flex">
              <li>
                <ul className="flex gap-5">
                  <li>
                    <a
                      className="font-poppins font-normal text-base text-white relative after:absolute after:h-[1px] after:w-0 hover:after:w-full after:left-[0] hover:after:right-[0%] after:duration-300 after:bg-[#02cdcf] after:bottom-[-3px]"
                      href="#home"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-poppins font-normal text-base text-white relative after:absolute after:h-[1px] after:w-0 hover:after:w-full after:left-[0] hover:after:right-[0%] after:duration-300 after:bg-[#02cdcf] after:bottom-[-3px]"
                      href="#market"
                    >
                      Marketplace
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-poppins font-normal text-base text-white relative after:absolute after:h-[1px] after:w-0 hover:after:w-full after:left-[0] hover:after:right-[0%] after:duration-300 after:bg-[#02cdcf] after:bottom-[-3px]"
                      href="#about"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-poppins font-normal text-base text-white relative after:absolute after:h-[1px] after:w-0 hover:after:w-full after:left-[0] hover:after:right-[0%] after:duration-300 after:bg-[#02cdcf] after:bottom-[-3px]"
                      href="#nexchat"
                    >
                      NexChat
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-poppins font-normal text-base text-white relative after:absolute after:h-[1px] after:w-0 hover:after:w-full after:left-[0] hover:after:right-[0%] after:duration-300 after:bg-[#02cdcf] after:bottom-[-3px]"
                      href="#tokens"
                    >
                      Tokens
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <Commonbtn
              className="hover:shadow-[inset_154px_0_0_0_black] shrink-0"
              text="Sign Up"
            />
          </div>
          {/* open/close navbar button */}

          <Commonbtn
            click={() => setOpen(false)}
            className="absolute left-2 sm:hidden hover:shadow-[inset_154px_0_0_0_black] shrink-0"
            text="Sign Up"
          />
          <div
            className={`flex w-[30px] min-[400px]:w-[35px] h-[25px] duration-300 flex-col sm:hidden items-center justify-between cursor-pointer relative z-10`}
            onClick={() => setOpen(!open)}
          >
            <span
              className={`w-full h-[5px] duration-300 bg-[#02CDCF] rounded ${open == false ? "" : "rotate-45 translate-y-[8px]"
                }`}
            ></span>
            <span
              className={`w-full h-[5px] duration-300 bg-[#02CDCF] rounded ${open == false ? "" : "rotate-[135deg] translate-y-[-12px]"
                }`}
            ></span>
            <span
              className={`w-full h-[5px] duration-300 bg-[#02CDCF] rounded ${open == false ? "" : "hidden"
                }`}
            ></span>
          </div>
        </nav>
        {/* hero section */}
        <div className="grow max-w-[1164px] w-full flex flex-col justify-center min-[1200px]:justify-start mx-auto px-3 min-[1200px]:mt-[104px]">
          <div
            className="max-w-[577px] w-full flex flex-col items-center sm:items-start"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="2000"
            data-aos-duration="1000"
          >
            <p className="f-recharge font-bold text-[35px] sm:text-[60px] sm:leading-[75.6px] text-white text-center sm:text-start">
              <span className="text-[#02CDCF]">Nexai</span> is an advanced
              AI-powered home assistant
            </p>
            <p className="mt-4 mb-6 md:mb-[51px] font-poppins font-normal text-base leading-[25.6px] text-[rgba(255,255,255,0.7)] text-center sm:text-start">
              Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla
              odio.
            </p>
            <Commonbtn
              className="hover:shadow-[inset_198px_0_0_0_black]"
              text="Know More"
            />
          </div>
        </div>
        {/* ellipse */}
        <div className="absolute w-[131px] sm:w-[262px] h-[131px] sm:h-[262px] rounded-[50%] bg-[#02CDCF] right-[9%] top-[40%] blur-[180px]"></div>
        <div className="w-[131px] sm:w-[262px] h-[131px] sm:h-[262px] rounded-[50%] bg-[#02CDCF] opacity-30 absolute left-[-2%] top-[15%] blur-[150px]"></div>
      </div>
    </>
  );
}

export default Header;