import CoursesHero from "@/components/courses/CoursesHero";
import CourseGrid from "@/components/courses/CourseGrid";
import CourseBenefits from "@/components/courses/CourseBenefits";
import CoursesCTA from "@/components/courses/CoursesCTA";

export default function Courses() {
  return (
    <div className="pt-16">
      <CoursesHero />
      <CourseGrid />
      <CourseBenefits />
      <CoursesCTA />
    </div>
  );
}
