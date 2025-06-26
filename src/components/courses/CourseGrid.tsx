
import { Clock, Users, BookOpen, Award, CheckCircle } from "lucide-react";
import { courses } from "../../data/coursesData";

const CourseGrid = () => {
  return (
    <section className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-200 hover:shadow-xl ${
                course.popular ? 'border-secondary' : 'border-primary/10 hover:border-secondary'
              }`}
            >
              {course.popular && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">{course.title}</h3>
                <p className="text-primary/70 mb-6">{course.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Clock className="h-6 w-6 text-secondary mx-auto mb-2" />
                    <p className="text-sm text-primary/70">{course.duration}</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-6 w-6 text-secondary mx-auto mb-2" />
                    <p className="text-sm text-primary/70">{course.students}</p>
                  </div>
                  <div className="text-center">
                    <BookOpen className="h-6 w-6 text-secondary mx-auto mb-2" />
                    <p className="text-sm text-primary/70">{course.format}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3">What&apos;s Included:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-primary/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-primary/10 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold text-secondary">{course.price}</p>
                      <p className="text-sm text-primary/60">Including all materials</p>
                    </div>
                    <Award className="h-8 w-8 text-tertiary-purple" />
                  </div>
                  
                  <div className="space-y-3">
                    <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      Join Now
                    </button>
                    <button className="w-full border-2 border-secondary text-secondary py-3 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-all duration-200">
                      Contact for Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
