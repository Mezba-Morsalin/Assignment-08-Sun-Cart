import Link from 'next/link';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa6';

import "animate.css";

const LoginPage = () => {
  return (
    <div className="mt-32 flex items-center justify-center bg-base-100 px-4 animate__animated animate__fadeIn">

      <form className="flex flex-col w-full max-w-md fieldset bg-base-200 border border-base-300 rounded-box p-8 shadow-lg animate__animated animate__zoomIn">

        <legend className=" text-3xl font-semibold mb-4 text-center animate__animated animate__fadeInDown">
          Sign In
        </legend>

        <label className="text-lg">Email</label>
        <input 
          type="email" 
          className="input input-bordered w-full mb-4 animate__animated animate__fadeIn" 
          placeholder="Your Email Address"
        />

        <label className="text-lg">Password</label>
        <input 
          type="password" 
          className="input input-bordered w-full mb-6 animate__animated animate__fadeIn" 
          placeholder="Password"
        />

        <button
          type="submit"
          className="bg-linear-to-r from-blue-400 to-sky-400 hover:from-sky-400 hover:to-blue-500 text-white px-6 py-2 rounded-lg transition duration-300 cursor-pointer w-full animate__animated animate__pulse">
          Sign in
        </button>

        <div className='flex flex-col justify-center items-center space-y-3 mt-5 border-t border-gray-300 animate__animated animate__fadeInUp'>
            <p className='text-base font-bold text-black/70 mt-4'>OR</p>

            <div className='flex gap-3'>
              <button className='bg-white w-12 h-12 shadow rounded-full animate__animated animate__zoomIn hover:animate__bounce'>
                <FaGoogle className='text-xl mx-auto'/>
              </button>

              <button className='bg-white w-12 h-12 shadow rounded-full animate__animated animate__zoomIn hover:animate__bounce'>
                <FaGithub className='text-xl mx-auto'/>
              </button>
            </div>
        </div>

        <div className='mt-5 animate__animated animate__fadeIn'>
            <p className='text-center'>
              Don’t Have An Account ?{" "}
              <Link 
                className='bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent font-bold hover:underline' 
                href="/signup"
              >
                Sign Up
              </Link>
            </p>
        </div>

      </form>
    </div>
  );
};

export default LoginPage;