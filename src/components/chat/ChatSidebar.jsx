import React, { useState } from 'react'
import {MdClose} from "react-icons/md"
import { ShopEase } from '../../assets/exports'
import { FaPlus } from 'react-icons/fa'
import ChatSidebarLink from './ChatSidebarLink'
import DeleteGroupModal from './DeleteGroupModal'
import CreateGroupModal from './CreateGroupModal'

const ChatSidebar = () => {

    const toggleChatSidebar = () =>{ 
        const sidebar = document.getElementById("chat-sidebar")
        sidebar.classList.toggle("translate-x-96")
    }

    const [isDeleteOpen, setIsDeleteOpen] = useState(false)
    const [isCreateOpen, setIsCreateOpen] = useState(false)

  return (
    <div id='chat-sidebar' className='fixed top-16 right-0 translate-x-96 transition-all flex flex-col items-center justify-start duration-150 w-80 h-[calc(100%-4rem)] bg-[#1c1c1c] shadow-sm shadow-[#c00000] p-2'>
        <button onClick={toggleChatSidebar} className='w-8 h-8 rounded-full bg-[#c00000] flex items-center justify-center absolute top-2 -left-4'>
            <MdClose className='text-lg text-white' />
        </button>

        <div className='h-[calc(100%-2rem)] w-full flex flex-col overflow-y-auto gap-1 justify-start items-start'>
            <ChatSidebarLink setIsOpen={setIsDeleteOpen} />
            <ChatSidebarLink setIsOpen={setIsDeleteOpen} />
            <ChatSidebarLink setIsOpen={setIsDeleteOpen} />
            <ChatSidebarLink setIsOpen={setIsDeleteOpen} />
            <ChatSidebarLink setIsOpen={setIsDeleteOpen} />
            <ChatSidebarLink setIsOpen={setIsDeleteOpen} />
            <ChatSidebarLink setIsOpen={setIsDeleteOpen} />
            <ChatSidebarLink setIsOpen={setIsDeleteOpen} />
            <ChatSidebarLink setIsOpen={setIsDeleteOpen} />
            <ChatSidebarLink setIsOpen={setIsDeleteOpen} />
            <ChatSidebarLink setIsOpen={setIsDeleteOpen} />
        </div>
        
        <button onClick={() => setIsCreateOpen(true)} className='w-[90%] h-8 rounded-md text-white text-sm bg-[#c00000] flex items-center justify-center '>
            <FaPlus className='text-sm mr-2 text-white' />
            Create New
        </button>

        <DeleteGroupModal isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen}/>
        <CreateGroupModal isOpen={isCreateOpen} setIsOpen={setIsCreateOpen}/>
        
    </div>
  )
}

export default ChatSidebar