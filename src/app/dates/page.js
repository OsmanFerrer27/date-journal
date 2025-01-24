import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function Dates() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-grow items-center justify-center">
        <div className="bg-white p-16 rounded shadow-md w-full max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-700">Start your dating journal</h1>
          <div className="flex justify-center">
            <button className="bg-indigo-600 text-white py-4 px-8 text-xl rounded-md hover:bg-indigo-700">
              Create Date
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}