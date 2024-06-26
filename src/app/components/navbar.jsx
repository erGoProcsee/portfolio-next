"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react";

import Image from 'next/image';
import NavLink from "./navLink";

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
];

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        // menu links
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
            <div className="hidden md:flex gap-4">
                {links.map(link => (
                    <NavLink link={link} key={link.title} />
                ))}
            </div>

            {/* logo */}
            <div className="md:hidden lg:flex">
                <Link
                    href="/"
                    className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
                >
                    <span className="text-white mr-1">erin</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
                        go
                    </span>
                </Link>
            </div>

            {/* social links */}
            <div className="flex gap-4">
                <Link href="https://github.com/erGoProcsee">
                    <Image src="/github.png" alt="github icon" width={24} height={24} />
                </Link>
                <Link href="https://github.com/erGoProcsee">
                    <Image src="/linkedin.png" alt="linkedin icon" width={24} height={24} />
                </Link>
            </div>

            {/* responsive menu */}
            <div className="md:hidden">
                {/* menu button */}
                <button className="w-10 h-8 flex flex-col justify-between
                 z-50 relative" onClick={() => setOpen(!open)}>
                    <div className="w-10 h-1 bg-white rounded"></div>
                    <div className="w-10 h-1 bg-white rounded"></div>
                    <div className="w-10 h-1 bg-white rounded"></div>
                </button>
                {/* menu list */}
                {open && (
                    <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-10 text-4xl">
                        {links.map(link => (
                            <Link href={link.url} key={link.title}>
                                {link.title}
                            </Link>
                        ))}
                    </div>
                )}

            </div >
        </div >
    )
}

export default Navbar