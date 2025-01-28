//Sidebar.js
'use client'; //
import React, { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div
        className={`bg-indigo-800 text-white 
                    fixed h-screen transition-all 
                    duration-300 z-10 
                    ${isOpen ? 'w-64' : 'w-0 overflow-hidden'
          }`}>
        <div className="flex flex-col justify-between h-full py-8">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/dates" className="text-white hover:text-gray-300">
              Dates
            </Link>
            <hr className="border-gray-600 w-full" />
            <Link href="/relationships" className="text-white hover:text-gray-300">
              Relationships
            </Link>
            <hr className="border-gray-600 w-full" />
            <Link href="/albums" className="text-white hover:text-gray-300">
              Albums
            </Link>
            <hr className="border-gray-600 w-full" />
            <Link href="/settings" className="text-white hover:text-gray-300">
              Settings
            </Link>
          </div>
        </div>
      </div>
      <div className={`flex-1 p-4 
                        ${isOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="ml-auto">
          <button
            className="bg-indigo-600 hover:bg-indigo-700 
                       text-white font-bold py-2 px-4 rounded"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
