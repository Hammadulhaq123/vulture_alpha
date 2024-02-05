import React, { useState } from 'react'
import {MdClose} from "react-icons/md"
import { ShopEase } from '../../assets/exports'
import { FaPlus } from 'react-icons/fa'
import ChatSidebarLink from './ChatSidebarLink'
import DeleteGroupModal from './DeleteGroupModal'
import EditGroupModal from './EditGroupModal'

const ChatSidebar = () => {

    const toggleChatSidebar = () =>{ 
        const sidebar = document.getElementById("chat-sidebar")
        sidebar.classList.toggle("translate-x-96")
    }

    const [isDeleteOpen, setIsDeleteOpen] = useState(false)
    const [isEditOpen, setIsEditOpen] = useState(false)


  return (
    <div id='chat-sidebar' className='fixed top-16 right-0 translate-x-96 transition-all flex flex-col items-center justify-start duration-150 w-80 h-[calc(100%-4rem)] bg-[#1c1c1c] shadow-sm shadow-[#c00000] p-2'>
        <button onClick={toggleChatSidebar} className='w-8 h-8 rounded-full bg-[#c00000] flex items-center justify-center absolute top-2 -left-4'>
            <MdClose className='text-lg text-white' />
        </button>



        <div className='h-[calc(100%)] w-full flex flex-col overflow-y-auto gap-1 justify-start items-start'>

        <ChatSidebarLink setIsOpen={setIsDeleteOpen} setIsEditOpen={setIsEditOpen}/>
        <ChatSidebarLink setIsOpen={setIsDeleteOpen} setIsEditOpen={setIsEditOpen}/>
        <ChatSidebarLink setIsOpen={setIsDeleteOpen} setIsEditOpen={setIsEditOpen}/>
        <ChatSidebarLink setIsOpen={setIsDeleteOpen} setIsEditOpen={setIsEditOpen}/>

        </div>
        

        <DeleteGroupModal isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen}/>
        <EditGroupModal isOpen={isEditOpen} setIsOpen={setIsEditOpen}/>
        
    </div>
  )
}

export default ChatSidebar