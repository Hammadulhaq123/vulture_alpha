import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { RiChatFollowUpFill } from 'react-icons/ri';
import { FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';


const ProductSkeleton = () => {
    const dummy = [1, 2, 3, 4, 5, 6]
    return (

        <Swiper

            slidesPerView={window.innerWidth < 800 ? 2 : window.innerWidth < 1100 ? 3 : 4}
            spaceBetween={10}
            loop={false}


            modules={[]}

            className='mySwiper w-full h-auto flex mt-4'>

            {
                dummy.map((key) => {
                    return (
                        <SwiperSlide key={key} className="relative flex cursor-pointer w-full h-auto bg-[#000]  shadow-sm shadow-[#1c1c1c] flex-col gap-1 md:gap-3 p-4 rounded-[22px]">
                            <div className='relative animate-pulse w-full h-32 bg-[#1c1c1c] rounded-[16px] flex items-start justify-between'>
                                <button className=' absolute top-1 text-[#1c1c1c]  right-1 rounded-full w-8 h-8 flex items-center justify-center bg-[#000]'>
                                    <FaHeart className=' text-sm ' />
                                </button>
                            </div>
                            <span className='w-[70%] h-3 rounded-full bg-[#1c1c1c] animate-pulse ' />
                            <span className='text-[10px] md:text-xs text-[#1c1c1c] w-[90%] h-2 bg-[#1c1c1c] animate-pulse rounded-full' />
                            <span className='text-[10px] md:text-xs text-[#1c1c1c] w-[90%] h-2 bg-[#1c1c1c] animate-pulse rounded-full' />
                            <span className='text-[10px] md:text-xs text-[#1c1c1c] w-[90%] h-2 bg-[#1c1c1c] animate-pulse rounded-full' />


                            <div className='w-full flex items-center gap-1'>

                                <div className='w-full h-[2px] my-2 flex items-center justify-start rounded-xl bg-[#1c1c1c]'>
                                    <span className='rating bg-[#1c1c1c] h-[2px] w-[70%] rounded-xl animate-pulse'></span>
                                </div>
                                <span className='text-[9px] sm:text-xs text-gray-500 flex gap-[2px]items-center h-full'>70% <FaHeart /></span>
                            </div>

                            <div className='w-full h-auto flex gap-[2px]'>

                                <button className='animate-pulse w-full h-6 md:h-8 outline-none rounded-full bg-[#1c1c1c] flex items-center justify-center px-2 text-xs md:text-md  text-[#fff]'>
                                    Add to Cart
                                </button>
                            </div>



                            {/* Menu Dropdown */}
                            {/* <div className='store-menu transition-all -translate-x-full -z-50 duration-100 absolute left-0 top-0 w-1/2 h-full bg-[#0866ff] rounded-xl '>
            </div> */}
                        </SwiperSlide>
                    )
                })
            }

        </Swiper>
    )
}

export default ProductSkeleton
