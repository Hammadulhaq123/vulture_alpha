import React, { useState } from 'react'
import CelebCard from '../components/CelebCard'
import UpdateCelebrityModal from '../components/addcelebrity/UpdateCelebrityModal'

const Celebrities = () => {

  const [isUpdateOpen, setIsUpdateOpen] = useState(false);

  return (
    <div className="relative  w-full flex justify-start items-start gap-2 h-auto p-4 lg:p-10">
      <CelebCard setIsOpen={setIsUpdateOpen}/>
      <CelebCard setIsOpen={setIsUpdateOpen}/>

      <UpdateCelebrityModal isOpen={isUpdateOpen} setIsOpen={setIsUpdateOpen} />

    </div>
  )
}

export default Celebrities