
import { ArrowRight, Play, BookOpen, Users, Award, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroSvg from "../../../public/vector-img/science-animate.svg"
const HomeHero = () => {
  return (
    <section className="relative bg-primary pb-20 overflow-hidden pt-40  ">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex -space-x-1">
                <div className="w-8 h-8 bg-tertiary-blue rounded-full flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <Award className="h-4 w-4 text-white" />
                </div>
              </div>
              <span className="text-sm font-medium text-primary/70">Trusted by 5000+ Students</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your Gateway to <span className="text-secondary">Conceptual Learning</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed font-light ">
              Join Wadala&apos;s premier coaching institute for SSC, HSC, and JEE Foundation. 
              Experience quality education with personalized attention in our state-of-the-art classrooms.
            </p>

            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-secondary" />
                <span className="text-sm text-foreground/70">99% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-secondary" />
                <span className="text-sm text-foreground/70">Expert Faculty</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-200 flex items-center justify-center space-x-2 group">
                <span>Join Offline Classes</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link 
                href="/youtube"
                className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Watch YouTube Videos</span>
              </Link>
            </div>
          </div>
          
          <div className="animate-fade-in relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
            <Image
            width={700} 
            height={700}
              src={HeroSvg} 
              alt="Students in classroom"
              className="relative  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
