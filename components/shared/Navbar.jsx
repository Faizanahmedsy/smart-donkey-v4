"use client";

import { navLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import NavButton from "./NavButton";

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky z-50 top-0 inset-x-0 h-16 dark:backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex gap-4 items-center">
              <div className="flex flex-col text-primary">
                <Link href="/" className="font-bold">
                  Smart Donkey
                </Link>
                <div className="text-[10px] font-thin text-muted-foreground">
                  by faizanahmed
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                // <Link
                //   href={link.href}
                //   key={link.id}
                //   className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                // >
                <Link
                  href={link.href}
                  key={link.id}
                  className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden  text-white text-sm rounded-md shadow-2xl group"
                >
                  <NavButton text={link.name} />
                </Link>
              ))}
              {/* <ThemeSwitch /> */}
            </div>
          </div>
          {/* <a className="block md:hidden">MobileLogo</a> */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-black-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-black-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className={`${mobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. */}
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg
                className={`${mobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div
              className={`${
                mobileMenuOpen ? "flex" : "hidden"
              } p-6 bg-black absolute top-14 right-0 mx-4 my-2 min-w-[140px] rounded-xl shadow-lg`}
            >
              <ul>
                {navLinks.map((link) => (
                  <li key={link.id} className="my-2">
                    <Link
                      href={link.href}
                      className="text-white hover:text-gray-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* <ThemeSwitch /> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
