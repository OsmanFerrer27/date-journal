'use client'; //
import { FaHeart } from "react-icons/fa6";
import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';

export default function PageHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="fixed left-1/3 items-center w-2/3 top-3 flex justify-between">
        <button className="bg-indigo-600 shadow-md text-white py-2 px-4 text-l rounded-md hover:bg-indigo-700">
            + Create Date
        </button>
        <div className="bg-[#8f1d1b] flex rounded-md shadow-md text-center text-white">
            <div className="flex items-center pl-2 justify-between">
                <FaHeart />
                <p className="pl-2 font-bold">D&O Love</p>
            </div>
            <button className="bg-neutral-500 ml-2 border-solid border-2 border-black text-white py-2 px-4 text-l rounded-md hover:bg-neutral-700">
                Change
            </button>
        </div>
        <div className="relative">
            <div 
                className="mr-8 w-16 h-16 rounded-full overflow-hidden border-4 border-indigo-700 cursor-pointer"
                onClick={toggleDropdown}
            >
                <Image 
                    src="profile.svg"
                    width={64} 
                    height={64}
                    className="object-cover object-center"
                />
            </div>
            {isDropdownOpen && (
                <div className="mr-2 absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg z-20">
                    <Link href="/" className="text-white hover:text-gray-300">
                    <button className="w-full text-left px-2 py-2 text-red-600 rounded-md hover:bg-red-100">
                        Log Out
                    </button>
                    </Link>
                </div>
            )}
        </div>
    </div>
  )
}
 