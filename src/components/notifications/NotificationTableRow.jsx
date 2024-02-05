import React from 'react'

const NotificationTableRow = () => {
    return (
        <tr className="bg-[#1c1c1c] border-b border-gray-700">
            <th scope="row" className="px-6 py-2 font-medium text-white whitespace-nowrap ">
                Notification
            </th>
            <td className="px-6 py-2">
                This is the message of the notification you want to convey.
            </td>
            <td className="px-6 py-2">
                01/02/2024
            </td>
            <td className="px-6 py-2">
                03:00 PM
            </td>
        </tr>
    )
}

export default NotificationTableRow