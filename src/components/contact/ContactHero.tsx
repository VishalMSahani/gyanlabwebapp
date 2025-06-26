const ContactHero = () => {
  return (
    <div className="relative bg-primary">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Get in <span className="text-secondary">Touch</span></h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
          &quot;We desire to teach what we know and learn what we are yet to know, because we believe, &quot;Teaching is a lifelong learning journey&quot;
        </p>

      </div>
    </div>
  );
};

export default ContactHero;
