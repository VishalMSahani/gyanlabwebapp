// import Image from "next/image";
import HomeHero from "../components/home/HomeHero";
import FeaturesSection from "../components/home/FeaturesSection";
import CoursesPreview from "../components/home/CoursesPreview";
import YouTubeSection from "../components/home/YouTubeSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import HomeCTA from "../components/home/HomeCTA";
import AboutUsSection from "../components/home/AboutUsSection";
import FoundersSection from "../components/home/FoundersSection";
import ToppersSection from "../components/home/ToppersSection";
// import AnnouncementBanner from "@/components/AnnouncementBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* <AnnouncementBanner /> */}
      <HomeHero />
      <FeaturesSection />
      <AboutUsSection />
      <CoursesPreview />
      <FoundersSection />
      <ToppersSection />
      <YouTubeSection />
      <TestimonialsSection />
      <HomeCTA />
    </main>
  );
}
