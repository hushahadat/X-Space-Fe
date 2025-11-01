"use client";
import Image from "next/image";

export default function DesignYourSpace() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-secondary px-4 py-16 md:py-24">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/Room-6.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Heading */}
      <div className="text-center max-w-3xl mb-16">
        <h2 className="text-3xl md:text-5xl font-prata mb-4 leading-tight">
          Everything You Need To Design Your Space
        </h2>
        <p className="text-sm text-gray-300 md:text-lg font-lato">
          Whether you&apos;re styling a room or redoing your entire home, Xspace
          brings together inspiration, expertise, and execution.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {/* Left Card (Explore Designs) */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/20 transition-all duration-300">
          <div>
            <h3 className="text-2xl font-prata mb-2">Explore Designs</h3>
            <p className="text-gray-200 text-sm mb-4 font-lato">
              Tired of scrolling through unrealistic inspiration? Get curated
              ideas that match your actual space and budget.
            </p>
            <button className="bg-primary px-6 py-2 rounded-full text-sm hover:bg-primary/80 transition">
              Explore
            </button>
          </div>

          {/* Small image grid */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            {[
              "/images/Room-1.jpg",
              "/images/Room-2.jpg",
              "/images/Room-3.jpg",
              "/images/Room-4.jpg",
              "/images/Room-5.jpg",
              "/images/Room-6.jpg",
            ].map((src, i) => (
              <div
                key={i}
                className="relative w-full h-28 rounded-lg overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Design ${i}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Find Professionals */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between hover:bg-white/20 transition-all duration-300">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-prata mb-2">Find Professionals</h3>
              <p className="text-gray-200 text-sm mb-4 font-lato">
                Tired of scrolling through unrealistic inspiration? Get curated
                ideas that match your actual space and budget.
              </p>
              <button className="bg-[#0A1F44] px-6 py-2 rounded-full text-sm hover:bg-[#0A1F44]/80 transition">
                Find
              </button>
            </div>
            <div className="relative w-full md:w-1/2 h-54 mt-4 md:mt-0 rounded-xl overflow-hidden">
              <Image
                src="/images/explore-1.jpg"
                alt="Professionals"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Get Expert Advice */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between hover:bg-white/20 transition-all duration-300">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-prata mb-2">Get Expert Advice</h3>
              <p className="text-gray-200 text-sm mb-4">
                Tired of scrolling through unrealistic inspiration? Get curated
                ideas that match your actual space and budget.
              </p>
              <button className="bg-[#0A1F44] px-6 py-2 rounded-full text-sm hover:bg-[#0A1F44]/80 transition">
                Ask
              </button>
            </div>
            <div className="relative w-full md:w-1/2 h-54 mt-4 md:mt-0 rounded-xl overflow-hidden">
              <Image
                src="/images/explore-2.jpg"
                alt="Expert Advice"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
