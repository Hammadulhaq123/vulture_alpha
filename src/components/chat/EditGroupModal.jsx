import React, { useRef } from 'react'
import { FaCamera } from 'react-icons/fa';

const EditGroupModal = ({isOpen, setIsOpen}) => {

    const editGroupRef = useRef();

    const toggleModal = (e) => {
        if(!editGroupRef.current.contains(e.target)){
            setIsOpen(false)
        }
    }

  return (
    <div onClick={toggleModal} id='create-group-modal' className={`fixed top-0 left-0 bg-[#fff]/[0.2] z-[1000] w-screen h-screen ${isOpen ? "flex": "hidden"} items-center justify-center`}>
        <div ref={editGroupRef} className='w-96 h-auto flex flex-col gap-4 justify-start items-start bg-[#0e0e10] p-8'>
            <span className='text-xl font-bold text-white'>Edit Group</span>
            <div className='w-full flex items-center justify-center'>
            <button className='w-full h-16  border border-gray-400 flex items-center justify-center'>
                <FaCamera className='text-gray-400'/>
            </button>
            <input type='file' accept='image' className='hidden' id='group-img'/>
            </div>
            <input className='w-full h-12 bg-[#1c1c1c]  outline-none border-none px-2' type='text' placeholder='Group Name'/>
            <textarea className='w-full h-24 resize-none bg-[#1c1c1c]  outline-none border-none p-2' placeholder='Description'/>
            <button className='w-full h-12 bg-[#c00000] transition-all duration-150 hover:bg-[#c00000]/[0.9]  outline-none border-none text-white text-md font-medium'>
                Update
            </button>
        </div>
        
    </div>
  )
}

export default EditGroupModal