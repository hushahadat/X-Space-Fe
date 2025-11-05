import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function IdeaDetailModal({ idea, onClose }: any) {
  const [index, setIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-[95%] md:w-3/4 lg:w-2/3 rounded-2xl shadow-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
        >
          <X size={18} />
        </button>

        {/* Image Section */}
        <div className="relative h-80 md:h-[420px]">
          <Image
            src={idea.images[index]}
            alt={idea.title}
            fill
            className="object-cover"
          />
          <button
            onClick={() =>
              setIndex(
                (prev) => (prev - 1 + idea.images.length) % idea.images.length
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => setIndex((prev) => (prev + 1) % idea.images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Details */}
        <div className="p-8">
          <h2 className="text-2xl font-prata mb-4 text-primary">
            {idea.title}
          </h2>

          <div className="flex flex-wrap gap-2 mb-6">
            {idea.tags.map((tag: string, idx: number) => (
              <span
                key={idx}
                className="bg-[#E8C2BD] text-primary px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-4">
            <Image
              src={idea.builderImage}
              alt={idea.builder}
              width={35}
              height={35}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-primary">{idea.builder}</p>
              <p className="text-gray-600 text-sm">{idea.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
            <p>
              <strong>Layout:</strong> {idea.layout}
            </p>
            <p>
              <strong>Sq. Ft.:</strong> {idea.sqft}
            </p>
            <p>
              <strong>Budget:</strong> {idea.budget}
            </p>
            <p>
              <strong>Completion Year:</strong> {idea.year}
            </p>
            <p>
              <strong>Style:</strong> {idea.style}
            </p>
            <p>
              <strong>Floors:</strong> {idea.floors}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
