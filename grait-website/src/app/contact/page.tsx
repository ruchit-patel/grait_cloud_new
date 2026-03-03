import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="bg-[#0d1f3c]">
      <Navbar />

      {/* Hero section with contact_us.png background */}
      <section className="relative w-full h-screen flex flex-col items-start justify-center overflow-visible">
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/contact_us.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a33]/80 via-[#002447]/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8">
            <span className="bg-gradient-to-r from-[#00e5ff] via-[#00c3ff] to-[#0099ff] bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-[20px] md:text-[22px] text-gray-300 font-normal leading-relaxed max-w-2xl mb-6">
            Let's Build the Future of Cloud Operations
          </p>
          <p className="text-[20px] md:text-[22px] text-white font-bold leading-relaxed max-w-[600px]">
            GRAIT is launching soon.
          </p>
        </div>
      </section>

      {/* "If you're exploring" card section */}
      <section className="relative w-full px-6 -mt-32 pb-16">
        {/* Gradient background SVG behind the card */}
        <div className="absolute left-0 right-0 top-[-200px] h-[556px] pointer-events-none select-none z-0">
          <Image
            src="/Rectanglebg.svg"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-[#e8f4f8] rounded-[60px] px-12 py-14 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d1f3c] mb-12">
              If you're exploring
            </h2>

            {/* Grid of 3 categories with dividers */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
              {/* Category 1 */}
              <div className="flex-1 flex flex-col items-center px-6">
                <h3 className="text-[20px] md:text-[22px] text-[#00cccf] font-bold leading-relaxed mb-2">
                  Cloud<br />
                  Modernization
                </h3>
              </div>

              {/* Divider 1 */}
              <div className="hidden md:block w-px h-24 bg-gradient-to-b from-[#00cccf] to-[#00cccf]/40" />

              {/* Category 2 */}
              <div className="flex-1 flex flex-col items-center px-6">
                <h3 className="text-[20px] md:text-[22px] text-[#00cccf] font-bold leading-relaxed mb-2">
                  AI-ready<br />
                  infrastructure
                </h3>
              </div>

              {/* Divider 2 */}
              <div className="hidden md:block w-px h-24 bg-gradient-to-b from-[#00cccf] to-[#00cccf]/40" />

              {/* Category 3 */}
              <div className="flex-1 flex flex-col items-center px-6">
                <h3 className="text-[20px] md:text-[22px] text-[#00cccf] font-bold leading-relaxed mb-2">
                  Scalable,<br />
                  governed DevOps
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information section */}
      <section className="w-full pt-2 py-20 px-6 bg-[#0a1f3d]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00cccf] mb-8">
            We'd love to talk
          </h2>
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#00cccf]">
              Email
            </h3>
            <a
              href="mailto:hello@graitcloud.com"
              className="text-2xl md:text-3xl text-[#00cccf] hover:text-[#00e5ff] transition-colors"
            >
              hello@graitcloud.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
