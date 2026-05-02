"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import navLogo from '@/assets/logo.png'

import Link from 'next/link';
import NavLink from './Navlink';
import { RiCloseLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';

import "animate.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = (
        <>
        <li className="animate__animated animate__fadeInDown"><NavLink href='/'>Home</NavLink></li>
        <li className="animate__animated animate__fadeInDown"><NavLink href='/products'>Products</NavLink></li>
        <li className="animate__animated animate__fadeInDown"><NavLink href='/profile'>Profile</NavLink></li>
        </>
    )

    return (
        <div className='border border-gray-200 py-5 animate__animated animate__fadeInDown'>
            <div className='w-11/12 lg:w-10/12 mx-auto'>

                <div className='flex justify-between items-center'>

                    <div className='flex items-center gap-3'>

                        {
                            open 
                            ? <RiCloseLine 
                                onClick={() => setOpen(!open)} 
                                className='lg:hidden cursor-pointer transition duration-300 animate__animated animate__rotateIn' 
                              />
                            : <GiHamburgerMenu 
                                onClick={() => setOpen(!open)} 
                                className='lg:hidden cursor-pointer transition duration-300 animate__animated animate__rotateIn' 
                              />
                        }

                        <ul className={`lg:hidden absolute top-22 bg-white space-y-6 p-5 rounded-xl shadow-md ${open ? "block animate__animated animate__fadeInDown" : "hidden"}`}>
                            {links}
                        </ul>

                        <Link href={'/'}>
                            <Image 
                                src={navLogo} 
                                width={200} 
                                height={200} 
                                alt='nav-logo'
                                className="animate__animated animate__fadeInLeft"
                            />
                        </Link>

                    </div>

                    <ul className='hidden lg:flex gap-5'>
                        {links}
                    </ul>

                    <div>
                        <Link href='/signin'>
                            <button className='bg-linear-to-r from-blue-400 to-sky-400 hover:from-sky-400 hover:to-blue-500 text-white px-6 py-2 rounded-lg transition duration-300 cursor-pointer animate__animated animate__pulse animate__infinite'>
                                Sign in
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;