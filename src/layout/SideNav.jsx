import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axiosInstance from "../../axios.js"
import { ShopEase } from '../assets/exports'
import { HiMenuAlt2 } from 'react-icons/hi'
import { MdOutlineDashboard } from "react-icons/md";
import { LuHome } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { HiUsers } from "react-icons/hi2";
import { MdGroups2 } from "react-icons/md";


const SideNav = () => {
    const navigate = useNavigate()



    const signOut = () => {
        // const response = axiosInstance.post('/auth/token/logout/blacklist/', {
        //     refresh_token: localStorage.getItem("refresh_token"),
        // })
        // localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        // axiosInstance.defaults.headers['Authorization'] = null;
        navigate("/auth/login/");
    }
    

    return (
        <div id="sidebar-main" className='absolute transition-all duration-150 top-0 z-[100] left-0 -translate-x-64 sm:relative sm:translate-x-0 w-64 flex flex-row gap-2 h-full bg-[#000]'>
            <aside className="flex flex-col w-full h-full" aria-label="Sidebar">

                <div className="h-full w-full px-3 py-4 overflow-y-auto ">
                    <Link to="/" className="flex mb-6 w-full justify-center items-center space-x-3 rtl:space-x-reverse">
                        <img src={ShopEase}  alt="Logo" />
                    </Link>
                    <ul className="space-y-2 font-medium">
                        
                        <li>
                            <Link to="/dashboard/" className="flex items-center p-2 text-gray-300 text-sm rounded-lg  group">
                                <MdOutlineDashboard className='text-2xl group-hover:text-[#c00000]' />
                                <span className="ms-3 group-hover:text-[#c00000]  ">Dashboard</span>
                                
                            </Link>
                        </li>

                        <li>
                            <Link to="/users/" className="flex items-center p-2 text-gray-300 text-sm rounded-lg  group">
                                <HiUsers className='text-2xl group-hover:text-[#c00000]' />
                                <span className="ms-3 group-hover:text-[#c00000]  ">Users</span>
                                
                            </Link>
                        </li>

                        <li>
                            <Link to="/celebrities/" className="flex items-center p-2 text-gray-300 text-sm rounded-lg  group">
                                <IoIosStar className='text-2xl group-hover:text-[#c00000]' />
                                <span className="ms-3 group-hover:text-[#c00000]  ">Celebrities</span>
                                
                            </Link>
                        </li>

                        <li>
                            <Link to="/chats/" className="flex items-center p-2 text-gray-300 text-sm rounded-lg  group">
                                <MdGroups2 className='text-2xl group-hover:text-[#c00000]' />
                                <span className="ms-3 group-hover:text-[#c00000]  ">Group Chats</span>
                                
                            </Link>
                        </li>
                        
                        <li>
                            <button type='button' onClick={signOut} className="flex items-center p-2 text-gray-300 text-sm rounded-lg group">

                                <IoIosLogOut className='text-2xl group-hover:text-[#c00000]' />
                                <span className="flex-1 ms-3 whitespace-nowrap group-hover:text-[#c00000]">Signout</span>

                            </button>
                        </li>

                    </ul>
                </div>
            </aside>
            
        </div>
    )
}

export default SideNav
