"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed md:top-4 left-0 right-0 z-50 backdrop-blur-md bg-gradientClass border-b border-white/20 md:mx-38 rounded-md">
      <div className="w-full  flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-18">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-secondary">✺</span>
            <span className="text-lg md:text-xl font-semibold text-secondary font-prata">
              XSpace
            </span>
          </div>

          <div className="hidden md:flex items-center gap-16 ">
            <Link
              href="#"
              className="text-secondary hover:text-primary font-lato"
            >
              Explore Ideas
            </Link>
            <Link
              href="#"
              className="text-secondary hover:text-primary font-lato"
            >
              Find Professionals
            </Link>
            <Link
              href="#"
              className="text-secondary hover:text-primary font-lato"
            >
              Ask Experts
            </Link>
          </div>
        </div>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-3">
          <button className="rounded-full border border-white px-5 py-1 text-white hover:bg-white hover:text-primary transition cursor-pointer font-lato">
            Sign Up
          </button>
          <button className="rounded-full bg-primary text-secondary px-5 py-1 font-medium hover:bg-gradientClass transition cursor-pointer font-lato">
            Log In
          </button>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          ☰
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-gradientClass backdrop-blur-lg flex flex-col items-center gap-4 py-6 md:hidden">
            <Link href="#" className="text-white text-lg">
              Explore Ideas
            </Link>
            <Link href="#" className="text-white text-lg">
              Find Professionals
            </Link>
            <Link href="#" className="text-white text-lg">
              Ask Experts
            </Link>
            <button className="rounded-full border border-white px-5 py-2 text-white hover:bg-white hover:text-black transition">
              Sign Up
            </button>
            <button className="rounded-full bg-white text-black px-5 py-2 font-medium">
              Log In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
