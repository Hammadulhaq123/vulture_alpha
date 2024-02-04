import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
import DashCelebCard from '../components/dashboard/DashCelebCard';
import CelebSkeleton from '../components/CelebSkeleton';


const CelebsContainer = ({ title, url }) => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState(null)

    const getProducts = async () => {
        try {
            setLoading(true)
            let result = await fetch(url, {
                method: "GET",
            })
            result = await result.json()
            setProducts(result)
            localStorage.setItem("products", JSON.stringify(result))
            setLoading(false);
        }
        catch (err) {
            setLoading(true);
            let cachedResult = localStorage.getItem("stores");
            cachedResult = await JSON.parse(cachedResult);
            setProducts(cachedResult)
            console.log(err)
            setLoading(false);

        }
    }




    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div className='w-full  flex flex-col  h-auto bg-[#000] rounded-2xl py-2 px-2 sm:p-4'>
            <div className='flex px-3 pt-2 justify-between items-center w-full h-auto'>
                < span className='text-xl md:text-3xl font-semibold text-[#fff]' >
                    {title}{" "}<span className='text-[#c00000]'>({products?.length})</span>
                </ span >

                <Link to='/celebrities/' className='w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-[#c00000]'>
                    <MdArrowOutward className='text-xl text-[#ffff]' />
                </Link>
            </div >
            {
                loading ?
                    <CelebSkeleton /> :
                    <Swiper
                        slidesPerView={window.innerWidth < 800 ? 2 : window.innerWidth < 1100 ? 3 : 4}
                        spaceBetween={10}
                        loop={false}

                        modules={[]}

                        className='mySwiper w-full h-auto flex mt-4'>

                        {

                            products &&
                            products.map((product, key) => {
                                return (
                                    <SwiperSlide  className='w-full h-full' key={key}>
                                        <DashCelebCard user={product} />
                                    </SwiperSlide>

                                )
                            })
                        }




                    </Swiper >
            }
        </div >
    )
}

export default CelebsContainer
