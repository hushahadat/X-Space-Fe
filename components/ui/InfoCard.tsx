"use client";
import Image from "next/image";
import { useState } from "react";

interface InfoCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function InfoCard({
  title,
  description,
  imageUrl,
}: InfoCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full md:w-90 h-[536px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className={`object-cover transition-transform duration-700 ${
          hovered ? "scale-105" : "scale-100"
        }`}
      />

      <div
        className={`absolute inset-0 bg-linear-to-t from-primary/90 via-[#0A1F44]/70 to-transparent transition-all duration-500 ${
          hovered ? "from-primary/95" : "from-primary/85"
        }`}
      />

      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-xl md:text-2xl font-display font-prata">{title}</h3>
        <p className="text-base  mt-3 font-body opacity-90 font-lato">{description}</p>
      </div>
    </div>
  );
}
