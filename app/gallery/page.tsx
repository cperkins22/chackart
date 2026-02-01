"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface Painting {
  src: string;
  title: string;
}

const paintings: Painting[] = [
  { src: "/images/painting1.jpg", title: "Untitled" },
  { src: "/images/painting2.jpg", title: "Untitled" },
  { src: "/images/painting3.jpg", title: "Untitled" },
  { src: "/images/painting4.jpg", title: "Untitled" },
  { src: "/images/painting5.jpg", title: "Untitled" },
  { src: "/images/painting6.jpg", title: "Untitled" },
  { src: "/images/painting7.jpg", title: "Untitled" },
  { src: "/images/painting8.jpg", title: "Untitled" },
  { src: "/images/painting9.jpg", title: "Untitled" },
  { src: "/images/painting10.jpg", title: "Untitled" },
];

export default function GalleryPage() {

  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const openModal = (painting: Painting) => {
    setSelectedPainting(painting);
    setIsZoomed(false);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setSelectedPainting(null);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-black">
      
      {/* Paper texture layer */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url('/textures/cardboard.png')",
          backgroundRepeat: "repeat",
          opacity: 0.7,
        }}
      />

      {/* Page content */}
      <div className="relative">

        {/* HERO SECTION */}
        <section className="px-6 pt-12">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
              
              {/* LEFT BUTTONS */}
              <div className="flex gap-4 order-2 md:order-1">
                <Link href="/" className="btn-flip" data-back="About" data-front="About" />
                <Link href="/gallery" className="btn-flip active" data-back="Gallery" data-front="Gallery" />
              </div>

              {/* TITLE */}
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-center order-1 md:order-2">
                C.Hackett Art
              </h1>

              {/* RIGHT BUTTONS */}
              <div className="flex gap-4 order-3">
                <Link href="/services" className="btn-flip" data-back="Services" data-front="Services" />
                <Link href="/contact" className="btn-flip" data-back="Contact" data-front="Contact" />
              </div>

            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {paintings.map((painting, index) => (
              <div key={index} className="mb-4 break-inside-avoid">
                <img
                  src={painting.src}
                  alt={painting.title}
                  onClick={() => openModal(painting)}
                  className="w-full cursor-pointer hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-lg"
                />
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* FULL SCREEN MODAL */}
      {selectedPainting && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeModal}
        >
          
          {/* Close Button */}
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-50 p-2"
          >
            <X size={40} />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-h-screen w-full max-w-5xl flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image area
          >
            
            {/* Main Image */}
            <div className="relative overflow-hidden cursor-zoom-in">
              <img
                src={selectedPainting.src}
                alt={selectedPainting.title}
                onClick={() => setIsZoomed(!isZoomed)}
                className={`
                  transition-transform duration-300 ease-in-out
                  max-h-[80vh] w-auto object-contain
                  ${isZoomed ? "scale-150 cursor-zoom-out" : "scale-100 cursor-zoom-in"}
                `}
              />
            </div>

            {/* Title Caption */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-light text-white tracking-widest uppercase">
                {selectedPainting.title}
              </h3>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}