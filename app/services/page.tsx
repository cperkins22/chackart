import Link from "next/link";

export default function ServicesPage() {
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
                <Link href="/" className="btn-flip " data-back="Gallery" data-front="About" />
                <Link href="/gallery" className="btn-flip" data-back="Gallery" data-front="Gallery" />
              </div>

              {/* TITLE */}
              <h1 className="text-4xl font-semibold tracking-tight text-center">
                C.Hackett.Art C.Hackett Art
              </h1>

              {/* RIGHT BUTTONS */}
              <div className="flex gap-4">
                <Link href="/services" className="btn-flip active" data-back="Services" data-front="Services" />
                <Link href="/contact" className="btn-flip" data-back="Contact" data-front="Contact" />
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}