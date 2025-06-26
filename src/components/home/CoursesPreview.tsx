

import { coursesPreview } from "../../data/homeData";
import Link from "next/link";

const CoursesPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Popular Courses</h2>
          <p className="text-xl text-primary/70">Comprehensive coaching for all major exams</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesPreview.map((course, index) => (
            <div key={index} className="bg-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-primary/10">
              <h3 className="text-xl font-semibold text-primary mb-3">{course.title}</h3>
              <p className="text-primary/70 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-secondary font-medium">Duration: {course.duration}</span>
                <Link 
                href="/courses"
                  className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
          href="/courses"
            className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
