import React, { useRef } from 'react'

const DeleteCelebModal = ({ isOpen, setIsOpen }) => {

    const deleteCelebRef = useRef();

    const toggleModal = (e) => {
        if (!deleteCelebRef.current.contains(e.target)) {
            setIsOpen(false)
        }
    }
    return (

        <div onClick={toggleModal} id='notification-modal' className={`fixed top-0 left-0 bg-[#fff]/[0.2] z-[1000] w-screen h-screen ${isOpen ? "flex" : "hidden"} items-center justify-center`}>
            <div ref={deleteCelebRef} className='w-96 h-auto flex flex-col gap-6 justify-start items-start bg-[#0e0e10] p-8'>
                <span className='text-2xl font-bold text-white'>Are you sure want to delete this celebrity?</span>
                <div className='w-full flex items-center justify-end gap-2'>
                    <button className='w-24 h-10 rounded-full bg-[#c00000] hover:opacity-80 flex items-center justify-center text-white text-sm font-medium'>
                        Yes
                    </button>
                    <button onClick={() => setIsOpen(false)} className='w-24 h-10 rounded-full bg-transparent border-2 hover:opacity-65 border-[#c00000] flex items-center justify-center text-[#c00000] text-sm font-medium'>
                        No
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteCelebModal