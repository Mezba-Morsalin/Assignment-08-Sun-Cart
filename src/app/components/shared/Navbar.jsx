"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import navLogo from '@/assets/logo.png'

import Link from 'next/link';
import NavLink from './Navlink';
import { RiCloseLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const links = (
        <>
        <li><NavLink href='/'>Home</NavLink></li>
        <li><NavLink href='/products'>Products</NavLink></li>
        <li><NavLink href='/profile'>Profile</NavLink></li>
        </>
    )
    return (
        <div className='shadow-sm py-3'>
            <div className='w-11/12 lg:w-10/12 mx-auto'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        {
                            open ? <RiCloseLine onClick={() => setOpen(!open)} className='lg:hidden cursor-pointer transition duration-300'></RiCloseLine> : <GiHamburgerMenu onClick={() => setOpen(!open)} className='lg:hidden cursor-pointer transition duration-300'></GiHamburgerMenu>
                        }
                        <ul className={`absolute top-22 backdrop-blur-md bg-white/10  space-y-6 p-5 rounded-xl shadow-md hover:shadow-blue-300/30 transition duration-300 ${open ? "block" : "hidden"}`}>
                            {
                                links
                            }
                        </ul>
                        <Link href={'/'}><Image src={navLogo} width={150} height={150} alt='nav-logo'></Image></Link>
                    </div>
                    <ul className='hidden lg:flex gap-5'>
                        {
                            links
                        }
                    </ul>
                    <div>
                        <Link href='/signin'><button className='bg-linear-to-r from-sky-300 to-blue-400 hover:from-sky-400 hover:to-blue-500 text-white px-4 py-2 rounded-full transition duration-300'>Sign in</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;