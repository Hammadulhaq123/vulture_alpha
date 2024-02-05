import React, { useState } from 'react'
import CelebCard from '../components/CelebCard'
import UpdateCelebrityModal from '../components/addcelebrity/UpdateCelebrityModal'
import DeleteCelebModal from '../components/addcelebrity/DeleteCelebModal';

const Celebrities = () => {

  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <div className="relative  w-full flex justify-start items-start gap-2 h-auto p-4 lg:p-10">
      <CelebCard setIsOpen={setIsUpdateOpen} setIsDeleteOpen={setIsDeleteOpen}/>
      <CelebCard setIsOpen={setIsUpdateOpen} setIsDeleteOpen={setIsDeleteOpen}/>

      <UpdateCelebrityModal isOpen={isUpdateOpen} setIsOpen={setIsUpdateOpen} />
      <DeleteCelebModal isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen}/>

    </div>
  )
}

export default Celebrities