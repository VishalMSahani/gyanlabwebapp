"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const FacultySection = () => {
  const facultyMembers = [
    {
      name: "Dr. Priya Sharma",
      subject: "Mathematics",
      experience: "12+ Years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face"
    },
    {
      name: "Prof. Rajesh Kumar",
      subject: "Physics",
      experience: "15+ Years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
    },
    {
      name: "Dr. Meera Patel",
      subject: "Chemistry",
      experience: "10+ Years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face"
    },
    {
      name: "Prof. Amit Singh",
      subject: "Biology",
      experience: "8+ Years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face"
    },
    {
      name: "Dr. Sneha Verma",
      subject: "English",
      experience: "11+ Years",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face"
    },
    {
      name: "Prof. Vikram Malhotra",
      subject: "Computer Science",
      experience: "9+ Years",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face"
    },
    {
      name: "Dr. Anjali Desai",
      subject: "Economics",
      experience: "13+ Years",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face"
    },
    {
      name: "Prof. Rahul Gupta",
      subject: "History",
      experience: "7+ Years",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face"
    }
  ];

  // Duplicate the array for infinite scroll effect
  const duplicatedFaculty = [...facultyMembers, ...facultyMembers];

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
            Our Expert Faculty
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our highly qualified and experienced faculty members who are dedicated to your academic success
          </p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Cards */}
          <div className="flex gap-8 overflow-hidden">
            <motion.div
              animate={{ x: [0, -50 * facultyMembers.length] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex gap-8"
            >
              {duplicatedFaculty.map((faculty, index) => (
                <motion.div
                  key={`${faculty.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.3 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{  scale: 1.01 }}
                  className="flex-shrink-0 w-80 bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all duration-500 relative group"
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <Image
                      src={faculty.image}
                      alt={faculty.name}
                      fill
                      className="object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/30"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 p-8 h-[350px] flex flex-col justify-between">
                    {/* Top Section */}
                    <div>
                     

                      {/* Name */}
                      <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors duration-300">
                        {faculty.name}
                      </h3>

                      {/* Subject with Icon */}
                      <div className="flex items-center gap-2 mb-6">
                        
                        <p className="text-lg font-semibold text-secondary">{faculty.subject}</p>
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="space-y-4">
                      {/* Divider */}
                      <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                      
                      {/* Faculty Badge */}
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-sm font-medium text-muted-foreground">Expert Faculty Member</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection; 