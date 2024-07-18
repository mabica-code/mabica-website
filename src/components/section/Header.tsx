"use client"

import Image from "next/image";
import { useState } from 'react';
import { FaAlignRight, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { SectionLayout } from "./SectionLayout";

export function Header() {
  const [nav, setNav] = useState<boolean>(false)
  const [dark, setDark] = useState<boolean>(false)

  return (
    <SectionLayout paddingY="py-0" >
      <div className="fixed z-40 top-0 left-0 max-w-screen-2xl">
        <header className="w-screen z-50 fixed px-[7%] py-4 backdrop-blur-lg	 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="w-8">
              <Image src="logo.svg" alt="Logo" width="64" height="64" className="w-full aspect-square" />
            </div>
            <span className="text-text2 font-semibold mix-blend-difference	">Mabica</span>
          </div>

          <div className="flex gap-2">
            <button className={`${nav ? "block" : "hidden"} rounded-full bg-text text-background p-1`} onClick={() => setDark(!dark)}>
              {dark ? (
                <FaSun />
              ) : (
                <FaMoon />
              )}
            </button>

            <button onClick={() => setNav(!nav)}>
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
            <nav className="font-medium text-xl text-text2">
              <ul className="text-center space-y-4">
                <li>Home</li>
                <li>About Us</li>
                <li>Gallery</li>
                <li>Our Team</li>
              </ul>
            </nav>
            <button className="shadow w-full hover:shadow-md duration-300 bg-primary rounded-full px-4 py-1 font-medium">Start Our Story</button>
          </div>
        )}

      </div>
    </SectionLayout>
  )
}
