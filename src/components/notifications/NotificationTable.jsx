import React from 'react'
import NotificationTableHead from './NotificationTableHead'
import NotificationTableBody from './NotificationTableBody'

const NotificationTable = () => {
    return (

        <div className="w-full relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <NotificationTableHead />
                <NotificationTableBody />
            </table>
        </div>
    )
}

export default NotificationTable