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
        
        {/* HERO SECTION */}
        <section className="px-6 pt-12">
          <div className="mx-auto max-w-6xl">

            {/* TOP ROW: buttons + title */}
            <div className="flex items-center justify-between">

              {/* LEFT BUTTONS */}
              <div className="flex gap-4">
                <Link href="/" className="btn-flip " data-back="About" data-front="About" />
                <Link href="/gallery" className="btn-flip active" data-back="Gallery" data-front="Gallery" />
              </div>

              {/* TITLE */}
              <h1 className="text-4xl font-semibold tracking-tight text-center">
                C.Hackett.Art C.Hackett Art
              </h1>

              {/* RIGHT BUTTONS */}
              <div className="flex gap-4">
                <Link href="/services" className="btn-flip" data-back="Services" data-front="Services" />
                <Link href="/contact" className="btn-flip" data-back="Contact" data-front="Contact" />
              </div>

            </div>
          </div>
        </section>


        <section className="mx-auto max-w-6xl px-6 py-12">
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-0">
                {paintings.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Painting ${index + 1}`}
                    className="w-full hover:scale-105 transition-transform duration-300 break-inside-avoid"
                />

                ))}
            </div>
        </section>



      </div>
    </div>
  );
}