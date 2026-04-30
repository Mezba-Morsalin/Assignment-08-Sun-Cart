"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathName = usePathname();
    const isActive = href === pathName;
    return (
        <Link className={`${isActive ? "bg-linear-to-r from-blue-400 to-sky-400 hover:from-sky-400 hover:to-blue-500 text-white px-6 py-2 rounded-lg transition duration-300" : "px-6 py-2 rounded-lg hover:bg-gray-200  hover:rounded-lg transition duration-300"}`} href={href}>{children}</Link>
    );
};

export default NavLink;