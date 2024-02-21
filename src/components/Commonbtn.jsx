import React from 'react'

const Commonbtn = (props) => {
    return (
        <button data-aos='zoom-in' className='bg-[#02CDCF] hover:bg-[#040404] duration-300 hover:border-[white] btn-hover hover:border-bottom-[2px] text-black p-[18px_32px] ff-recharge font-bold border-none rounded-xl hover:text-white
        '>{props.text}</button>
    )
}

export default Commonbtn