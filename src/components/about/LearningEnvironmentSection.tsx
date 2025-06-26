"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { Monitor, Users, BookOpen,  } from "lucide-react";

const LearningEnvironmentSection = () => {
  const facilities = [
    {
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
      title: "Modern Classrooms",
      description: "Air-conditioned rooms with modern teaching aids and comfortable seating arrangements.",
      features: ["Smart boards", "Projectors", "Comfortable seating", "Climate control"],
      icon: Monitor
    },
    {
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
      title: "Interactive Sessions",
      description: "Smart boards and digital learning tools for enhanced interactive learning experiences.",
      features: ["Digital whiteboards", "Audio systems", "Interactive software", "Real-time collaboration"],
      icon: Users
    },
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
      title: "Study Areas",
      description: "Comfortable spaces for group discussions and individual study sessions.",
      features: ["Group study rooms", "Quiet zones", "Library access", "Discussion areas"],
      icon: BookOpen
    },
    // {
    //   image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    //   title: "Technology Hub",
    //   description: "Computer labs and digital resources for technology-enhanced learning.",
    //   features: ["Computer labs", "High-speed internet", "Software access", "Digital resources"],
    //   icon: Wifi
    // },
    // {
    //   image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=300&fit=crop",
    //   title: "Recreation Zone",
    //   description: "Relaxation areas and refreshment facilities for students during breaks.",
    //   features: ["Cafeteria", "Rest areas", "Indoor games", "Refreshment facilities"],
    //   icon: Coffee
    // },
    // {
    //   image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    //   title: "Security & Safety",
    //   description: "24/7 security and safety measures to ensure a secure learning environment.",
    //   features: ["CCTV surveillance", "Security personnel", "Emergency protocols", "Safe environment"],
    //   icon: Shield
    // }
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
            Our Learning Environment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            State-of-the-art facilities designed for optimal learning experience with modern amenities and comfortable spaces
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-all duration-300 relative">
                {/* Image container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    loading="lazy" 
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-3 right-3">
                    <div className="bg-card/90 backdrop-blur-sm rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                      <facility.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors duration-300">
                    {facility.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-1">
                    {facility.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1 h-1 bg-secondary rounded-full"></div>
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningEnvironmentSection;
