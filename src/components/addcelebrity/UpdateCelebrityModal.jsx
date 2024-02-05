import React, { useRef } from 'react'
import CelebMap from './CelebMap';

const UpdateCelebrityModal = ({ isOpen, setIsOpen }) => {

    const updateCelebRed = useRef();

    const toggleModal = (e) => {
        if (!updateCelebRed.current.contains(e.target)) {
            setIsOpen(false)
        }
    }

    return (
        <div onClick={toggleModal} id='notification-modal' className={`fixed top-0 left-0 bg-[#fff]/[0.2] z-[1000] w-screen h-screen ${isOpen ? "flex" : "hidden"} items-center justify-center`}>
            <div ref={updateCelebRed} className='w-96 h-auto flex flex-col gap-2 justify-start items-start bg-[#0e0e10] p-8'>

                {/* <div className='w-full h-auto flex flex-col gap-1 justify-start items-start'>
                    <label className='ml-1 text-gray-300' ></label>
                    <input  className='w-full h-12 bg-[#1c1c1c]  outline-none border-none px-2' type='text' />
                </div> */}


                <CelebMap />

                <button className='w-full h-12 bg-[#c00000] transition-all duration-150 hover:bg-[#c00000]/[0.9]  outline-none border-none text-white text-md font-medium'>
                    Update
                </button>
            </div>

        </div>
    )
}

export default UpdateCelebrityModal