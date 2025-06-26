
import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";
const YouTubeSection = () => {
  return (
    <section className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Learn from Our YouTube Channel
          </h2>
          <p className="text-xl text-primary/70">
            Access free educational content and get a preview of our teaching style
          </p>

        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-video bg-primary/5 rounded-xl flex items-center justify-center mb-6 border border-primary/10">
              <div className="text-center">
                <Play className="h-16 w-16 text-secondary mx-auto mb-4" />
                <p className="text-primary/70">Latest Video from Gyanlab Tutorial</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Free Educational Content
            </h3>
            <p className="text-primary/70 mb-6">
              Subscribe to our YouTube channel for regular updates on important topics, 
              solved examples, and exam tips. Get a taste of our teaching methodology before joining our offline classes.
            </p>
            <Link 
              href="/youtube"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Visit YouTube Channel</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
