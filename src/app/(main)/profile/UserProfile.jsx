"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import "animate.css";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const UserProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
      image: user?.image ?? "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      await authClient.updateUser({
        name: data.name,
        image: data.image,
      });

      if (data.email !== user?.email) {
        await authClient.changeEmail({
          newEmail: data.email,
          password: data.password || "",
        });
      }

      if (data.password) {
        await authClient.changePassword({
          newPassword: data.password,
        });
      }

      toast.success("Profile updated!");
      setEditMode(false);
      reset(data);
    } catch (err) {
      console.log(err);
      toast.error("Update failed!");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <p className="text-center mt-10 animate__animated animate__fadeIn">
        <span className="loading loading-bars loading-xl"></span>
      </p>
    );
  }

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto mt-12 animate__animated animate__fadeInUp">
      <div className="flex flex-col items-center space-y-6 shadow rounded-2xl py-10 animate__animated animate__zoomIn">

        <h2 className="text-3xl font-bold bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
          User Information
        </h2>

        <Image src={user.image || "/default.png"} alt="user" width={180} height={180} className="rounded-full"/>

        {!editMode ? (
          <>
            <div className="text-center space-y-1">
              <p><span className="font-bold">Name:</span> {user.name}</p>
              <p><span className="font-bold">Email:</span> {user.email}</p>
            </div>

            <button
              onClick={() => { setEditMode(true);
                reset({
                  name: user.name ?? "",
                  email: user.email ?? "",
                  image: user.image ?? "",
                  password: "",
                });
              }}
              className="bg-linear-to-r from-blue-400 to-sky-400 text-white px-6 py-2 rounded-lg">
              Update Info
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="w-80 space-y-3">
            <input {...register("name")} className="input input-bordered w-full" placeholder="Name"/>

            <input {...register("image")} className="input input-bordered w-full" placeholder="Image URL"/>
            <input {...register("email")} className="input input-bordered w-full" placeholder="Email"/>

            <div className="relative">
            <input type={showPassword ? "text" : "password"}  {...register("password")} className="input input-bordered w-full" placeholder="New Password"/>
              <span className='absolute right-3.5 top-3 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                              {
                                showPassword ? <FaEye/> : <FaEyeSlash/>
                              }
                            </span>
            </div>

            <div className="flex gap-2">
              <button type="submit" className="bg-linear-to-r from-blue-400 to-sky-400 text-white px-6 py-2 rounded-lg" disabled={loading}>
                {loading ? "Saving..." : "Save"}
              </button>

              <button type="button" onClick={() => setEditMode(false)} className="bg-linear-to-r from-blue-400 to-sky-400 text-white px-6 py-2 rounded-lg">
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserProfile;