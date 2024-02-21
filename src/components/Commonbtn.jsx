import React from 'react'

const Commonbtn = (props) => {
    return (
        <button className='bg-[#02CDCF] duration-300 hover:bg-[#040404] hover:border-[white] btn-hover hover:border-[2px] text-black p-[18px_32px] ff-recharge font-bold border-none rounded-xl hover:text-white
        '>{props.text}</button>
    )
}

export default Commonbtn