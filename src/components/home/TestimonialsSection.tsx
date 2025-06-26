"use client"
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "../../data/homeData";
import Image from "next/image";

const TestimonialsSection = () => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/95 to-primary/90 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <motion.div 
        className="absolute top-10 right-10 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4"
          >
            <Quote className="h-6 w-6 text-white" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary-blue">
              Students Say
            </span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Success stories from our proud students
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-secondary/5 rounded-full -translate-y-6 translate-x-6 group-hover:scale-125 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <div className="mb-4">
                    <Quote className="h-5 w-5 text-secondary mb-2" />
                    <p className="text-primary/80 italic leading-relaxed text-sm">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Image
                        width={40}
                        height={40} 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full border-2 border-secondary/20"
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-secondary rounded-full border border-white"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-secondary font-medium">{testimonial.course}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-primary px-6 py-3 rounded-lg font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300"
          >
            Join Our Success Stories
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
