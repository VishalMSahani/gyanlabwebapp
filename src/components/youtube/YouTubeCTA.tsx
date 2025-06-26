
const YouTubeCTA = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready for Personalized Learning?
        </h2>
        <p className="text-xl text-orange-100 mb-8">
          While our YouTube videos are great for learning, join our offline classes for personalized attention and doubt clearing
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-accent px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Join Offline Classes
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-accent transition-all duration-200">
            Subscribe to Channel
          </button>
        </div>
      </div>
    </section>
  );
};

export default YouTubeCTA;
