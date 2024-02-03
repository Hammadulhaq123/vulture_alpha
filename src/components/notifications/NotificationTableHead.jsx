import React from 'react'

const NotificationTableHead = () => {
    return (
        <thead className="text-xs text-white uppercase bg-[#c00000]">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Message
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Time
                </th>
            </tr>
        </thead>
    )
}

export default NotificationTableHead