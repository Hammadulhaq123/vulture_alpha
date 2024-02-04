import React from 'react'
import { Link, } from "react-router-dom"
import { FaPlus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RiMenu4Line } from "react-icons/ri";

const LayoutNav = ({ title }) => {

    const toggleSidebar = () => {
        const sidebar = document.getElementById("sidebar-main")
        sidebar.classList.toggle("-translate-x-64");
        sidebar.classList.toggle("translate-x-0");
    }


    return (


        <nav className=" sticky top-0 z-50 flex bg-[#000] flex-col gap-1 w-full h-16  px-6">
            <div className="w-full h-full  flex  items-center justify-between relative mx-auto">



                <span className="text-xl md:text-2xl text-[#fff] font-bold whitespace-nowrap">{title}</span>

                <div className="flex items-center gap-2 ">
                    <Link to="/add-celebrity" className='group transition-all duration-150 w-auto px-2 h-8 rounded-lg flex items-center justify-center text-xs md:text-sm text-white focus-within:ring-2 focus-within:ring-red-500 bg-[#c00000]'>
                        <FaPlus className='group-hover:mr-1 '/>
                        <span className='text-xs md:text-sm transition-all duration-150 group-hover:block hidden'>
                            Add Celebrity
                        </span>
                    </Link>

                    <Link to='#' className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="user photo" />
                    </Link>

                    <button className='md:hidden text-2xl text-gray-300' onClick={toggleSidebar}>
                        <RiMenu4Line />
                    </button>


                </div>

            </div>

        </nav>

    )
}

export default LayoutNav
