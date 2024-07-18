"use client"

import Image from "next/image";
import { useState } from 'react';
import Link from 'next/link';
import { FaAlignRight, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { SectionLayout } from "./SectionLayout";

export function Header() {
  const [nav, setNav] = useState<boolean>(false)
  const [dark, setDark] = useState<boolean>(false)

  return (
    <SectionLayout paddingY="py-0" >
      <div className="fixed z-40 top-0 left-0 max-w-screen-2xl">
        <header className="w-screen z-50 fixed px-[7%] py-4 backdrop-blur-lg	 flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <div className="flex gap-1 items-center">
              <div className="w-8 lg:w-9 bg-primary p-1 rounded-full">
                <Image src="logo.svg" alt="Logo" width="64" height="64" className="w-full aspect-square" />
              </div>
              <span className=" font-bold lg:text-xl mix-blend-difference text-text">Mabica</span>
            </div>

            <nav className="font-medium gap-2 hidden lg:flex text-xl text-text2">
              <Link href="#">
                Home
              </Link>
              <Link href="#about">
                About Us
              </Link>
              <Link href="#gallery">
                Gallery
              </Link>
              <Link href="#team">
                Our Team
              </Link>
            </nav>

          </div>

          <div className="flex gap-2">
            <button className="shadow w-full hidden lg:block hover:shadow-md duration-300 bg-primary rounded-full px-4 py-1 font-medium">Start Our Story</button>
            <button className={` rounded-full bg-text text-background p-2`} onClick={() => setDark(!dark)}>
              {dark ? (
                <FaSun />
              ) : (
                <FaMoon />
              )}
            </button>

            <button onClick={() => setNav(!nav)} className="lg:hidden">
              {nav ? (
                <FaTimes />
              ) : (
                <FaAlignRight />
              )}
            </button>


          </div>
        </header>

        {nav && (
          <div className="w-screen flex flex-col px-[7%] justify-between items-center h-screen bg-background pt-36 pb-5">
            <nav className="font-medium  text-center space-y-4 text-xl text-text2">
              <Link href="#">
                Home
              </Link>
              <Link href="#about">
                About Us
              </Link>
              <Link href="#gallery">
                Gallery
              </Link>
              <Link href="#team">
                Our Team
              </Link>
            </nav>
            <button className="shadow w-full hover:shadow-md duration-300 bg-primary rounded-full px-4 py-1 font-medium">Start Our Story</button>
          </div>
        )}

      </div>
    </SectionLayout>
  )
}
