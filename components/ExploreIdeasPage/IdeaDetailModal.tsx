"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IdeaDetailModal({ idea, onClose }: any) {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  // ✅ Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const modal = document.getElementById("idea-modal");
      if (modal && !modal.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      >
        <motion.div
          key="modal"
          id="idea-modal"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="bg-white w-[95%] md:w-4/5 lg:w-3/4 rounded-2xl shadow-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full z-10 cursor-pointer"
          >
            <X size={18} color="black" />
          </button>

          {/* Content Layout */}
          <div className="flex flex-col md:flex-row">
            {/* Left: Image Carousel */}
            <div className="relative w-full md:w-[60%] h-72 md:h-[420px] bg-gray-100 overflow-hidden rounded-2xl md:m-8">
              <Image
                src={idea.images[index]}
                alt={idea.title}
                fill
                className="object-cover transition-all duration-500"
              />

              <>
                {/* Left Gradient */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-white/60 via-white/20 to-transparent pointer-events-none"></div>

                {/* Right Gradient */}
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-white/60 via-white/20 to-transparent pointer-events-none"></div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-black/10 to-transparent pointer-events-none"></div>
              </>

              {/* Navigation Arrows */}
              {idea.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setIndex((prev) =>
                        prev === 0 ? idea.images.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow"
                  >
                    <ChevronLeft size={20} color="black" />
                  </button>
                  <button
                    onClick={() =>
                      setIndex((prev) => (prev + 1) % idea.images.length)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow"
                  >
                    <ChevronRight size={20} color="black" />
                  </button>
                </>
              )}

              {/* Pagination Dots */}
              <div className="absolute bottom-4 w-full flex justify-center gap-1">
                {idea.images.map((_: string, idx: number) => (
                  <span
                    key={idx}
                    className={`h-[6px] w-[6px] rounded-full ${
                      idx === index ? "bg-pinkDark" : "bg-gray-300"
                    }`}
                  ></span>
                ))}
              </div>
            </div>

            {/* Right: Info Section */}
            <div className="p-6 md:p-8 w-full md:w-[40%]">
              <h2 className="text-2xl font-prata text-primary mb-4">
                {idea.title}
              </h2>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {idea.tags.slice(0, 3).map((tag: string, idx: number) => (
                  <span
                    key={idx}
                    className="bg-pinkDark text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Builder Info */}
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={idea.builderImage}
                  alt={idea.builder}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-primary">{idea.builder}</p>
                  <p className="text-gray-500 text-sm flex items-center gap-2">
                    <Phone size={14} /> Contact Now
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {expanded
                  ? idea.description
                  : `${idea.description.slice(0, 120)}...`}
                {!expanded && (
                  <button
                    onClick={() => setExpanded(true)}
                    className="ml-2 text-pinkDark font-semibold text-sm hover:underline"
                  >
                    See more
                  </button>
                )}
              </p>
            </div>
          </div>

          

          {/* Bottom Info Section */}
          <div className="text-sm text-gray-800 font-lato px-5">
            {/* First Row */}
            <div className="grid grid-cols-2 gap-x-18 px-8 py-5">
              <div className="flex justify-between items-start gap-3">
                <p className="font-semibold text-primary w-1/3">Tags</p>
                <p className="w-2/3 text-gray-600 leading-snug">
                  {idea.tags.join(", ")}
                </p>
              </div>
              <div className="flex justify-between items-start gap-3">
                <p className="font-semibold text-primary w-1/3">Layout</p>
                <p className="w-2/3">{idea.layout}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Second Row */}
            <div className="grid grid-cols-2  gap-x-18 px-8 py-5">
              <div className="flex justify-between items-start gap-3">
                <p className="font-semibold text-primary w-1/3">
                  Completion Year
                </p>
                <p className="w-2/3">{idea.year}</p>
              </div>
              <div className="flex justify-between items-start gap-3">
                <p className="font-semibold text-primary w-1/3">Sq. Ft.</p>
                <p className="w-2/3">{idea.sqft}</p>
              </div>
            </div>
            <div className="border-t border-gray-200"></div>

            {/* Second Row */}
            <div className="grid grid-cols-2  gap-x-18 px-8 py-5 mb-3">
              <div className="flex justify-between items-start gap-3">
                <p className="font-semibold text-primary w-1/3">Style</p>
                <p className="w-2/3">{idea.style}</p>
              </div>

              <div className="flex justify-between items-start gap-3">
                <p className="font-semibold text-primary w-1/3">Floors</p>
                <p className="w-2/3">{idea.floors}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
