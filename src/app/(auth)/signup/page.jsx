"use client"
import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa6';

import "animate.css";
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import toast, { Toaster } from 'react-hot-toast';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const handleSignUp = async (data) => {
     const {email, name, image, password} = data;

     const {data : res, error} = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: image,
      callbackURL: "/",
     });
     if (error) {
      toast.error(error.message || "Sign Up Failed");
      return
     }
     if (res) {
      toast.success("Sign Up Successful")
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
        <div className="mt-10 flex items-center justify-center bg-base-100 px-4 animate__animated animate__fadeIn">

      <form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col w-full max-w-md fieldset bg-base-200 border border-base-300 rounded-box p-8 shadow-lg animate__animated animate__zoomIn">

        <legend className=" text-3xl font-semibold mb-4 text-center animate__animated animate__fadeInDown">
          Sign Up
        </legend>

        <label className="text-lg">Username</label>
        <input type="text" {...register("name", { required: "Username Required to Sign Up" })} className="input w-full mb-2 animate__animated animate__fadeIn" placeholder="Your Full Name" />
        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

        <label className="text-lg">Image</label>
        <input type="text" {...register("image", { required: "Image Link Required" })} className="input w-full mb-2 animate__animated animate__fadeIn" placeholder="Your Image Link" />
        {errors.image && <p className='text-red-500'>{errors.image.message}</p>}

        <label className="text-lg">Email</label>
        <input type="email" {...register("email", { required: "Email is Required to Sign Up" })} className="input input-bordered w-full mb-2 animate__animated animate__fadeIn" placeholder="Your Email Address"/>
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

        <button type="submit" className="bg-linear-to-r from-blue-400 to-sky-400 hover:from-sky-400 hover:to-blue-500 text-white px-6 py-2 rounded-lg transition duration-300 cursor-pointer w-full animate__animated animate__pulse font-bold text-base">
          Sign Up
        </button>

        <div className='flex flex-col justify-center items-center space-y-3 mt-5 border-t border-gray-300 animate__animated animate__fadeInUp'>
                    <p className='text-base font-bold text-black/70 mt-4'>OR</p>

                    <div className='flex gap-3'>
                    <button onClick={()=> handleGoogle()} className='bg-white w-12 h-12 shadow rounded-full animate__animated animate__zoomIn hover:animate__bounce'>
                        <FaGoogle className='text-xl mx-auto'></FaGoogle>
                    </button>

                    <button onClick={() => handleGithub()} className='bg-white w-12 h-12 shadow rounded-full animate__animated animate__zoomIn hover:animate__bounce'>
                        <FaGithub className='text-xl mx-auto'></FaGithub>
                    </button>
                    </div>
        </div>
      </form>
      <Toaster></Toaster>
    </div>
    );
};

export default SignUpPage;