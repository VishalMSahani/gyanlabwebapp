
import { Users, BookOpen, Clock, Award } from "lucide-react";
import { courseBenefits } from "../../data/coursesData";

const CourseBenefits = () => {
  const iconMap = {
    "Small Batch Size": <Users className="h-8 w-8 text-secondary" />,
    "Study Material": <BookOpen className="h-8 w-8 text-secondary" />,
    "Flexible Timings": <Clock className="h-8 w-8 text-secondary" />,
    "Proven Results": <Award className="h-8 w-8 text-secondary" />
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Why Choose Our Courses?
          </h2>
          <p className="text-xl text-primary/70">
            Every course comes with these additional benefits
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseBenefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-light rounded-xl shadow-lg border border-primary/10">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {iconMap[benefit.title as keyof typeof iconMap]}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h3>
              <p className="text-primary/70 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseBenefits;
