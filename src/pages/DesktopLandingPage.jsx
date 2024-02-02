import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'


const DescktopLandingPage = () => {
    return (
        <div className='hidden sm:flex flex-col w-full h-auto py-2 px-16 text-[#0866ff] bg-[#000]'>
            <Navbar />
            <Hero />
            <Stats />
        </div>
    )
}

export default DescktopLandingPage
