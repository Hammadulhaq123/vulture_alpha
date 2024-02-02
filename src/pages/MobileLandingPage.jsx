import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GetStarted, Mobile, Store, QueueMgt, ShopEase } from '../assets/exports'
import { Link, useNavigate } from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { MdArrowOutward, MdOutlineInstallMobile, MdOutlineLogin } from "react-icons/md";
import '../App.css'


const MobileLandingPage = () => {
    const navigate = useNavigate();

    function checkLogin() {
        const token = localStorage.getItem('access_token');
        if (token) {
            return true
        }
        else {
            return false
        }
    }

    useEffect(() => {
        const isLoggedIn = checkLogin();
        if (isLoggedIn) {
            navigate('/discover/');
        }
    }, [])

    return (
        <div className='sm:hidden bg-[#000] text-[#0866ff] w-full h-screen flex flex-col items-center justify-between gap-2 p-4'>
            {/* <span className='text-xs text-white font-medium mt-6'>Version 1.0.0.X</span>
             */}
            <Link to="/" className="flex mt-6 w-full justify-center items-center space-x-3 rtl:space-x-reverse">
                <img src={ShopEase} className="h-24" alt="Logo" />
            </Link>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={false}

                modules={[]}
                className="mySwiper mt-10"
            >
                <SwiperSlide className='textbox  flex w-full justify-start items-center px-6 flex-col gap-6'>
                    <div className='w-96 h-96 bg-[#1d1c20] relative overflow-visible rounded-full'>

                        <img src={QueueMgt} alt="banner" className=' absolute top-0 left-0 w-full h-full drop-shadow-2xl' />
                    </div>
                    <div className='flex flex-col text-center gap-2 pl-2'>
                        <h1 className='text-[34px] font-bold text-[#c00000]'>Tired of Queue's!</h1>
                        <p className='text-[16px] font-normal text-gray-300'>Goto your nearest registered shopping store, and use our app to pay without standing in queue.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='textbox  flex w-full justify-start items-center px-6 flex-col gap-6'>
                    <div className='w-96 h-96 bg-[#1d1c20] relative overflow-visible rounded-full'>
                        <img src={Mobile} alt="banner" className=' absolute top-0 left-0 w-full h-full drop-shadow-2xl' />
                    </div>
                    <div className='flex flex-col text-center gap-2 pl-2'>
                        <h1 className='text-[34px] font-bold text-[#c00000]'>Customize Carts.</h1>
                        <p className='text-[16px] font-normal text-gray-300'>Customize your cart by adding required item's available on the store by scanning barcode yourself.</p>
                    </div>
                </SwiperSlide>


                <SwiperSlide className='textbox flex w-full justify-start items-center px-6 flex-col gap-6'>
                    <div className='w-96 h-96 bg-[#1d1c20] relative overflow-visible rounded-full'>
                        <img src={Store} alt="banner" className=' absolute top-0 left-0 w-full h-full drop-shadow-2xl' />
                    </div>
                    <div className='flex flex-col text-center gap-2 pl-2'>
                        <h1 className='text-[34px] font-bold text-[#c00000]'>Register Store!</h1>
                        <p className='text-[16px] font-normal text-gray-300'>Want to enhance your customer experience, Sign up and register your store.</p>
                    </div>
                </SwiperSlide>


                <SwiperSlide className='textbox flex w-full justify-start items-center px-6 flex-col gap-6'>
                    <div className='w-96 h-96 bg-[#1d1c20] relative overflow-visible rounded-full'>
                        <img src={GetStarted} alt="banner" className=' absolute top-0 left-0 w-full h-full drop-shadow-2xl' />
                    </div>
                    <div className='flex flex-col text-center gap-2 pl-2'>
                        <h1 className='text-[34px] font-bold text-[#c00000]'>Let's Get Started</h1>
                        <p className='text-[16px] font-normal text-gray-300'>Shopping made easy, Using our app you don't have to wait for hours in queue's for payments.</p>
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className='w-full h-auto flex gap-2'>
                    <Link to='/auth/login/' className='w-[49%] px-2 select-none mb-4 h-12 bg-[#fff] text-md font-semibold text-[#c00000] flex justify-start gap-4 items-center rounded-full transition-all duration-150 focus-within:bg-[#c00000]'>
                        <span className='w-8 h-8 flex items-center justify-center rounded-full text-lg text-[#fff] bg-[#c00000]'>
                            <MdOutlineLogin />
                        </span>
                        Login
                    </Link>

                    <Link to='/auth/register/' className='w-[49%] px-2 select-none mb-4 h-12 bg-[#fff] text-md font-semibold text-[#c00000] flex justify-start gap-4 items-center rounded-full transition-all duration-150 focus-within:bg-[#c00000]'>
                        <span className='w-8 h-8 flex items-center justify-center rounded-full text-lg text-[#fff] bg-[#c00000]'>
                            <MdOutlineLogin />
                        </span>
                        Signup
                    </Link>
        
            </div>
        </div>
    )
}

export default MobileLandingPage
