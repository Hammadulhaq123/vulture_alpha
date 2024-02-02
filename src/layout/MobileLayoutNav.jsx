import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDashboard } from "react-icons/md"
import { FaCartShopping } from 'react-icons/fa6'

const MobileLayoutNav = () => {

    setTimeout(() => {
        document.getElementById('mobileNav').classList.add('hidden')
    }, 5000)

    return (
        <>

        <div id='mobileNav' className="sm:hidden  w-[calc(100%-1rem)] h-12 fixed bottom-2 left-2 bg-[#000] shadow-sm shadow-[#1d1c20] rounded-full  z-[200]">
            <div className="relative grid h-full max-w-lg grid-cols-5 mx-auto">
                <Link to='/dashboard/' data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-[#1d1c20] rounded-l-full group">
                    <svg className="w-5 h-5 mb-1 text-gray-500  group-hover:text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    <span className="sr-only">Home</span>
                </Link>
                <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ">
                    Home
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <Link to="/dashboard/" data-tooltip-target="tooltip-dashboard" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-[#1d1c20] group">
                    <MdOutlineDashboard className='text-2xl text-gray-500' />
                    <span className="sr-only">Dashboard</span>
                </Link>
                <div id="tooltip-dashboard" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ">
                    Wallet
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div className="flex items-center justify-center">
                    <button data-tooltip-target="tooltip-new" type="button" className=" inline-flex items-center justify-center w-8 h-8 font-medium bg-[#0866ff] rounded-xl hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none ">
                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
                        <span className="sr-only">New item</span>
                    </button>
                </div>
                <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ">
                    Create new item
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-[#1d1c20] group">
                    <FaCartShopping className='text-2xl text-gray-500' />
                    <span className="sr-only">Settings</span>
                </button>
                <div id="tooltip-settings" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ">
                    Settings
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center px-5  hover:bg-[#1d1c20] rounded-r-full group">
                    <svg className="w-5 h-5 mb-1 text-gray-500  group-hover:text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <span className="sr-only">Profile</span>
                </button>
                <div id="tooltip-profile" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ">
                    Profile
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
        </div>
        </>

    )
}

export default MobileLayoutNav
