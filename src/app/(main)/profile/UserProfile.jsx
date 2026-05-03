"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

import "animate.css";

const UserProfile = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [image, setImage] = useState(user?.image ?? "");
  const [password, setPassword] = useState("");

  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authClient.updateUser({
        name,
        image,
      });

      if (email !== user?.email) {
        await authClient.changeEmail({
          newEmail: email,
          password: password || "",
        });
      }

      if (password) {
        await authClient.changePassword({
          newPassword: password,
        });
      }

      toast.success("Profile updated!");
      setEditMode(false);
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
        Loading...
      </p>
    );
  }

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto mt-12 animate__animated animate__fadeInUp">

      <div className="flex flex-col items-center space-y-6 shadow rounded-2xl py-10 animate__animated animate__zoomIn">

        <h2 className="text-3xl font-bold bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent animate__animated animate__fadeInDown">
          User Information
        </h2>

        <Image
          src={user.image || "/default.png"}
          alt="user"
          width={180}
          height={180}
          className="rounded-full animate__animated animate__zoomIn"
        />

        {!editMode ? (
          <>
            <div className="text-center space-y-1 animate__animated animate__fadeIn">
              <p><span className="font-bold">Name:</span> {user.name}</p>
              <p><span className="font-bold">Email:</span> {user.email}</p>
            </div>

            <button
              onClick={() => setEditMode(true)}
              className="bg-linear-to-r from-blue-400 to-sky-400 hover:from-sky-400 hover:to-blue-500 text-white px-6 py-2 font-bold rounded-lg transition duration-300 cursor-pointer animate__animated animate__pulse"
            >
              Update Info
            </button>
          </>
        ) : (
          <form onSubmit={handleUpdate} className="w-80 space-y-3 animate__animated animate__fadeInUp">

            <input
              className="input input-bordered w-full animate__animated animate__fadeIn"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />

            <input
              className="input input-bordered w-full animate__animated animate__fadeIn"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image URL"
            />

            <input
              className="input input-bordered w-full animate__animated animate__fadeIn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />

            <input
              type="password"
              className="input input-bordered w-full animate__animated animate__fadeIn"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
            />

            <div className="flex justify-center gap-2">

              <button
                type="submit"
                className="bg-linear-to-r from-blue-400 to-sky-400 hover:from-sky-400 hover:to-blue-500 text-white px-6 py-2 font-bold rounded-lg transition duration-300 cursor-pointer animate__animated animate__pulse"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>

              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="bg-linear-to-r from-blue-400 to-sky-400 hover:from-sky-400 hover:to-blue-500 text-white px-6 py-2 font-bold rounded-lg transition duration-300 cursor-pointer animate__animated animate__fadeIn"
              >
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