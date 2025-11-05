"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import OnboardingModal from "../onboarding/OnboardingModal";
import { usePathname, useRouter } from "next/navigation";
import { ROUTES } from "@/lib/constants";

const ROUTE: string[] = [ROUTES.ASK_EXPERT, ROUTES.HOME];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const { push } = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  const BG_PRIMARY = ROUTE.includes(pathname)
    ? "bg-gradientClass"
    : "bg-primary";
  const TEXT_SECONDARY =
    pathname === ROUTES.HOME ? "text-primary" : "text-gray-400";

  // ✅ Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      className={`fixed md:top-4 left-0 right-0 z-50 backdrop-blur-md border-b border-white/20 md:mx-33 rounded-md ${BG_PRIMARY}`}
    >
      <div className="w-full flex items-center justify-between px-6 py-3">
        {/* Logo + Desktop Nav */}
        <div className="flex items-center gap-18">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-secondary">✺</span>
            <span
              onClick={() => push("/")}
              className="text-lg md:text-xl font-semibold text-secondary font-prata cursor-pointer"
            >
              XSpace
            </span>
          </div>

          <div className="hidden md:flex items-center gap-16">
            <Link
              href={ROUTES.EXPLORE_IDEA}
              className={`text-secondary hover:${TEXT_SECONDARY} font-lato`}
            >
              Explore Ideas
            </Link>
            <Link
              href={ROUTES.FIND_PROFESSIONALs}
              className={`text-secondary hover:${TEXT_SECONDARY} font-lato`}
            >
              Find Professionals
            </Link>
            <Link
              href={ROUTES.ASK_EXPERT}
              className={`text-secondary hover:${TEXT_SECONDARY} font-lato`}
            >
              Ask Experts
            </Link>
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="rounded-full border border-white px-5 py-1 font-medium text-white hover:bg-white hover:text-primary transition cursor-pointer font-lato"
          >
            Sign Up
          </button>
          <button className="rounded-full bg-primary text-secondary px-5 py-1 font-medium hover:bg-gradientClass transition cursor-pointer font-lato">
            Log In
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            ref={menuRef}
            className="absolute top-full left-0 w-full bg-[#00000059] backdrop-blur-3xl flex flex-col items-center gap-4 py-6 md:hidden animate-fadeIn"
          >
            <Link
              href={ROUTES.EXPLORE_IDEA}
              className="text-white text-lg"
              onClick={() => setIsOpen(false)}
            >
              Explore Ideas
            </Link>
            <Link
              href={ROUTES.FIND_PROFESSIONALs}
              className="text-white text-lg"
              onClick={() => setIsOpen(false)}
            >
              Find Professionals
            </Link>
            <Link
              href={ROUTES.ASK_EXPERT}
              className="text-white text-lg"
              onClick={() => setIsOpen(false)}
            >
              Ask Experts
            </Link>
            <button
              onClick={() => {
                setIsLoggedIn(!isLoggedIn);
                setIsOpen(false);
              }}
              className="rounded-full border border-white px-5 py-2 text-white hover:bg-white hover:text-black transition"
            >
              Sign Up
            </button>
            <button className="rounded-full bg-white text-black px-5 py-2 font-medium">
              Log In
            </button>
          </div>
        )}
      </div>

      <OnboardingModal isOpen={isLoggedIn} setOpen={setIsLoggedIn} />
    </nav>
  );
}
