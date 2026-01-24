import Link from "next/link";

export default function Home() {
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
                <Link href="/" className="btn-flip active" data-back="About" data-front="About" />
                <Link href="/gallery" className="btn-flip" data-back="Gallery" data-front="Gallery" />
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


        {/* SECTION 1 */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-col items-center gap-12 md:flex-row">

            <div className="w-full md:w-1/2 aspect-[4/3]">
              <img
                src={"/images/biography1.jpg"}
                alt="Description"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">
                About Us
              </h2>
              <p className="text-zinc-600 leading-7">
                Each eye-catching piece is unique and invites viewers to indulge their senses and simply enjoy the beauty of the moment by embracing spontaneity and intuition. 
                Chris Hackett art creates contemporary, abstract, captivating, and uplifting art.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
