import React from 'react'
import UserCard from '../components/UserCard'

const Users = () => {
    return (
        <div className="relative  w-full flex justify-start flex-wrap items-start gap-2 h-auto p-4 lg:p-10">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />

        </div>
    )
}

export default Users