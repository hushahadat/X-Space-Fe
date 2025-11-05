"use client";
import Image from "next/image";
import HoverCard from "../ui/HoverCard";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/constants";

export default function HeroSection() {
  const { push } = useRouter();
  return (
    <section className="relative flex justify-center items-center min-h-[90vh] md:min-h-[108vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Hero Background"
        fill
        className="object-cover -z-10"
        priority
      />

      {/* Content Container */}
      <div className="w-[90%] my-20 sm:w-[85%] lg:w-[80%] px-4 sm:px-6 md:px-10 py-8 sm:py-10 flex flex-col lg:flex-row justify-between items-start gap-10 backdrop-blur-lg bg-gradientClass shadow-xl rounded-2xl relative">
        {/* Left Section */}
        <div className="flex-1 max-w-full lg:max-w-[60%]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-prata text-secondary leading-snug mb-6">
            From Vision To Reality,
            <br className="hidden sm:block" />
            Curated Designs For You
          </h1>

          <p className="text-secondary mb-6 text-base sm:text-lg font-lato leading-relaxed">
            Explore curated designs, real-time cost estimates, and connect with
            trusted professionals. All in one seamless experience.
          </p>

          <button className="bg-primary text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 cursor-pointer">
            Explore
          </button>

          {/* Hover Cards */}
          <div className="flex flex-col sm:flex-row flex-wrap mt-10 gap-4 ">
            <HoverCard
              title={<div className="text-lg font-prata">Explore Ideas</div>}
              description={
                <div className="text-sm mt-1 font-lato">
                  Dive into curated design inspirations and creative directions.
                </div>
              }
              imageUrl="/images/wall-design.jpg"
              width={15}
              height={13}
              onClick={() => {
                push(ROUTES.EXPLORE_IDEA);
              }}
            />

            <HoverCard
              title={
                <div className="text-lg font-prata">Find Professionals</div>
              }
              description={
                <div className="text-sm mt-1 font-lato">
                  Discover experts who bring your vision to life.
                </div>
              }
              imageUrl="/images/dine-area.jpg"
              width={15}
              height={13}
              onClick={() => {
                push(ROUTES.FIND_PROFESSIONALs);
              }}
            />

            <HoverCard
              title={<div className="text-lg font-prata">Ask Experts</div>}
              description={
                <div className="text-sm mt-1 font-lato">
                  Get professional insights tailored to your space.
                </div>
              }
              imageUrl="/images/color-palette.jpg"
              width={15}
              height={13}
              onClick={() => {
                push(ROUTES.ASK_EXPERT);
              }}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[35%] flex items-center justify-center mx-auto md:mx-0">
          <HoverCard
            title={
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-prata text-white leading-snug">
                Join a Network Built for the Best
              </h1>
            }
            description={
              <div className="text-sm sm:text-base mt-3 font-lato text-gray-100">
                Showcase your work, connect with discerning clients, and grow
                your brand with Xspace’s curated network.
              </div>
            }
            imageUrl="/images/design-board.jpg"
            width={24}
            height={33}
            showDescription
            onClick={() => {
              push(ROUTES.ASK_EXPERT);
            }}
          />
        </div>
      </div>
    </section>
  );
}
