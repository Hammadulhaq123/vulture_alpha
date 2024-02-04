import React, { useState } from 'react'
import SideNav from './SideNav'
import LayoutNav from './LayoutNav'

const Layout = ({ page, title }) => {


    return (
        <div className='w-full h-screen bg-[#0e0e10] flex flex-col'>
            <div className='w-full  h-full flex  relative'>
                <SideNav />
                <div  className='w-full h-full relative  overflow-y-auto '>
                    <LayoutNav title={title} />
                    {page && page}
                </div>
            </div>
        </div>
    )
}

export default Layout
