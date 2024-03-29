import React, { useState } from 'react'
import MessageSend from '../components/chat/MessageSend'
import MessageRecieved from '../components/chat/MessageRecieved'
import { TiMessages } from "react-icons/ti";
import ChatFooter from '../components/chat/ChatFooter';
import CreateGroupModal from "../components/chat/CreateGroupModal"

import ChatHeader from '../components/chat/ChatHeader';
import ChatSidebar from '../components/chat/ChatSidebar';

const Chats = () => {

    const [isCreateOpen, setIsCreateOpen] = useState(false)

    return (
        <>
            <div class="flex-1 w-full justify-between flex flex-col h-[91.5vh] relative">
                <ChatHeader setIsCreateOpen={setIsCreateOpen}/>
                <div id="messages" class="absolute w-full top-16 left-0 flex flex-col space-y-4 h-[calc(100%-8rem)]  p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">

                    <MessageSend />
                    <MessageRecieved />
                    <MessageSend />
                    <MessageRecieved />
                    <MessageSend />
                    <MessageRecieved />
                    <MessageSend />
                    <MessageRecieved />

                </div>
                <ChatFooter />
                <ChatSidebar />
            </div>
            <CreateGroupModal isOpen={isCreateOpen} setIsOpen={setIsCreateOpen} />



            <script>
                const el = document.getElementById('messages')
                el.scrollTop = el.scrollHeight
            </script>
        </>
    )
}

export default Chats