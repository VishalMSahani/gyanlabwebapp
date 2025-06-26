"use client"

import { useState } from "react";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import CategoryFilter from "@/components/gallery/CategoryFilter";
import ImageModal from "@/components/gallery/ImageModal";
import StatisticsSection from "@/components/gallery/StatisticsSection";
import { galleryImages, galleryCategories } from "../../data/galleryData"
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="pt-16">
      <GalleryHero />
      <CategoryFilter 
        categories={galleryCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <GalleryGrid 
        images={filteredImages}
        onImageSelect={setSelectedImage}
      />
      <ImageModal 
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
      <StatisticsSection />
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Our Campus Yourself
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a visit to see our facilities and meet our faculty
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule Campus Visit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
