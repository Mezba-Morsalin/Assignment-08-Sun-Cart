import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">404</h1>
        <p className="mt-4 text-xl text-gray-600">Oops! Page not found</p>
        <p className="mt-2 text-gray-500">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6">
          <Link href="/" className='flex justify-center items-center'>
            <button className="bg-linear-to-r from-blue-400 to-sky-400 hover:from-sky-400 hover:to-blue-500 text-white px-6 py-2 rounded-lg transition duration-300 flex gap-3 items-center cursor-pointer">Go Back Home</button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default NotFoundPage;