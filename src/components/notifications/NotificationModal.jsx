import React, { useRef } from 'react'

const NotificationModal = ({isOpen, setIsOpen}) => {

    const notificationRef = useRef();

    const toggleModal = (e) => {
        if(!notificationRef.current.contains(e.target)){
            setIsOpen(false)
        }
    }

  return (
    <div onClick={toggleModal} id='notification-modal' className={`fixed top-0 left-0 bg-[#fff]/[0.2] z-[1000] w-screen h-screen ${isOpen ? "flex": "hidden"} items-center justify-center`}>
        <div ref={notificationRef} className='w-96 h-auto flex flex-col gap-2 justify-start items-start bg-[#0e0e10] p-8'>
            <span className='text-xl font-bold text-white'>Send Notification</span>
            <input className='w-full h-12 bg-[#1c1c1c]  outline-none border-none px-2' type='text' placeholder='Title'/>
            <textarea className='w-full h-48 bg-[#1c1c1c]  outline-none border-none p-2 resize-none' placeholder='Message'>

            </textarea>

            <button className='w-full h-12 bg-[#c00000] transition-all duration-150 hover:bg-[#c00000]/[0.9]  outline-none border-none text-white text-md font-medium'>
                Send
            </button>
        </div>
        
    </div>
  )
}

export default NotificationModal