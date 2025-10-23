import Image from "next/image";

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

      <div className="md:mx-38 w-full px-10 py-6 flex flex-col lg:flex-row gap-8 backdrop-blur-lg bg-gradientClass shadow-xl rounded-md max-h-[600px] top-25 relative">
        {/* Left: Main Text */}
        <div className="flex-1 rounded-3xl ">
          <h1 className="text-4xl lg:text-5xl font-display mb-6 text-secondary leading-snug font-prata">
            From Vision To Reality,
            <br />
            Curated Designs For You
          </h1>
          <p className="text-secondary mb-6 text-lg font-lato">
            Explore curated designs, real-time cost estimates, and connect with
            trusted professionals. All in one seamless experience.
          </p>
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition cursor-pointer ">
            Explore
          </button>
        </div>

        {/* Right: Join Network */}
        <div className="flex-1 max-w-md bg-[var(--color-primary)] text-white p-8 rounded-3xl shadow-xl my-5">
          <h2 className="text-2xl font-display font-semibold mb-3">
            Join a Network Built for the Best
          </h2>
          <p className="text-gray-200 mb-5 text-base leading-relaxed">
            Showcase your work, connect with discerning clients, and grow your
            brand with Xspace’s curated network.
          </p>
          <button className="bg-white text-[var(--color-primary)] px-6 py-2 rounded-full font-medium hover:bg-gray-100">
            Enroll
          </button>
        </div>
      </div>
    </section>
  );
}
