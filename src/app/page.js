import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">Log In</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
            <input type="text" id="username" name="username" className="mt-1 h-8 text-gray-700 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input type="password" id="password" name="password" className="mt-1 h-8 text-gray-700 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <br />
          <div>
            <input type="submit" value="Login" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700" />
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="mt-2 text-gray-700">Not registered?</p>
          <Link href="/signup" className="text-indigo-600 hover:text-indigo-800 underline">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}