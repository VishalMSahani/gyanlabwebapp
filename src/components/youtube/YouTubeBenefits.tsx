
import { Play, BookOpen, Users, ThumbsUp } from "lucide-react";

const YouTubeBenefits = () => {
  const benefits = [
    {
      icon: <Play className="h-8 w-8" />,
      title: "Learn at Your Pace",
      description: "Pause, rewind, and replay as many times as needed"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Comprehensive Content",
      description: "Complete syllabus coverage with detailed explanations"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Faculty",
      description: "Same experienced teachers from our offline classes"
    },
    {
      icon: <ThumbsUp className="h-8 w-8" />,
      title: "Free Access",
      description: "Quality education accessible to everyone, completely free"
    }
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Learn from Our YouTube Channel?</h2>
          <p className="text-xl text-blue-100">Experience quality education at your convenience</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center text-white">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-blue-100 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeBenefits;
