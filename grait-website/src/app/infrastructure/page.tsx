import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Infrastructure() {
  return (
    <main className="bg-[#0d1f3c]">
      <Navbar />

      {/* Hero section with infra_hero.png background */}
      <section className="relative w-full h-screen flex flex-col items-start justify-center overflow-visible">
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/infra_hero.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a33]/80 via-[#002447]/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full px-12 md:px-16 py-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8">
            <span className="bg-gradient-to-r from-[#00e5ff] via-[#00c3ff] to-[#0099ff] bg-clip-text text-transparent">
              Private Cloud
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#00e5ff] via-[#00c3ff] to-[#0099ff] bg-clip-text text-transparent">
              Infrastructure
            </span>
          </h1>
          <p className="text-[20px] md:text-[22px] text-gray-300 font-normal leading-relaxed max-w-2xl mb-8">
            GRAIT combines its AI DevOps layer with a<br />
            private cloud foundation built for AI<br />
            workloads and regulated environments.
          </p>
          <p className="text-[20px] md:text-[22px] text-gray-300 font-normal leading-relaxed max-w-[600px]">
            This ensures control, isolation, and<br />
            predictable performance — without<br />
            sacrificing flexibility.
          </p>
        </div>
      </section>

      {/* "What We Offer Today" card section */}
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
          <div className="bg-[#e8f4f8] rounded-3xl px-12 py-14 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d1f3c] mb-12">
              What We Offer Today
            </h2>

            {/* Grid of 4 offerings with dividers */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
              {/* Offering 1 */}
              <div className="flex-1 flex flex-col items-center px-6">
                <h4 className="text-[18px] md:text-[20px] text-[#4a5568] font-semibold leading-relaxed">
                  Dedicated CPU and<br />
                  GPU servers
                </h4>
              </div>

              {/* Divider 1 */}
              <div className="hidden md:block w-px h-16 bg-gradient-to-b from-[#00cccf] to-[#00cccf]/40" />

              {/* Offering 2 */}
              <div className="flex-1 flex flex-col items-center px-6">
                <h4 className="text-[18px] md:text-[20px] text-[#4a5568] font-semibold leading-relaxed">
                  Network isolation and<br />
                  security controls
                </h4>
              </div>

              {/* Divider 2 */}
              <div className="hidden md:block w-px h-16 bg-gradient-to-b from-[#00cccf] to-[#00cccf]/40" />

              {/* Offering 3 */}
              <div className="flex-1 flex flex-col items-center px-6">
                <h4 className="text-[18px] md:text-[20px] text-[#4a5568] font-semibold leading-relaxed">
                  Managed infrastructure
                  operations
                </h4>
              </div>

              {/* Divider 3 */}
              <div className="hidden md:block w-px h-16 bg-gradient-to-b from-[#00cccf] to-[#00cccf]/40" />

              {/* Offering 4 */}
              <div className="flex-1 flex flex-col items-center px-6">
                <h4 className="text-[18px] md:text-[20px] text-[#4a5568] font-semibold leading-relaxed">
                  AI-optimized<br />
                  configurations
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Private Cloud with GRAIT section */}
      <section className="w-full py-20 px-6 bg-[#0a1f3d]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16">
            Why Private Cloud with{" "}
            <span className="text-[#00cccf]">GRAIT</span>
          </h2>

          {/* Grid of 4 benefit cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Full control */}
            <div className="flex flex-col gap-6 rounded-2xl border border-[#1a4a7a] bg-[#0d2847] p-8">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="/full_control.svg"
                  alt="Full control over data and workloads"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[17px] text-[#00cccf] font-semibold leading-relaxed">
                Full control over<br />
                data and workloads
              </h3>
            </div>

            {/* Card 2 - Cost transparency */}
            <div className="flex flex-col gap-6 rounded-2xl border border-[#1a4a7a] bg-[#0d2847] p-8">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="/cost.svg"
                  alt="Cost transparency and predictability"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[17px] text-[#00cccf] font-semibold leading-relaxed">
                Cost transparency<br />
                and predictability
              </h3>
            </div>

            {/* Card 3 - Secure, isolated */}
            <div className="flex flex-col gap-6 rounded-2xl border border-[#1a4a7a] bg-[#0d2847] p-8">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="/secure.svg"
                  alt="Secure, isolated environments"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[17px] text-[#00cccf] font-semibold leading-relaxed">
                Secure, isolated<br />
                environments
              </h3>
            </div>

            {/* Card 4 - Optimized for AI */}
            <div className="flex flex-col gap-6 rounded-2xl border border-[#1a4a7a] bg-[#0d2847] p-8">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="/optimised.svg"
                  alt="Optimized for AI and high-performance workloads"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[17px] text-[#00cccf] font-semibold leading-relaxed">
                Optimized for AI and<br />
                high-performance<br />
                workloads
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Future-Ready Data Center Vision section */}
      <section className="relative w-full py-32 px-6 overflow-hidden min-h-[600px]">
        {/* infra_path_bg.svg background */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <Image
            src="/infra_path_bg.svg"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16">
            Future-Ready Data Center Vision
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
            {/* Left side - Text content */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Built to Scale
                </h3>
                <p className="text-[18px] text-gray-300 leading-relaxed">
                  GRAIT's infrastructure is designed with a clear<br />
                  roadmap toward full-scale data center operations.
                </p>
              </div>

              <div>
                <p className="text-[18px] text-gray-300 leading-relaxed">
                  Each phase builds on the last<br />
                  — without re-architecture or<br />
                  operational disruption.
                </p>
              </div>
            </div>

            {/* Right side - Path image */}
            <div className="relative w-full h-full flex items-center justify-center lg:justify-end">
              <Image
                src="/path_infra.png"
                alt="Infrastructure roadmap path"
                width={1400}
                height={700}
                className="w-full h-auto max-w-none scale-110 lg:scale-150 origin-center lg:origin-right"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
