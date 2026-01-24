import Link from "next/link";
import { FaInstagram } from "react-icons/fa";


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
                <Link href="/contact" className="btn-flip" data-back="Services" data-front="Services" />
                <Link href="/contact" className="btn-flip active" data-back="Contact" data-front="Contact" />
              </div>

            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-6 py-12 text-center">
            <h2 className="text-2xl font-semibold mb-6">My Instagram</h2>
            <a
            href="https://www.instagram.com/c.hac.art_c.hac.art/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-64 h-64 bg-white-0 hover:bg-gray-100 transition mx-auto"
            >
            <FaInstagram size={120} color="black" />
            </a>
        </section>

        <section className="mx-auto max-w-2xl px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Send an Email</h2>
        <form className="flex flex-col gap-4">
            <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
            />
            <button
            type="submit"
            className="btn-flip"
            data-back="Send"
            data-front="Send"
            />
        </form>
        </section>

      </div>
    </div>
  );
}