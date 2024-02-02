import React from 'react'
import CelebCard from '../components/CelebCard'

const Celebrities = () => {
  return (
    <div className="relative  w-full flex justify-start items-start gap-2 h-auto p-4 lg:p-10">
        <CelebCard />
        <CelebCard />

    </div>
  )
}

export default Celebrities