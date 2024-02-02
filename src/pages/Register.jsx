import React, { useState, useEffect } from 'react'
import { BsArrowLeftShort } from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { Baskets, Google, RegisterBanner } from '../assets/exports';
import axiosInstance from '../../axios';

const Register = () => {

    const navigate = useNavigate();

    const submitAndNavigate = () => {
        // Other functions:
        navigate("/auth/login/")
    }

    const [image, setImage] = useState(null)

    const handleProfileImg = (e) => {
        e.preventDefault();
        document.getElementById('img-input').click()
    }

    const handleProfileChange = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setImage(reader.result)
            console.log(reader.result)
        }
        reader.onerror = (error) => {
            console.log("Error: ", error)
        }
        const img = document.getElementById('img-holder')
        img.src = URL.createObjectURL(e.target.files[0]);
        img.classList.remove('hidden')
        document.getElementById('dummy-icon').classList.add('hidden')
    }

    

    return (
        <div className='flex'>
            <div className='bg-[#1c1c1c] h-screen hidden lg:flex flex-col justify-center items-center gap-4 lg:w-[60%]'>
                {/* <img src={Baskets} alt='banner' className='w-96 h-96' />
                <h1 className='text-white text-5xl font-bold'>
                    Create an account.
                </h1> */}
                <img src={RegisterBanner} alt='banner' className='w-[75%]' />

            </div>

            <div className='bg-[#000] text-[#fff] relative w-full lg:w-[40%] h-screen flex flex-col items-center justify-center px-6'>
                <Link to="/">
                    <BsArrowLeftShort className='absolute top-6 left-4 text-[34px]' />
                </Link>

                <div className='flex w-full h-auto flex-col px-4 justify-start items-start gap-4'>
                    <div className='w-full flex flex-col items-center text-center gap-1'>
                        <h1 className='text-3xl text-[#c00000] font-bold'>Let's Get Started !</h1>
                        <p className='text-sm text-gray-300'>Create your own account</p>
                    </div>

                    <form  className='w-full flex  flex-col gap-3'>
                        <div className='w-full h-auto flex justify-center items-center'>
                            <button onClick={handleProfileImg} className='w-20 h-20 rounded-full border-2 p-[1px] border-[#414141]'>
                                <IoPersonCircleSharp id='dummy-icon' className='w-full h-full text-[#414141]' />
                                <img alt='' id='img-holder' className='hidden w-full h-full rounded-full' />
                            </button>
                            <input name='profile_img' type="file" onChange={handleProfileChange} id='img-input' className='hidden' />
                        </div>
                        <div className='flex gap-2 text-[#fff]'>
                            <input type='text' autoComplete='off' name='first_name' required 
                                placeholder='First Name' className='w-[49%] bg-[#0e0e10] border-2 border-[#c00000]/[0.5] outline-none  h-12 px-3 rounded-full focus-within:border-none focus-within:outline-red-500' />
                            <input type='text' autoComplete='off' name='last_name' 
                                placeholder='Last Name' className='w-[49%] bg-[#0e0e10] border-2 border-[#c00000]/[0.5] outline-none  h-12 px-3 rounded-full focus-within:border-none focus-within:outline-red-500' />
                        </div>
                        <input type='email' autoComplete='off' name='email' required 
                            placeholder='Email' className='w-full bg-[#0e0e10] border-2 border-[#c00000]/[0.5] outline-none  h-12 px-3 rounded-full focus-within:border-none focus-within:outline-red-500' />
            
                        <input type='password' required  name='password'
                            placeholder='Password' className='w-full bg-[#0e0e10] border-2 border-[#c00000]/[0.5] outline-none  h-12 px-3 rounded-full focus-within:border-none focus-within:outline-red-500' />

                        <button type='submit' onClick={submitAndNavigate}
                            className='w-full bg-[#c00000] select-none text-white font-bold text-md border-none outline-none h-12 px-3 rounded-full  focus-within:border-red-400 hover:opacity-95 transition duration-150' >Register</button>

                    </form>
                    <span className='w-full h-[2px] bg-[#1c1c1c]'></span>
                    

                </div>

                <div className='flex gap-2 fixed bottom-6 left-1/8'>
                    <span className='text-[#f5f5f5]'>
                        Already have an account?
                    </span>
                    <Link className='text-[#c00000] font-bold' to='/auth/login/'>Login</Link>
                </div>
            </div >
        </div>

    )
}

export default Register
