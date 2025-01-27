import { FaHeart } from "react-icons/fa6";
import Image from 'next/image'

export default function PageHeader() {
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
        <div className="h-full rounded-full">
            <Image src="next.svg"
            width={60} height={40}
            />
        </div>
    </div>
  )
}
 