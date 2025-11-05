/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function IdeaCard({ idea, onClick }: any) {
  const [index, setIndex] = useState(0);

  const next = (e: any) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % idea.images.length);
  };

  const prev = (e: any) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + idea.images.length) % idea.images.length);
  };

  return (
    <div
      onClick={onClick}
      className=" rounded-t-xl  hover:shadow-lg cursor-pointer transition overflow-hidden"
    >
      <div className="relative h-56">
        <Image
          src={idea.images[index]}
          alt={idea.title}
          fill
          className="object-cover"
        />
        {idea.images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-1 rounded-full hover:bg-white"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-1 rounded-full hover:bg-white"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-prata text-lg mb-3 text-primary">{idea.title}</h3>
        <div className="flex flex-wrap gap-3 text-xs  mb-3">
          <span className="text-black px-3 py-1 bg-gray-200">
            {idea.layout}
          </span>
          <span className="text-black px-3 py-1 bg-gray-200">{idea.sqft}</span>
          <span className="text-black px-3 py-1 bg-gray-200">
            {idea.budget}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Image
            src={idea.builderImage}
            alt={idea.builder}
            width={30}
            height={30}
            className="rounded-full"
          />
          <span>{idea.builder}</span>
        </div>
      </div>
    </div>
  );
}
