import Link from "next/link";
import { FaInstagram, FaEnvelope } from "react-icons/fa"; // Added FaEnvelope icon

export default function ContactPage() {
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
        
        {/* HERO SECTION (Mobile Fixed) */}
        <section className="px-6 pt-12">
          <div className="mx-auto max-w-6xl">

            {/* TOP ROW: Flex Column on Mobile, Row on Desktop */}
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-0">

              {/* LEFT BUTTONS - Order 2 on mobile, 1 on desktop */}
              <div className="flex gap-4 order-2 md:order-1">
                {/* Fixed Typo: changed data-back from "Gallery" to "About" */}
                <Link href="/" className="btn-flip" data-back="About" data-front="About" />
                <Link href="/gallery" className="btn-flip" data-back="Gallery" data-front="Gallery" />
              </div>

              {/* TITLE - Order 1 on mobile, 2 on desktop */}
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-center order-1 md:order-2">
                 C.Hackett Art
              </h1>

              {/* RIGHT BUTTONS - Order 3 on all */}
              <div className="flex gap-4 order-3">
                {/* Fixed Link: changed href from "/contact" to "/services" */}
                <Link href="/services" className="btn-flip" data-back="Services" data-front="Services" />
                <Link href="/contact" className="btn-flip active" data-back="Contact" data-front="Contact" />
              </div>

            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="mx-auto max-w-4xl px-6 py-24">
           <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24">
              
              {/* INSTAGRAM BLOCK */}
              <div className="flex flex-col items-center text-center group cursor-pointer">
                  <h2 className="text-2xl font-semibold mb-6">Instagram</h2>
                  <a
                    href="https://www.instagram.com/c.hac.art_c.hac.art/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-40 h-40 bg-zinc-50 border border-zinc-200 rounded-full shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300"
                  >
                    <FaInstagram size={60} className="text-zinc-800" />
                  </a>
                  <p className="mt-4 text-zinc-500">@c.hac.art_c.hac.art</p>
              </div>

              {/* EMAIL BLOCK */}
              <div className="flex flex-col items-center text-center group cursor-pointer">
                  <h2 className="text-2xl font-semibold mb-6">Email Me</h2>
                  {/* The mailto: link triggers the default email app */}
                  <a
                    href="mailto:your.email@example.com" // REPLACE THIS WITH YOUR REAL EMAIL
                    className="flex items-center justify-center w-40 h-40 bg-zinc-50 border border-zinc-200 rounded-full shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300"
                  >
                    <FaEnvelope size={60} className="text-zinc-800" />
                  </a>
                  <p className="mt-4 text-zinc-500">Click to send a message</p>
              </div>

           </div>
        </section>

      </div>
    </div>
  );
}