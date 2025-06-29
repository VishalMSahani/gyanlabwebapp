"use client"

import Link from "next/link";
import { FaInstagram, FaYoutube, FaFacebook, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBook, FaUserGraduate } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">About Gyanlab</h4>
            <p className="text-white/80 text-sm">
              Providing quality education and comprehensive coaching for all major exams
              with a focus on conceptual clarity and practical knowledge.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="flex items-center gap-2 text-white/80 hover:text-secondary transition-colors text-sm">
                <FaUserGraduate className="h-4 w-4" /> About Us
              </Link>
              <Link href="/notes" className="flex items-center gap-2 text-white/80 hover:text-secondary transition-colors text-sm">
                <FaBook className="h-4 w-4" /> Notes
              </Link>
              <Link href="/courses" className="flex items-center gap-2 text-white/80 hover:text-secondary transition-colors text-sm">
                <FaBook className="h-4 w-4" /> Courses
              </Link>
              <Link href="/contact" className="flex items-center gap-2 text-white/80 hover:text-secondary transition-colors text-sm">
                <FaEnvelope className="h-4 w-4" /> Contact
              </Link>
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Popular Courses</h4>
            <div className="space-y-2">
              <p className="text-white/80 text-sm">SSC Foundation</p>
              <p className="text-white/80 text-sm">HSC Science</p>
              <p className="text-white/80 text-sm">JEE Foundation</p>
              <p className="text-white/80 text-sm">State Board</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="h-4 w-4 text-secondary" />
                <a href="tel:09167823177" className="text-white/80 hover:text-secondary transition-colors text-sm">
                  091678 23177
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="h-4 w-4 text-secondary" />
                <a href="mailto:contactgyanlab@gmail.com" className="text-white/80 hover:text-secondary transition-colors text-sm">
                  contactgyanlab@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="h-12 w-12 text-secondary" />
                  <p className="text-white/80 text-sm mt-2">
                  Shop No 23, Ganesh Nagar, Siddhivinayak Tower, Salt Pan Rd, R J Gaikwad Wadala East, Wadala, Mumbai, Maharashtra 400037
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Gyanlab Tutorial. All rights reserved.
              </p>
              <span className="text-white/30 mx-2">|</span>
              <p className="text-white/60 text-sm">
                Designed and developed by <a href="https://www.linkedin.com/in/vishalsahani/" target="_blank" rel="noopener noreferrer" className="underline hover:text-secondary">Vishal Sahani</a>
              </p>
              <span className="text-white/30 mx-2">|</span>
              <Link href="/terms" className="text-white/60 text-xs hover:text-secondary underline">Terms &amp; Conditions</Link>
              <span className="text-white/30 mx-2">|</span>
              <Link href="/privacy" className="text-white/60 text-xs hover:text-secondary underline">Privacy Policy</Link>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-secondary transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
