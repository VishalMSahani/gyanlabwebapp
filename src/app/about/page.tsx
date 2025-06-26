import AboutHero from "../../components/about/AboutHero";
import MissionVisionSection from "../../components/about/MissionVisionSection";
import TeachingPhilosophySection from "../../components/about/TeachingPhilosophySection";
import FoundersSection from "@/components/home/FoundersSection";
import FacultySection from "../../components/about/FacultySection";
import LearningEnvironmentSection from "../../components/about/LearningEnvironmentSection";
import LocationSection from "../../components/about/LocationSection";

const About = () => {
  return (
    <div className="pt-16">
      <AboutHero />
      <MissionVisionSection />
      <TeachingPhilosophySection />
      <FoundersSection/>
      <FacultySection />
      <LearningEnvironmentSection />
      <LocationSection />
    </div>
  );
};

export default About;
