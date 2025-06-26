
const CoursesCTA = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Contact us today to discuss which course is perfect for you
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-light transition-colors">
            Schedule a Consultation
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesCTA;
