import React, { useState, useEffect } from 'react'
import { BsArrowLeftShort } from "react-icons/bs"
import { Baskets, Info, Google, LoginBanner } from '../assets/exports'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../../axios'


const ChangePassword = () => {

    const navigate = useNavigate();

    const submitAndNavigate = () => {
        // Other functions:
        navigate("/auth/login/")
    }


    return (
        <div className='flex'>
            <div className='bg-[#1c1c1c] h-screen hidden lg:flex flex-col justify-center items-center gap-4 lg:w-[60%]'>
                <img src={LoginBanner} alt='banner' className='w-[75%]' />
                {/* <h1 className='text-white text-2xl font-bold'>
                    Login to get started.
                </h1> */}
            </div>
            <div className='bg-[#000] text-[#fff] relative  w-full lg:w-[40%] h-screen flex flex-col items-center justify-center px-6'>
                <Link to="/auth/login/">
                    <BsArrowLeftShort className='absolute top-6 left-4 text-[34px]' />
                </Link>

                <div className='flex w-full h-auto flex-col px-4 justify-start items-start gap-6'>
                    <div className='w-full h-auto flex justify-center items-center'>
                        <img src={Info} className="w-auto h-32 rounded-full" alt='' />
                    </div>
                    <div className='w-full flex flex-col items-center text-center gap-2'>
                        <h1 className='text-3xl font-bold text-[#c00000]'>Enter registered email!</h1>
                        <p className='text-sm text-gray-300 w-[60%]'>We'll sent you a code on the registered email to continue!</p>
                    </div>

                    <form className='w-full flex  flex-col gap-3'>

                        <input type='password' required name='password'
                            placeholder='Password'  className='w-full bg-[#0e0e10] border-2 border-[#c00000]/[0.40] outline-none  h-12 px-3 rounded-full focus-within:border-none focus-within:outline-red-500' />

                        <input type='password' required name='password'
                            placeholder='Re-enter Passworrd'  className='w-full bg-[#0e0e10] border-2 border-[#c00000]/[0.40] outline-none  h-12 px-3 rounded-full focus-within:border-none focus-within:outline-red-500' />
                        <button type='submit'
                            onClick={submitAndNavigate}
                            className='w-full select-none bg-[#c00000] text-white font-bold text-md border-none outline-none h-12 px-3 rounded-full  focus-within:border-blue-400 hover:shadow transition duration-150' >Update</button>

                    </form>


                </div>

                <div className='flex gap-2 fixed bottom-6 left-1/8'>
                    <span className='text-[#f5f5f5]'>
                        Didn't recieved the code?
                    </span>
                    <button disabled className='text-[#c00000] font-bold' >Resend code</button>
                </div>
            </div >
        </div>
    )
}

export default ChangePassword
