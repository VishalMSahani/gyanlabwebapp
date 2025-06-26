"use client"
import { motion } from "framer-motion";
import { Users, Award, Clock, Brain, BookOpen, Target } from "lucide-react";

const TeachingPhilosophySection = () => {
  const philosophies = [
    {
      icon: Users,
      title: "Personalized Attention",
      description: "Small batch sizes ensure every student gets individual attention and personalized guidance from our experienced faculty.",
      features: ["Small batch sizes", "Individual mentoring", "Custom learning plans", "Regular feedback"]
    },
    {
      icon: Brain,
      title: "Conceptual Clarity",
      description: "We focus on building strong conceptual foundations rather than rote memorization, ensuring deep understanding.",
      features: ["Deep understanding", "Concept-based learning", "Critical thinking", "Problem solving"]
    },
    {
      icon: Clock,
      title: "Regular Assessment",
      description: "Continuous evaluation through tests and assignments helps track progress and identify areas for improvement.",
      features: ["Weekly tests", "Progress tracking", "Performance analytics", "Improvement plans"]
    },
    {
      icon: Award,
      title: "Excellence Focus",
      description: "We maintain high standards and encourage students to strive for excellence in all their academic pursuits.",
      features: ["High standards", "Excellence culture", "Achievement recognition", "Continuous improvement"]
    },
    {
      icon: BookOpen,
      title: "Practical Learning",
      description: "Combining theoretical knowledge with practical applications to prepare students for real-world challenges.",
      features: ["Real-world applications", "Practical projects", "Industry exposure", "Skill development"]
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Setting clear academic goals and providing structured guidance to help students achieve their targets.",
      features: ["Clear objectives", "Structured approach", "Milestone tracking", "Goal achievement"]
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Our Teaching Philosophy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe in nurturing not just academic excellence, but also critical thinking and problem-solving skills 
            through innovative and personalized teaching methodologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {philosophies.map((philosophy, index) => (
            <motion.div
              key={philosophy.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 relative">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                >
                  <philosophy.icon className="h-6 w-6 text-primary" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors duration-300">
                  {philosophy.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
                  {philosophy.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {philosophy.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            Experience Our Teaching Methods
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeachingPhilosophySection;
