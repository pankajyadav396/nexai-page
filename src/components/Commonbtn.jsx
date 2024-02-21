import React from 'react'

const Commonbtn = (props) => {
    return (
        <button className={`${props.className} bg-[#02CDCF] duration-[450ms] btn-hover text-[18px] hover:text-white text-black p-[18px_32px] ff-recharge font-bold border-none rounded-xl`}
        >{props.text}</button>
    )
}

export default Commonbtn