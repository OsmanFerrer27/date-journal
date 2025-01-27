import Link from 'next/link';

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">Sign Up</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input type="text" id="email" name="email" className="mt-1 text-gray-700 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input type="password" id="password" name="password" className="mt-1 text-gray-700 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="confirmpassword" className="block text-sm font-medium text-gray-700">Confirm password:</label>
            <input type="password" id="confirmpassword" name="confirmpassword" className="mt-1 text-gray-700 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Select Gender:</label>
            <select id="gender" name="gender" className="mt-1 h-8 text-gray-700 block w-full border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <br />
          <div>
            <input type="submit" value="Sign Up" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700" />
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="mt-2 text-gray-700">Already registered?</p>
          <Link href="/" className="text-indigo-600 hover:text-indigo-800 underline">Log In</Link>
        </div>
      </div>
    </div>
  );
}