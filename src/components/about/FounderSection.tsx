import Image from "next/image";
const FounderSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image 
              width={200}
              height={500}
              loading="lazy"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face" 
              alt="Founder"
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
              
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Message from Our Founder</h2>
            <p className="text-lg text-gray-600 mb-6">
              Welcome to Gyanlab Tutorial! With over 15 years of experience in education, 
              I founded this institute with a vision to make quality education accessible to every student in Wadala and beyond.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our approach focuses on conceptual clarity rather than rote learning. We believe that 
              when students understand the &aposwhy&apos behind every concept, they naturally excel in their academic pursuits.
            </p>
            <div className="border-l-4 border-primary pl-6">
              <p className="text-lg font-semibold text-gray-900 mb-2">Prof. Rajesh Kumar</p>
              <p className="text-gray-600">Founder & Director</p>
              <p className="text-gray-600">M.Sc. Physics, B.Ed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
