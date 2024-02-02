import React from 'react'
import { Link } from 'react-router-dom'

const SideNavLink = ({ title, to }) => {
    return (
        <Link to={to} className='w-full flex items-center justify-start px-4 h-10 border-2 border-b-[#1253d5] transition duration-200 hover:border-[#1253d5] focus-within:border-[#1253d5]'>
            {title}
        </Link>
    )
}
export default SideNavLink
