"use client";

import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import Image from 'next/image';
import Logo from "../../../public/logo_gyanlab.png";

const ContactMap = () => {
  const position = { lat: 19.01771967397987, lng: 72.86859552441508 };

  // IMPORTANT: You need to create a .env.local file in the `classeswebapp` directory
  // and add your Google Maps API key like this:
  // NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="YOUR_API_KEY"
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="py-16 bg-gray-50 text-center">
        <p>Google Maps API key is missing. Please add it to your environment variables.</p>
        <p>Create a .env.local file with NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=&quot;YOUR_KEY&quot;</p>
      </div>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us on the Map</h2>
          <p className="text-xl text-gray-600">
            Visit our tutorial, conveniently located in Wadala, Mumbai.
          </p>
        </div>
        <div className="h-96 rounded-2xl overflow-hidden">
          <APIProvider apiKey={apiKey}>
            <Map
              defaultCenter={position}
              defaultZoom={17}
              mapId="gyanlab-map"
              gestureHandling={'greedy'}
              disableDefaultUI={true}
            >
              <AdvancedMarker position={position}>
                <Image src={Logo} alt="Gyanlab Tutorial" width={60} height={60} />
              </AdvancedMarker>
            </Map>
          </APIProvider>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
