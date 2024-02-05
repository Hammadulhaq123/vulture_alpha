import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CelebCard = ({ setIsOpen, setIsDeleteOpen }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev)
    }

    const deleteCeleb = (id) => {
        console.log("deleted", id);
        setIsDeleteOpen(true)
        toggleDropdown()
    }

    return (


        <div className="w-[49%] lg:w-1/4 bg-[#1c1c1c] p-3 border rounded-lg relative shadow border-[#c00000]">
            <div className="flex justify-end ">
                <button onClick={toggleDropdown} id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-200 hover:bg-gray-700  focus:ring-4 focus:outline-none focus:ring-red-400  rounded-lg text-sm p-1.5" type="button">
                    <span className="sr-only">Open dropdown</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                </button>
                <div id="dropdown" className={`z-[800] w-32 ${isDropdownOpen ? "block" : "hidden"} absolute top-12 right-2 text-base list-none bg-gray-600 divide-y divide-gray-100 rounded-lg shadow h-auto `}>
                    <ul className="py-2" aria-labelledby="dropdownButton">
                        <li>
                            <Link to="/edit-celebrity/" className=" w-full h-6 flex items-center justify-center text-sm text-gray-200 hover:bg-gray-700 ">Edit</Link>
                        </li>
                        <li>
                            <button onClick={() => deleteCeleb(1)} className=" w-full h-6 flex items-center justify-center text-sm text-gray-200 hover:bg-gray-700 ">Delete</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <img className="lg:w-24 lg:h-24 w-14 h-14 mb-3 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                <h5 className="mb-1 text-md lg:text-xl font-medium text-gray-200">Bonnie Green</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                <div className="flex mt-4 md:mt-6">
                    <button onClick={() => setIsOpen(true)} className="inline-flex items-center w-full h-10 px-2 text-sm font-medium text-center text-white bg-[#c00000] rounded-lg hover:bg-[#c00000]/[0.9] focus:ring-4 focus:outline-none focus:ring-red-300 ">Update Location</button>

                </div>
            </div>
        </div>

    )
}

export default CelebCard