"use client"
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation, Star } from "lucide-react";

const LocationSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Shop No 23, Ganesh Nagar, Siddhivinayak Tower, Salt Pan Rd, R J Gaikwad Wadala East, Wadala, Mumbai, Maharashtra 400037"],
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["091678 23177"],
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contactgyanlab@gmail.com"],
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Sat: 7:00 AM - 10:00 PM", "Sunday: 9:00 AM - 6:00 PM"],
      color: "bg-secondary/10 text-secondary"
    }
  ];

  const nearbyLandmarks = [
    "Wadala Railway Station (5 min walk)",
    "Ganesh Nagar Gate (1 min walk)",
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Visit Our Campus
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Conveniently located in the heart of Wadala, easily accessible by train and bus. 
            Our campus is just a 5-minute walk from Wadala Railway Station.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-10 h-10 ${info.color} rounded-lg mb-3`}>
                    <info.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-primary-foreground mb-2">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-primary-foreground/80 text-sm">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Nearby Landmarks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20"
            >
              <div className="flex items-center mb-3">
                <Navigation className="h-5 w-5 text-secondary mr-2" />
                <h3 className="text-base font-semibold text-primary-foreground">Nearby Landmarks</h3>
              </div>
              <div className="space-y-2">
                {nearbyLandmarks.map((landmark, index) => (
                  <motion.div
                    key={landmark}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    <span className="text-primary-foreground/80 text-sm">{landmark}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <MapPin className="h-4 w-4" />
                <span>Get Directions</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-transparent border border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Interactive Map */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 relative overflow-hidden">
              {/* Map placeholder with interactive elements */}
              <div className="relative h-80 bg-primary/20 rounded-lg overflow-hidden">
                {/* Map grid pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                {/* Location marker */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg"
                    >
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </motion.div>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-primary-foreground text-primary px-2 py-1 rounded text-xs font-semibold shadow-lg">
                      Gyanlab
                    </div>
                  </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-4 right-4 bg-primary-foreground/20 backdrop-blur-sm rounded-lg p-2"
                >
                  <div className="flex items-center space-x-2">
                    <Star className="h-3 w-3 text-secondary" />
                    <span className="text-primary-foreground text-xs font-medium">You are here</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-4 left-4 bg-primary-foreground/20 backdrop-blur-sm rounded-lg p-2"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-primary-foreground text-xs font-medium">Railway Station</span>
                  </div>
                </motion.div>
              </div>

              {/* Map controls */}
              <div className="mt-4 flex justify-center space-x-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded text-xs font-medium hover:bg-primary-foreground/30 transition-colors duration-300"
                >
                  Satellite View
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded text-xs font-medium hover:bg-primary-foreground/30 transition-colors duration-300"
                >
                  Street View
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
