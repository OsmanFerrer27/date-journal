import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function Settings() {
    return (
        <div className="flex min-h-screen bg-gray-100">
          <Sidebar />
          <div className="flex flex-grow items-center justify-center">
            <div className="bg-white p-16 rounded shadow-md w-full max-w-2xl mx-auto">
              <h1 className="text-4xl font-bold mb-8 text-center text-gray-700">Settings</h1>
              <div className="flex justify-center">
                <button className="bg-gray-600 text-white py-4 px-8 text-xl rounded-md hover:bg-gray-700">
                  Privacy Settings
                </button>
              </div>
              <br />
              <div className="flex justify-center">
                <Link href="/" className="text-white hover:text-gray-300">
                <button className="bg-red-600 text-white py-4 px-8 text-xl rounded-md hover:bg-indigo-700">
                  Log Out
                </button>
                  </Link> 
                </div>
            </div>
          </div>
        </div>
      );
    }