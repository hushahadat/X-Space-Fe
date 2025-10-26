import BeginYourDesignJourney from "@/components/home/BeginYourDesignJourney";
import DesignYourSpace from "@/components/home/DesignYourSpace";
import FromIdeaToExecution from "@/components/home/FromIdeaToExecution";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseXSpace from "@/components/home/WhyChooseXSpace";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhyChooseXSpace />
      <DesignYourSpace />
      <FromIdeaToExecution />
      <BeginYourDesignJourney />
    </main>
  );
}
