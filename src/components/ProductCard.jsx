import React from 'react'
import { FaHeart } from 'react-icons/fa'
import Badge from './Badge';

const ProductCard = ({ product }) => {




    return (
        <div className="relative flex cursor-pointer w-full h-auto bg-[#000]  shadow-sm shadow-[#1c1c1c] flex-col gap-1 md:gap-3 p-4 rounded-[22px]">
            <div className='w-full h-32 relative flex items-start justify-between'>
                <img src={product.image} className='like w-full h-full  rounded-[16px]' />
                <button className=' absolute top-1 text-red-100  right-1 rounded-full w-8 h-8 flex items-center justify-center bg-[#1c1c1c]'>
                    <FaHeart className=' text-sm ' />
                </button>
            </div>
            <span className='text-[16px] md:text-2xl text-[#fff] font-semibold'>
                {product.title.slice(0, 10)}
            </span>
            <span className='text-[10px] md:text-xs text-[#f5f5f5]'>
                {product.description.slice(0, 50)}...
            </span>

            <div className='w-full flex gap-1'>

                <div className='w-full h-[2px] my-2 flex items-center justify-start rounded-xl bg-gray-400'>
                    <span className='rating bg-[#0866ff] h-[2px] w-[70%] rounded-xl'></span>
                </div>
                <span className='text-[9px] text-[#f5f5f5] sm:text-xs flex gap-[2px]'>70% <FaHeart className='text-red-500' /></span>
            </div>

            <div className='w-full h-auto flex gap-[2px]'>

                <button className='w-full h-6 md:h-8 outline-none rounded-full bg-[#0866ff] flex items-center justify-center px-2 text-xs md:text-md  text-[#fff]'>
                    Add to Cart
                </button>
            </div>



            {/* Menu Dropdown */}
            {/* <div className='store-menu transition-all -translate-x-full -z-50 duration-100 absolute left-0 top-0 w-1/2 h-full bg-[#0866ff] rounded-xl '>
            </div> */}
        </div>
    )
}

export default ProductCard
