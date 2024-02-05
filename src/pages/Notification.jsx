import React, { useEffect, useRef, useState } from 'react';
import NotificationTable from '../components/notifications/NotificationTable';
import { FaPlus } from 'react-icons/fa';
import NotificationModal from '../components/notifications/NotificationModal';

const Notification = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div  className="relative w-full flex justify-start items-start gap-2 h-auto p-4 lg:p-6">
            <div className='w-full h-auto flex flex-col gap-2 justify-start items-start'>
                <div className='w-full h-auto flex items-center justify-end'>
                    <button onClick={() => setIsOpen((prev) => !prev)} className='w-auto px-2 h-8 bg-green-500 text-white flex justify-center items-center rounded-md'>
                        <FaPlus className='text-xs mr-2'/> Send Notification
                    </button>
                </div>
                <div className='w-full h-auto'>
                    <NotificationTable />
                </div>
                <NotificationModal isOpen={isOpen} setIsOpen={setIsOpen}  />
            </div>
        </div>
    );
}

export default Notification;
