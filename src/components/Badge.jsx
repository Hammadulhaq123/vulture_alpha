import React from 'react'

const Badge = ({ text }) => {
    return (
        <span className={`bg-[#0866ff] text-white w-12 text-[9px] font-medium  flex items-center justify-center rounded-full `}>{text}</span>
    )
}

export default Badge
