import React from 'react'
import { TiMessages } from "react-icons/ti";

const ChatFooter = () => {
    return (
        <div class="w-full h-14 absolute bottom-0 left-0  px-4 bg-[#0e0e10] ">
            <div class="relative flex">
                <span class="absolute inset-y-0 flex items-center">
                    <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500  focus:outline-none">
                        <TiMessages />
                    </button>
                </span>
                <input type="text" placeholder="Write your message!" class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-200 placeholder-gray-600 pl-12 bg-[#1c1c1c] rounded-md py-3" />
                <div class="absolute right-0 items-center inset-y-0 flex">

                    <button type="button" class="inline-flex items-center justify-center rounded-full mr-2 h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </button>
                    <button type="button" class="inline-flex items-center justify-center rounded-lg p-3 gap-2 transition duration-500 ease-in-out text-white bg-[#c00000] hover:bg-[#c00000]/[0.8] focus:outline-none">
                        <span class="font-bold hidden sm:flex">Send</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6  transform rotate-90">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatFooter