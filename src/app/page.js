import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center rounded-lg p-4 border-4 border-b-indigo-700 bg-white-100 shadow-md">
        <div className="flex items-center">
          <Image src="logo.svg" alt="App Logo" width={50} height={50} />
          <h1 className="ml-2 text-xl font-bold text-indigo-700">Date Journal</h1>
        </div>
        <div className="flex items-center">
          <span className="text-gray-400 mx-4">|</span>
          <Link href="/login" className="text-white hover:text-gray-300">
            <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
              Log In
            </button>
          </Link>
        </div>
      </header>
      <main 
        className="flex-grow flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/bgg-img.jpg')" }}
      >
        <Link href="/signup" className="text-white hover:text-gray-300">
          <button className="bg-indigo-700 text-white py-4 px-8 text-2xl rounded-md hover:bg-indigo-700">
            Start Now
          </button>
        </Link>
      </main>
    </div>
  );
}
