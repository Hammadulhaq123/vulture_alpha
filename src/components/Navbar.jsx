import React from 'react'
import { Link } from 'react-router-dom'
import { ShopEase } from '../assets/exports'

const Navbar = () => {
    return (
        <nav className='w-full h-20 text-[#fff]  flex justify-center items-center'>
            <div className=' xs:w-20 lg:w-28 xs:h-14 lg:h-12 font-semibold mr-auto ml-4 flex items-center justify-start'>
                <img src={ShopEase} alt='logo' className='h-16' />
               
            </div>
            {/* <div className='xs:w-[20rem] lg:w-[30rem] flex rounded-full border-[3px] border-[#fff] bg-transparent h-10'>
                <ul className='flex w-full items-center justify-start rounded-full list-none'>
                    <Link to='/discover/' className='w-[25%] h-full duration-150 hover:bg-[#fff] hover:text-[#1d1c20] cursor-pointer flex items-center justify-center rounded-l-full'>Discover</Link>
                    <li className='w-[25%] h-full duration-150 hover:bg-[#fff] hover:text-[#1d1c20] cursor-pointer flex items-center justify-center'>About</li>
                    <li className='w-[25%] h-full duration-150 hover:bg-[#fff] hover:text-[#1d1c20] cursor-pointer flex items-center justify-center'>Services</li>
                    <li className='w-[25%] h-full duration-150 hover:bg-[#fff] hover:text-[#1d1c20] cursor-pointer flex items-center justify-center rounded-r-full'>Features</li>
                </ul>
            </div> */}
            <Link to='/auth/login/' className='xs:w-16 lg:w-28 duration-150 hover:bg-[#fff] hover:text-[#1d1c20] h-10 flex items-center justify-center border-[3px] rounded-full border-[#fff] bg-transparent ml-auto mr-4'>
                Login
            </Link>

        </nav>
    )
}

export default Navbar
