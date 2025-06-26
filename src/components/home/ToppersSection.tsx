'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Trophy, Star, Award } from 'lucide-react';

interface Topper {
  name: string;
  standard: string;
  percentage: number;
  image: string;
  school?: string;
  college?: string;
  rankNote?: string;
}

const toppers: Topper[] = [
  { name: "Vishesh Jadhav", standard: "SSC", percentage: 94, image: "/toppers/SSC-1.jpg", school: "1st Rank in N.K.E.S School" },
  { name: "Naman Kedar", standard: "SSC", percentage: 82, image: "/toppers/SSC-2.jpg" },
  { name: "Shreya Khot", standard: "SSC", percentage: 80, image: "/toppers/SSC-3.jpg" },
  { name: "Kashish Yadav", standard: "SSC", percentage: 79, image: "/toppers/SSC-4.jpg" },
  { name: "Roshni Prajapati", standard: "FYJC", percentage: 92, image: "/toppers/FYJC-1.jpg" },
  { name: "Laxmi Patel", standard: "FYJC", percentage: 85, image: "/toppers/FYJC-2.jpg" },
  { name: "Ayush Singh", standard: "FYJC", percentage: 84, image: "/toppers/FYJC-3.jpg", college: "2nd Rank in Andhra College" },
  { name: "Satish Prajapati", standard: "FYJC", percentage: 76, image: "/toppers/FYJC-4.jpg" },
  { name: "Vivek Prasad", standard: "HSC", percentage: 87, image: "/toppers/HSC-1.jpg", college: "2nd Rank in Andhra College" },
  { name: "Ayush Ambetkar", standard: "HSC", percentage: 83, image: "/toppers/HSC-2.jpg" },
  { name: "Unnati Singh", standard: "HSC", percentage: 82, image: "/toppers/HSC-3.jpg" },
  { name: "Shreya Chaturvedi", standard: "HSC", percentage: 76, image: "/toppers/HSC-4.jpg" }
];

const TopperCard = ({ topper }: { topper: Topper }) => {
  return (
    <motion.div 
      className="flex-shrink-0 w-[200px] bg-white rounded-2xl shadow-lg p-6 mx-3 flex flex-col items-center text-center relative overflow-hidden border border-border/50 hover:shadow-2xl transition-all duration-300 group"
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>
      
      <div className="relative z-10">
        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-secondary/20 flex-shrink-0 shadow-lg group-hover:border-secondary/40 transition-colors duration-300">
          <Image
            src={topper.image}
            alt={topper.name}
            fill
            className="object-cover"
          />
          {/* Percentage badge */}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-lg">
            <span className="text-xs font-bold text-white">{topper.percentage}%</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-primary leading-tight">{topper.name}</h3>
          <div className="flex items-center justify-center space-x-1">
            <Trophy className="h-4 w-4 text-yellow-500" />
            <p className="text-sm font-semibold text-secondary">{topper.standard}</p>
          </div>
          
          {(topper.school || topper.college) && (
            <p className="text-xs text-muted-foreground italic leading-tight">{topper.school || topper.college}</p>
          )}
          
          {topper.rankNote && (
            <motion.div 
              className="inline-flex items-center text-xs text-secondary font-semibold bg-secondary/10 rounded-full px-3 py-1 mt-2 shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="h-3 w-3 mr-1" />
              {topper.rankNote}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ToppersSection = () => {
  const cardWidth = 200; // w-[200px]
  const cardMarginX = 12; // mx-3 means 6px left + 6px right = 12px total horizontal margin
  const totalCardWidth = cardWidth + (cardMarginX * 2);
  const totalToppers = toppers.length;

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6"
          >
            <Award className="h-8 w-8 text-secondary" />
          </motion.div>
          
          <div className="flex justify-center items-center mb-6">
            <motion.span 
              className="inline-block text-secondary text-sm font-bold px-3 py-2 rounded-full border-secondary/50 border tracking-wider shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              OUTSTANDING RESULTS
            </motion.span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Toppers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Celebrating the success of our brilliant students who have achieved exceptional results through dedication and our guidance.
          </p>
        </motion.div>

        <div className="relative overflow-hidden w-full">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50/50 to-transparent z-10" />
          
          <motion.div
            className="flex"
            animate={{
              x: [0, -(totalToppers * totalCardWidth)],
            }}
            transition={{
              duration: totalToppers * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...toppers, ...toppers].map((topper, index) => (
              <TopperCard key={`topper-${index}`} topper={topper} />
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Join Our Success Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ToppersSection; 