import React from 'react'
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";

const ChatSidebarLink = ({setIsOpen, setIsEditOpen}) => {
    return (
        <div className='w-full bg-[#0e0e10] transition-all duration-150 cursor-pointer flex justify-between items-center gap-2 hover:bg-[#0e0e10]/[0.9] h-16 rounded-lg p-3'>
            <div className='w-auto flex justify-start items-center gap-3'>
                <img src='https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=200&amp;h=200' className='w-8 h-8 rounded-full' />

                <div className='w-auto  flex flex-col gap-[2px] justify-start items-start'>
                    <h2 className='text-white font-medium text-sm'>Warrior's of the galaxy</h2>
                    <div className='w-auto flex gap-1 justify-start items-start'>
                        <span className='text-xs text-[#c00000]'>
                            Created At:
                        </span>
                        <span className='text-xs text-[#fff]'>
                            01/12/2023
                        </span>

                    </div>
                </div>
            </div>

            <div className='w-auto flex justify-start items-center gap-[2px]'>

            <button onClick={() => setIsEditOpen(true)} className='w-6 h-6 flex justify-center items-center'>
                <MdEditSquare className='text-xl text-blue-600' />
            </button>

            <button onClick={() => setIsOpen(true)} className='w-6 h-6 flex justify-center items-center'>
                <MdDelete className='text-xl text-red-600' />
            </button>

            </div>

        </div>
    )
}

export default ChatSidebarLink