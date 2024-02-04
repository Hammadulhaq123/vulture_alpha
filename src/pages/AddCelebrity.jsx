import React from 'react'
import CelebMap from '../components/addcelebrity/CelebMap'
import { RiFacebookBoxFill, RiInstagramFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";

const AddCelebrity = () => {


    return (
        <div className='w-full h-auto flex flex-col justify-start items-start gap-3 p-4 lg:p-10'>
            <div className='w-full h-auto flex flex-col gap-1 justify-start items-start'>
                <label className='ml-1 text-gray-300' >Name</label>
                <input className='w-full h-12 bg-[#1c1c1c]  outline-none border-none px-2' type='text' />
            </div>

            <div className='w-full h-auto flex flex-col gap-1 justify-start items-start'>
                <label className='ml-1 text-gray-300' >Industry</label>
                <input className='w-full h-12 bg-[#1c1c1c]  outline-none border-none px-2' type='text' />
            </div>

            <CelebMap />


            <div className='w-full h-auto flex flex-col gap-1 justify-start items-start'>
                <label className='ml-1 text-gray-300' >Description</label>

                <textarea className='w-full h-24 bg-[#1c1c1c]  outline-none border-none p-2 resize-none' >
                </textarea>
            </div>

            <div className='w-full h-auto flex gap-2 justify-start items-center'>
                <span className='text-sm font-medium text-gray-300'>
                    Posted On
                </span>

                <div className='w-auto  text-2xl flex justify-start items-center gap-1'>
                    <RiInstagramFill className='text-[#fff] hover:text-[#c00000] focus-within:text-[#c00000] cursor-pointer'/>
                    <RiFacebookBoxFill className='text-[#fff] hover:text-[#c00000] focus-within:text-[#c00000] cursor-pointer'/>
                    <TiSocialTwitter className='text-[#fff] hover:text-[#c00000] focus-within:text-[#c00000] cursor-pointer'/>

                </div>

            </div>


            <button className='w-full h-12 bg-[#c00000] transition-all duration-150 hover:bg-[#c00000]/[0.9]  outline-none border-none text-white text-md font-medium'>
                Add Celebrity
            </button>

        </div>
    )
}

export default AddCelebrity