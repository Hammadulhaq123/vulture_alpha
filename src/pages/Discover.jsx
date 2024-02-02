import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import UserContainer from '../layout/UserContainer';
import CelebsContainer from '../layout/CelebsContainer';
import Graph from '../components/dashboard/Graph';

const Discover = () => {

    const [mode, setMode] = useState('online');


    return (
        <div className='relative w-full  sm:p-6 h-auto flex flex-col gap-4'>
            {
                mode === 'offline' &&
                <div className="w-full h-auto md:h-11 py-2 rounded-xl cursor-pointer text-white bg-blue-500 flex items-center justify-center px-4">
                    <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path>
                    </svg>
                    <span className="text-md mr-auto">You're in offline mode. Connect Internet!</span>
                </div>
            }

            <div className='w-full h-56 p-4 bg-[#000] rounded-2xl'>
                <Graph />
            </div>

            <div className='relative  w-full p-2 sm:p-0  h-auto flex flex-col gap-4'>
                <UserContainer title="Users" url="https://fakestoreapi.com/products" />
                <CelebsContainer title="Celebrities" url="https://fakestoreapi.com/products" />

            </div>
        </div>

    )

}

export default Discover