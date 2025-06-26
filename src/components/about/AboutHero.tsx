"use client"
import { motion } from "framer-motion";
import { GraduationCap, Users, Award, BookOpen } from "lucide-react";

const AboutHero = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Students Enrolled" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: BookOpen, value: "10+", label: "Years Experience" },
    { icon: GraduationCap, value: "50+", label: "Expert Teachers" },
  ];

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-8"
          >
            <GraduationCap className="h-8 w-8 text-primary-foreground" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-primary mb-6"
          >
            About Gyanlab
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Established in the heart of <span className="font-semibold text-primary">Wadala, Mumbai</span>, we are committed to 
            providing <span className="font-semibold text-secondary">quality education</span> and nurturing young minds for a 
            brighter future through innovative teaching methods and personalized attention.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="text-center group"
            >
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border group-hover:shadow-md transition-all duration-300">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            Explore Our Programs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
