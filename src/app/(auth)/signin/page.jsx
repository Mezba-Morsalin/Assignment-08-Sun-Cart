"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa6';

import "animate.css";
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import toast, { Toaster } from 'react-hot-toast';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    const {email, password} = data;

    const {data: res, error} = await authClient.signIn.email({
    email: email, // required
    password: password, // required
    rememberMe: true,
    callbackURL: "/"
    });

    if(error) {
      toast.error(error.message || "Sign In Failed");
      return
    }
    if (res) {
      toast.success("Sign In Successful")
    }
  };

  const handleGoogle = async () => {
     await authClient.signIn.social({
      provider : "google"
    })
  };
  const handleGithub = async () => {
     await authClient.signIn.social({
      provider : "github"
    })
  };
  return (
    <div className="mt-32 flex items-center justify-center bg-base-100 px-4 animate__animated animate__fadeIn">

      <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col w-full max-w-md fieldset bg-base-200 border border-base-300 rounded-box p-8 shadow-lg animate__animated animate__zoomIn">

        <legend className=" text-3xl font-semibold mb-4 text-center animate__animated animate__fadeInDown">
          Sign In
        </legend>

        <label className="text-lg">Email</label>
        <input type="email" className="input input-bordered w-full mb-2 animate__animated animate__fadeIn" placeholder="Your Email Address" {...register("email", { required: "Email is Required to Login" })}/>
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

       <div className='relative '>
         <label className="text-lg">Password</label>
        <input  type={showPassword ? "text" : "password"}  className=" input input-bordered w-full mb-2 animate__animated animate__fadeIn"  placeholder="Password" {...register("password", { required: "Password is Required" })}/>
        <span className='absolute right-3.5 top-10 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
          {
            showPassword ? <FaEye/> : <FaEyeSlash/>
          }
        </span>
        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
       </div>

        <button type="submit" className="bg-linear-to-r from-blue-400 to-sky-400 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-base px-6 py-2 rounded-lg transition duration-300 cursor-pointer w-full animate__animated animate__pulse"> Sign in
        </button>

        <div className='flex flex-col justify-center items-center space-y-3 mt-5 border-t border-gray-300 animate__animated animate__fadeInUp'>
            <p className='text-base font-bold text-black/70 mt-4'>OR</p>

            <div className='flex gap-3'>
              <button onClick={() => handleGoogle()} className='bg-white w-12 h-12 shadow rounded-full animate__animated animate__zoomIn hover:animate__bounce'>
                <FaGoogle className='text-xl mx-auto'/>
              </button>

              <button onClick={() => handleGithub()} className='bg-white w-12 h-12 shadow rounded-full animate__animated animate__zoomIn hover:animate__bounce'>
                <FaGithub className='text-xl mx-auto'/>
              </button>
            </div>
        </div>

        <div className='mt-5 animate__animated animate__fadeIn'>
            <p className='text-center'>
              Don’t Have An Account ?
              <Link className='bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent font-bold hover:underline' href="/signup">
                Sign Up
              </Link>
            </p>
        </div>
      </form>
      <Toaster></Toaster>
    </div>
  );
};

export default LoginPage;