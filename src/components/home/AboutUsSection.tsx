"use client"
import { motion } from "framer-motion";
import { Target, ArrowRight } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import AboutGyanlabImg from "../../../public/about-us.png"

const AboutUsSection = () => {
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
    hidden: { opacity: 0, y: 30 },
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
    <section className="py-24 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <motion.div 
        className="absolute top-1/4 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Column - Image */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <motion.div 
              className="absolute"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative h-[550px] rounded-3xl overflow-hidden border border-border/50">
              <Image
                src={AboutGyanlabImg} 
                alt="GyanLab Office"
                fill
                className="object-cover py-3"
              />
              <div className="absolute inset-0" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <div>
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6"
              >
                <Target className="h-8 w-8 text-secondary" />
              </motion.div>
              
             
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                GyanLab is dedicated to transforming education through innovative technology and personalized learning experiences. 
                We believe in making quality education accessible to everyone in Wadala, Mumbai.
              </p>

              <Link href="/about">
                <motion.button
                  className="group inline-flex items-center gap-3 px-4 py-3 border-2 border-primary/30 hover:border-secondary/80 text-primary font-semibold rounded-lg "
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More About Us
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection; 