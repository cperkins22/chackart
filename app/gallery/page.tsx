import Link from "next/link";

const paintings = [
  "/images/painting1.jpg",
  "/images/painting2.jpg",
  "/images/painting3.jpg",
  "/images/painting4.jpg",
  "/images/painting5.jpg",
  "/images/painting6.jpg",
  "/images/painting7.jpg",
  "/images/painting8.jpg",
  "/images/painting9.jpg",
  "/images/painting10.jpg",
];

export default function GalleryPage() {
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

        {/* HERO SECTION (Updated for Mobile) */}
        <section className="px-6 pt-12">
          <div className="mx-auto max-w-6xl">
            {/* Added flex-col for mobile stacking and re-ordering logic */}
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
              
              {/* LEFT BUTTONS - Order 2 on mobile, 1 on desktop */}
              <div className="flex gap-4 order-2 md:order-1">
                <Link href="/" className="btn-flip" data-back="About" data-front="About" />
                <Link
                  href="/gallery"
                  className="btn-flip active"
                  data-back="Gallery"
                  data-front="Gallery"
                />
              </div>

              {/* TITLE - Order 1 on mobile, 2 on desktop */}
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-center order-1 md:order-2">
                C.Hackett Art
              </h1>

              {/* RIGHT BUTTONS - Order 3 on all */}
              <div className="flex gap-4 order-3">
                <Link href="/services" className="btn-flip" data-back="Services" data-front="Services" />
                <Link href="/contact" className="btn-flip" data-back="Contact" data-front="Contact" />
              </div>

            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          {/* Changed gap-0 to gap-4 for better aesthetics */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {paintings.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Painting ${index + 1}`}
                // Added 'mb-4' for vertical spacing between images
                className="w-full mb-4 hover:scale-105 transition-transform duration-300 break-inside-avoid shadow-sm"
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}