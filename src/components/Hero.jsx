import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowUpRight } from "react-icons/bs"

const Hero = () => {
    return (
        <div className='w-full flex flex-wrap items-center justify-center sm:gap-4 lg:gap-0 lg:h-[32rem]'>
            <div className='sm:w-full lg:w-[60%] sm:text-center sm:my-6 lg:my-0 lg:text-left h-auto flex flex-col gap-8 items-start justify-center'>
                <div className='w-full h-auto relative flex sm:justify-center lg:justify-start'>
                    <div className='w-[80%] h-auto flex flex-col'>
                        <h1 className='w-full lg:text-5xl text-3xl leading-[3.5rem] text-[#c00000] font-bold'>
                            Don't want to <br /> wait in life long <br /> queue's in a Mart?
                        </h1>
                        <p className='text-sm text-gray-300 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus repellendus culpa eaque facere pariatur debitis modi sit rem non provident! Dignissimos hic error eveniet! Aliquam cumque vitae saepe eum autem.</p>
                    </div>

                </div>
                <div className='w-full flex gap-4 items-center sm:justify-center lg:justify-start'>

                    <Link to="/auth/register/" className='w-48 relative h-10 flex items-center justify-start'>
                        <span className='w-36 h-full rounded-full bg-[#c00000] text-[#fff] flex items-center justify-center'>
                            Get Started
                        </span>
                        <span className='absolute top-[45%] left-[8.8rem] w-4 h-1 bg-[#c00000]' />
                        <span className='absolute right-1 top-1 w-8 h-8 flex items-center justify-center rounded-full border-4 border-[#c00000]'>
                            <BsArrowUpRight className='text-[#fff] text-xs font-extrabold' />
                        </span>

                    </Link>
                </div>
            </div>
            <div className='sm:w-full lg:w-[40%] gap-2 h-auto flex  flex-col items-start justify-start '>
                <div className='flex h-[20rem]  items-start justify-start gap-2 w-full'>
                    <div className='w-[55%] h-full flex flex-col gap-2'>
                        <div className='w-full h-[49%] rounded-3xl bg-[#3674f0]'>

                        </div>
                        <div className='w-full h-[49%] rounded-3xl bg-[#5c5a5a]'>

                        </div>
                    </div>
                    <div className='w-[44%] h-full bg-gray-50 rounded-full'>

                    </div>

                </div>
                <div className='bg-[#fbb15b] rounded-3xl w-full h-36'>

                </div>
            </div>
        </div>
    )
}

export default Hero
