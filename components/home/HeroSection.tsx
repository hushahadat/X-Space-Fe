import Image from "next/image";
import HoverCard from "../ui/HoverCard";

export default function HeroSection() {
  return (
    <section className="relative h-[108vh] flex  justify-center">
      <Image
        src="/images/hero-bg.jpg"
        alt="Hero Background"
        fill
        className="object-cover -z-10"
        priority
      />

      <div className="md:mx-15 w-full px-10 py-6 flex flex-col lg:flex-row justify-between gap-8 backdrop-blur-lg bg-gradientClass shadow-xl rounded-md md:max-h-[600px] top-25 relative">
        {/* Left: Main Text */}
        <div className="flex-1 rounded-3xl max-w-[60%]">
          <div>
            <h1 className="text-4xl lg:text-5xl font-display mb-6 text-secondary leading-snug font-prata">
              From Vision To Reality,
              <br />
              Curated Designs For You
            </h1>
            <p className="text-secondary mb-6 text-lg font-lato">
              Explore curated designs, real-time cost estimates, and connect
              with trusted professionals. All in one seamless experience.
            </p>
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition cursor-pointer ">
              Explore
            </button>
          </div>

          {/* jjjj */}

          <div className="flex mt-12 gap-3">
            <HoverCard
              title={
                <div className="text-lg font-display font-prata">
                  Explore Ideas
                </div>
              }
              description={
                <div className="text-sm mt-1 transition-all duration-500 font-lato">
                  Dive into curated design inspirations and creative directions.
                </div>
              }
              imageUrl="/images/wall-design.jpg"
              width={15}
              height={13}
            />
            <HoverCard
              title={
                <div className="text-lg font-display font-prata">
                  Find Professionals
                </div>
              }
              description={
                <div className="text-sm mt-1 transition-all duration-500 font-lato">
                  Dive into curated design inspirations and creative directions.
                </div>
              }
              imageUrl="/images/dine-area.jpg"
              width={15}
              height={13}
            />
            <HoverCard
              title={
                <div className="text-lg font-display font-prata">
                  Ask Experts
                </div>
              }
              description={
                <div className="text-sm mt-1 transition-all duration-500 font-lato">
                  Dive into curated design inspirations and creative directions.
                </div>
              }
              imageUrl="/images/color-palette.jpg"
              width={15}
              height={13}
            />
          </div>
        </div>
        {/* Right: Join Network */}
        <div className="max-w-[35%] flex items-center">
          <HoverCard
            title={
              <h1 className="text-xl lg:text-4xl font-display text-white leading-snug font-prata">
                Join a Network Built for the Best
              </h1>
            }
            description={
              <div className="text-sm mt-3 transition-all duration-500 font-lato">
                Showcase your work, connect with discerning clients, and grow
                your brand with Xspace’s curated network.
              </div>
            }
            imageUrl="/images/design-board.jpg"
            width={24}
            height={33}
            showDescription
          />
        </div>
      </div>
    </section>
  );
}
