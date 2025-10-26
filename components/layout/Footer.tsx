"use client";
import { Mail, Phone, MapPin, Instagram, Linkedin, X } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Column */}
          <div>
            <div className="flex items-center  mb-6 font-prata">
              <div className="text-2xl ✺rounded-full flex items-center justify-center text-secondary font-bold">
                ✺
              </div>
              <h2 className="text-2xl font-semibold text-secondary">XSpace</h2>
            </div>

            <ul className="space-y-4 text-sm font-lato">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-gray-400" />
                <span>123 Design Street, Creativity City, Country</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gray-400" />
                <span>+123-456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gray-400" />
                <span>hello@xspace.com</span>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center md:items-end gap-6 font-lato">
            {/* Links above icons */}
            <div className="flex flex-col md:flex-row text-white gap-4 md:gap-10 text-center md:text-right">
              <Link href="#" className="hover:text-gray-400 transition-colors">
                Explore Ideas
              </Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">
                Find Professionals
              </Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">
                Ask Experts
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: X, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:bg-gray-700 hover:border-gray-400 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 mb-4"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4 md:gap-0  font-lato">
          <p>© 2025 XSpace Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-200 transition-colors">
              Terms & Condition
            </Link>
            <Link href="#" className="hover:text-gray-200 transition-colors">
              Privacy & Policy
            </Link>
            <Link href="#" className="hover:text-gray-200 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
