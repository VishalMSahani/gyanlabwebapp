"use client"
import { motion } from "framer-motion";
import Image from 'next/image';
import { Award, Briefcase, Quote } from "lucide-react";

const FoundersSection = () => {
  const founders = [
    {
      image: "/founders/anjali_patel.webp",
      specialization: "Biology Specialist",
      quote: "I desire to teach what I know and learn what I am yet to know, Because I believe, 'Teaching is a life long Learning Journey'.",
      qualifications: [
        "B. Sc. Microbiology - Mumbai University",
        "M. Sc. Life Sciences - Mumbai University",
        "PET Qualified - PhD aspirant",
        "PUKAR youth fellow for 1.5 years (Social research organization)"
      ],
      experience: "Teaching experience - 7-8 years"
    },
    {
      image: "/founders/ajay_patel.webp",
      specialization: "Physics Specialist",
      quote: "Engineer by Interest & Profession, Teacher by passion. My aim is to contribute a little to the society, that could add up and reflect in big Result",
      qualifications: [
        "B.E. Electrical Engineering",
        "Vice President of IEEE Student's Chapter",
        "Mumbai university"
      ],
      experience: "Teaching experience - 5 years"
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
            Our Founders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the passionate educators behind GyanLab who are committed to excellence in education
          </p>
        </motion.div>

        <div className="space-y-20">
          {founders.map((founder, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <motion.div 
                className="lg:w-2/5"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-80 w-80 rounded-xl overflow-hidden mx-auto shadow-sm border border-border">
                  <Image
                    src={founder.image}
                    alt={`${founder.specialization} - Founder`}
                    fill
                    className="object-cover"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>

              {/* Content Section */}
              <div className="lg:w-3/5 space-y-6">
                {/* Specialization and Quote */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-primary">{founder.specialization}</h3>
                    <div className="w-16 h-1 bg-secondary rounded-full"></div>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-4 border border-border">
                    <div className="flex items-start gap-3">
                      <Quote className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground italic text-sm leading-relaxed">
                        &ldquo;{founder.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Qualifications and Experience */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-6 shadow-sm border border-border"
                >
                  {/* Qualifications */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                        <Award className="h-4 w-4 text-primary" />
                      </div>
                      Qualifications
                    </h4>
                    <ul className="space-y-2">
                      {founder.qualifications.map((qual, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{qual}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Experience */}
                  <div className="pt-4 border-t border-border">
                    <h4 className="text-lg font-semibold text-primary mb-3 flex items-center">
                      <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center mr-3">
                        <Briefcase className="h-4 w-4 text-secondary" />
                      </div>
                      Experience
                    </h4>
                    <p className="text-sm text-muted-foreground pl-11">{founder.experience}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection; 