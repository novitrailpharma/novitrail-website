import FeaturesSection from "@/components/FeaturesSection";
import {featuresData, servicesData} from "@/assets/constants/cardsData";
import HeroSection from "@/components/hero/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection sectionData={featuresData} bush={false}/>
      <FeaturesSection sectionData={servicesData} bush={true} />
    </>
  );
}
