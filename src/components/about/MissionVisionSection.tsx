"use client"
import { motion } from "framer-motion";
import { Target, Eye, CheckCircle } from "lucide-react";

const MissionVisionSection = () => {
  const missionPoints = [
    "Comprehensive conceptual education",
    "Academic excellence focus",
    "Strong career foundations",
    "Enjoyable learning environment",
    "Full potential realization"
  ];

  const visionPoints = [
    "Leading educational institute in Mumbai",
    "Innovative teaching methods",
    "Exceptional academic results",
    "Student success commitment",
    "Confident and knowledgeable graduates"
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driving educational excellence through innovative approaches and unwavering commitment to student success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-300 relative">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Our Mission</h3>
                  <div className="w-16 h-1 bg-primary rounded-full"></div>
                </div>
              </div>
              
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                To provide comprehensive, conceptual, and quality education that empowers students 
                to achieve academic excellence while building strong foundations for their future careers.
              </p>

              <div className="space-y-3">
                {missionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-300 relative">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mr-4 group-hover:bg-secondary/20 transition-colors duration-300">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Our Vision</h3>
                  <div className="w-16 h-1 bg-secondary rounded-full"></div>
                </div>
              </div>
              
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                To be the leading educational institute in Mumbai, known for our innovative teaching methods, 
                exceptional results, and commitment to student success.
              </p>

              <div className="space-y-3">
                {visionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
