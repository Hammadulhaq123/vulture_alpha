import React from 'react'

const DashUserCard = ({user}) => {
    return (
        <div className='w-full h-24 lg:h-28 p-2 md:p-3 flex flex-col justify-center rounded-xl items-start gap-1  bg-[#1c1c1c] border border-[#c00000]'>
            <div className='flex w-auto justify-start items-center gap-2'>
                <h1 className='text-sm lg:text-xl font-bold text-[#c00000]'>
                    Name:
                </h1>
                <h1 className='text-md lg:text-xl font-bold text-[#fff]'>
                    Jane Doe
                </h1>
            </div>
            <div className='flex w-auto justify-start items-center gap-2'>
                <span className='text-[10px] lg:text-sm font-medium text-[#c00000]'>
                    Email: 
                </span>
                <span className='text-[11px] lg:text-sm font-medium text-gray-300'>
                    janedoe@gmail.com
                </span>
            </div>
            <div className='flex w-auto justify-start items-center gap-2'>
                <span className='text-[10px] font-medium text-[#c00000]'>
                    Date:
                </span>
                <span className='text-xs font-medium text-gray-300'>
                    12/02/2024
                </span>
            </div>
        </div>
    )
}

export default DashUserCard