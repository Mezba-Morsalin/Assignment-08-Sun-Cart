"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';

const UserProfile = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user
    return (
       <div className='w-11/12 lg:w-10/12 mx-auto mt-12'>
         <div className='flex flex-col justify-center items-center space-y-5 shadow rounded-2xl py-10'>
            <h2 className='bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent text-3xl font-bold'>User Information</h2>
            <Image src={user?.image} alt='user-png' width={200} height={200}></Image>
            <div>
                <p><span className='text-lg font-bold'>Name :</span> {user.name}</p>
            <p><span className='text-lg font-bold'>Email :</span> {user.email}</p>
            </div>
        </div>
       </div>
    );
};

export default UserProfile;