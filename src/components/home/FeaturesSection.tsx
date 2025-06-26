import { Users, BookOpen, Award, Clock } from "lucide-react";
import { features } from "../../data/homeData";

const FeaturesSection = () => {
  const iconMap = {
    "Expert Faculty": <Users className="h-8 w-8 text-violet-600" />,
    "Comprehensive Study Material": <BookOpen className="h-8 w-8 text-violet-600" />,
    "Proven Results": <Award className="h-8 w-8 text-violet-600" />,
    "Flexible Timings": <Clock className="h-8 w-8 text-violet-600" />
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Why Choose <span className="text-secondary">Gyanlab Tutorial</span>?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
          Established in Wadala, Mumbai, we provide quality education with modern teaching methods
        </p>
        <div className="relative mt-20 flex justify-between items-center flex-col md:flex-row ">
          {features.map((feature, index) => (
            <div key={index} className="flex-1 flex flex-col items-center mb-12 md:mb-0 relative">
              <div className="relative z-10 p-4 rounded-full bg-violet-50 border-2 border-violet-200 shadow-md">
                {iconMap[feature.title as keyof typeof iconMap]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-base max-w-[15rem]">{feature.description}</p>
              {index < features.length - 1 && (
                <div className="hidden md:block absolute top-1/4 left-[calc(50%+4rem)] w-[calc(100%-8rem)] border-t-2 border-dashed border-violet-300 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
