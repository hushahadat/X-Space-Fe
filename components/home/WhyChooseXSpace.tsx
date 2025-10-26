import InfoCard from "@/components/ui/InfoCard";

const cards = [
  {
    title: "Real Designs, Real Costs",
    description:
      "Explore inspiring spaces with clear cost estimates—so you know what’s possible before you begin.",
    imageUrl: "/images/dine-area.jpg",
  },
  {
    title: "Trusted Professionals",
    description:
      "Connect with trusted designers, contractors, and architects—all reviewed, rated, and matched to your needs.",
    imageUrl: "/images/house.jpg",
  },
  {
    title: "One Hub, Start to Finish",
    description:
      "From discovery to execution, manage your entire project in one place—with tools built for homeowners.",
    imageUrl: "/images/camera.jpg",
  },
];

export default function WhyChooseXSpace() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-linear-to-b from-primary to-primary/95 text-center text-white">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-5xl font-display mb-4 font-prata">
        Why Choose XSpace
      </h2>
      <p className="max-w-2xl mx-auto text-sm md:text-lg text-gray-400 mb-12 font-lato">
        Explore curated designs, real-time cost estimates, and connect with
        trusted professionals. All in one seamless experience.
      </p>

      {/* Card Container */}
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
        {cards.map((card) => (
          <InfoCard
            key={card.title}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
