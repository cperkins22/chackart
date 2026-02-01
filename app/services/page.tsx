import Link from "next/link";

// Placeholder data for your services - easy to edit!
const servicesData = [
  {
    title: "Prints",
    description: "",
    price: "Coming soon!",
  },
  {
    title: "Commissions",
    description: "",
    price: "Coming soon!",
  }
];

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
                <Link href="/services" className="btn-flip active" data-back="Services" data-front="Services" />
                <Link href="/contact" className="btn-flip" data-back="Contact" data-front="Contact" />
              </div>

            </div>
          </div>
        </section>

        {/* SERVICES LIST SECTION */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            
            {servicesData.map((service, index) => (
              <div 
                key={index} 
                className="flex flex-col justify-between border border-zinc-200 bg-white/50 p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-zinc-600 leading-7 mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-zinc-100">
                  <span className="font-medium text-zinc-900">{service.price}</span>
                </div>
              </div>
            ))}

          </div>
        </section>

      </div>
    </div>
  );
}