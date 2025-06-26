
const StatisticsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Facilities at a Glance</h2>
          <p className="text-xl text-gray-600">Modern infrastructure designed for optimal learning</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <p className="text-gray-600">Modern Classrooms</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">3</div>
            <p className="text-gray-600">Science Laboratories</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1</div>
            <p className="text-gray-600">Computer Lab</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-gray-600">Students Capacity</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
