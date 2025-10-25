"use client";
import Image from "next/image";
import { useState } from "react";

interface HoverCardProps {
  title: any;
  description: any;
  imageUrl: string;
  onClick?: () => void;
  width?: number;
  height?: number;
  showDescription?: boolean;
}

export default function HoverCard({
  title,
  description,
  imageUrl,
  onClick = () => {},
  width = 12,
  height = 15,
  showDescription = false,
}: HoverCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative  rounded-2xl overflow-hidden cursor-pointer group transition-all duration-500 my-3"
      style={{ width: `${width}rem`, height: `${height}rem` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Blue Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-linear-to-b from-primary to-transparent transition-all duration-500 ${
          hovered ? "opacity-100 h-full" : "opacity-100 h-[55%]"
        }`}
        style={{
          transition: "height 0.5s ease, opacity 0.5s ease",
        }}
      />

      {/* Text Content */}
      <div className="absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-start text-white">
        {/* Title always visible */}
        {title}

        {/* Description only on hover */}
        <div
          className={`${
            hovered || showDescription
              ? "opacity-100 translate-y-0 delay-150"
              : "opacity-0 -translate-y-2"
          }`}
        >
          {description}
        </div>
      </div>
    </div>
  );
}
