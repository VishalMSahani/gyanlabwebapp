import Link from "next/link";

import { GiDna1, GiChemicalDrop } from "react-icons/gi";
const HomeCTA = () => {
  return (
    <section className="relative py-12 bg-secondary rounded-lg mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden my-16 min-h-[160px] flex items-center justify-center">
      {/* Main content, keep this simple and centered */}
      <div className="relative z-20 text-center">
        <span className="inline-block bg-white/50 text-primary text-sm font-semibold px-4 py-1 rounded-full mb-4">
          Best Learning Platform
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Ready To Start <span className="text-primary">Learning</span>?
        </h2>
        <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
          Join thousands of learners and take the first step toward your future today.
        </p>
        <Link 
          href="/courses"
          className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
        >
          Explore Course Now
        </Link>
      </div>
      {/* Re-introducing simplified decorative elements with precise, non-overlapping positioning */}
      <div className="absolute -top-10 -left-10 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
      <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-primary/10 rounded-full z-0"></div>
      <div className="absolute top-5 left-5 w-16 h-16 border-4 border-primary rounded-full opacity-50 z-0"></div>
      <div className="absolute bottom-5 right-5 w-20 h-20 border-4 border-primary rounded-full opacity-50 z-0"></div>     
      <GiDna1 className="absolute top-1/2 left-2 rotate-45  overflow-hidden z-10"
      size={50}/>
      
      <GiChemicalDrop className="absolute top-1/6 left-3/4 rotate-45  overflow-hidden z-10"
      size={50}/>
    </section>
  );
};

export default HomeCTA;
