"use client";

export default function FindProfessionals() {
  return (
    <section
      className="min-h-[80vh] flex flex-col justify-center items-center text-center 
      bg-gradient-to-b from-[#FBFFF1] via-[#FFF5F2] to-[#F3CEC6] text-primary px-4"
    >
      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl font-prata mb-4">
        Growing Our Community
      </h1>

      {/* Subheading */}
      <p className="text-gray-700 text-base md:text-lg font-lato max-w-2xl mb-8">
        We’re bringing top professionals to your city. Want to be notified?
      </p>

      {/* Notify Button */}
      <button
        className="bg-primary text-white px-8 py-3 rounded-full 
        font-lato text-base shadow-md hover:shadow-lg hover:bg-primary/90 
        transition-all duration-300 ease-in-out cursor-pointer active:scale-95"
      >
        Notify Me
      </button>
    </section>
  );
}
