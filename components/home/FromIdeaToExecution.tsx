"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discover",
    description:
      "A guided journey from inspiration to move-in, built for modern Indian families.",
    image: "/images/idea-execution.jpg",
  },
  {
    id: 2,
    title: "Plan",
    description:
      "Turn your ideas into actionable plans, complete with layouts, budgets, and design direction.",
    image: "/images/idea-execution.jpg",
  },
  {
    id: 3,
    title: "Execute",
    description:
      "Seamlessly bring your vision to life with professionals who understand your space and style.",
    image: "/images/idea-execution.jpg",
  },
];

export default function FromIdeaToExecution() {
  const [active, setActive] = useState(1);

  return (
    <section className="relative bg-linear-to-r from-[#F8F9FB] to-[#E8EFFF] text-primary py-10 px-4 md:px-16 lg:px-24 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center max-w-3xl mb-12">
        <h2 className="text-3xl md:text-5xl font-prata mb-4">
          From Idea to Execution
        </h2>
        <p className="text-gray-600 text-base md:text-lg font-lato">
          A guided journey from inspiration to move-in, built for modern Indian
          families.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-6xl gap-12">
        {/* Accordion Section */}
        <div className="flex-1 space-y-4">
          {steps.map((step) => {
            const isOpen = active === step.id;
            return (
              <div
                key={step.id}
                className={`border-b border-gray-300 pb-4 transition-all duration-300`}
              >
                <button
                  onClick={
                    () => setActive(isOpen ? 0 : step.id) // toggle open/close
                  }
                  className="flex items-center justify-between w-full cursor-pointer group transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 border border-primary rounded-full flex items-center justify-center font-prata text-lg transition-all duration-300 ${
                        isOpen
                          ? "bg-primary text-white"
                          : "text-primary group-hover:bg-primary/10"
                      }`}
                    >
                      {step.id}
                    </span>
                    <h3
                      className={`text-2xl font-prata transition-colors duration-300 ${
                        isOpen
                          ? "text-primary"
                          : "text-gray-800 group-hover:text-primary"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <div
                    className={`transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ChevronDown
                      className={`${
                        isOpen ? "text-primary" : "text-gray-500"
                      } transition-colors duration-300`}
                    />
                  </div>
                </button>

                {/* Accordion Content with Smooth Transition */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 ml-11 text-sm md:text-base font-lato leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Image Section */}
        <div className="flex-1 relative w-full h-[350px] md:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-md transition-all duration-700 ease-in-out">
          <Image
            src={steps.find((s) => s.id === active)?.image || ""}
            alt={steps.find((s) => s.id === active)?.title || ""}
            fill
            className="object-cover rounded-2xl transition-all duration-700 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
}
