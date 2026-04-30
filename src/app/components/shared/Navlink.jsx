"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathName = usePathname();
    const isActive = href === pathName;
    return (
        <Link className={`${isActive ? "bg-linear-to-r from-sky-300 to-blue-400 hover:from-sky-400 hover:to-blue-500 text-white px-4 py-2 rounded-full transition duration-300" : "py-2 px-4 hover:bg-gray-200  hover:rounded-full transition duration-300"}`} href={href}>{children}</Link>
    );
};

export default NavLink;