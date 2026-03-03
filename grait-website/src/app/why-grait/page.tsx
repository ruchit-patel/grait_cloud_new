import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function WhyGrait() {
  return (
    <main className="bg-[#0d1f3c]">
      <Navbar />

      {/* Hero section with why_grait_hero.png background */}
      <section className="relative w-full h-screen flex flex-col items-start justify-center overflow-visible">
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/why_grait_hero.png"
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
              The Shift
            </span>
          </h1>
          <p className="text-[20px] md:text-[22px] text-gray-300 font-normal leading-relaxed max-w-2xl mb-6">
            We're past the AI hype phase.<br />
            The real challenge today is not intelligence,
          </p>
          <p className="text-[20px] md:text-[22px] text-white font-bold leading-relaxed max-w-[600px]">
            It's operability.
          </p>
        </div>
      </section>

      {/* The GRAIT Philosophy card section */}
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d1f3c] mb-8">
              The GRAIT Philosophy
            </h2>
            <p className="text-[17px] text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Cloud and AI must run reliably every day, at scale, without hero engineers or fragile setups.
              <br className="hidden md:block" />
              GRAIT is designed as an operational platform — not a consulting exercise.
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes That Matter section */}
      <section className="w-full pt-2 pb-20 px-6 bg-[#0a1f3d]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16">
            <span className="text-[#00cccf]">Outcomes</span> That Matter
          </h2>

          {/* Grid of 4 outcome cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Faster cloud adoption */}
            <div className="group flex flex-col gap-6 rounded-2xl border border-[#1a4a7a] bg-[#0d2847] p-8 transition-all duration-300 hover:border-[#0099CC] hover:bg-gradient-to-br hover:from-[#0099CC]/20 hover:to-[#0099CC]/5 hover:shadow-[0_0_40px_rgba(0,153,204,0.6),inset_0_0_30px_rgba(0,153,204,0.15)] cursor-pointer">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="/faster_cloud.svg"
                  alt="Faster cloud adoption with controlled operational risk"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[17px] text-[#00cccf] font-semibold leading-relaxed group-hover:text-[#00BFBF] transition-colors duration-300">
                Faster cloud<br />
                adoption with<br />
                controlled<br />
                operational risk
              </h3>
            </div>

            {/* Card 2 - Structural cost efficiency */}
            <div className="group flex flex-col gap-6 rounded-2xl border border-[#1a4a7a] bg-[#0d2847] p-8 transition-all duration-300 hover:border-[#0099CC] hover:bg-gradient-to-br hover:from-[#0099CC]/20 hover:to-[#0099CC]/5 hover:shadow-[0_0_40px_rgba(0,153,204,0.6),inset_0_0_30px_rgba(0,153,204,0.15)] cursor-pointer">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="/money.svg"
                  alt="Structural cost efficiency and predictable infrastructure spend"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[17px] text-[#00cccf] font-semibold leading-relaxed group-hover:text-[#00BFBF] transition-colors duration-300">
                Structural cost<br />
                efficiency and<br />
                predictable<br />
                infrastructure spend
              </h3>
            </div>

            {/* Card 3 - Reduced dependency */}
            <div className="group flex flex-col gap-6 rounded-2xl border border-[#1a4a7a] bg-[#0d2847] p-8 transition-all duration-300 hover:border-[#0099CC] hover:bg-gradient-to-br hover:from-[#0099CC]/20 hover:to-[#0099CC]/5 hover:shadow-[0_0_40px_rgba(0,153,204,0.6),inset_0_0_30px_rgba(0,153,204,0.15)] cursor-pointer">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="/dependancy.svg"
                  alt="Reduced dependency on people-heavy DevOps teams"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[17px] text-[#00cccf] font-semibold leading-relaxed group-hover:text-[#00BFBF] transition-colors duration-300">
                Reduced<br />
                dependency on<br />
                people-heavy<br />
                DevOps teams
              </h3>
            </div>

            {/* Card 4 - Cloud operations that scale */}
            <div className="group flex flex-col gap-6 rounded-2xl border border-[#1a4a7a] bg-[#0d2847] p-8 transition-all duration-300 hover:border-[#0099CC] hover:bg-gradient-to-br hover:from-[#0099CC]/20 hover:to-[#0099CC]/5 hover:shadow-[0_0_40px_rgba(0,153,204,0.6),inset_0_0_30px_rgba(0,153,204,0.15)] cursor-pointer">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="/platform.svg"
                  alt="Cloud operations that scale as a platform capability"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[17px] text-[#00cccf] font-semibold leading-relaxed group-hover:text-[#00BFBF] transition-colors duration-300">
                Cloud operations that<br />
                scale as a platform<br />
                capability
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Who GRAIT Is For section */}
      <section className="relative w-full py-40 px-6 overflow-hidden min-h-[700px]">
        {/* Background image */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <Image
            src="/why_grait2_bg.png"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Teal top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#00BFBF]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16">
            Who <span className="text-[#00cccf]">GRAIT</span> Is For
          </h2>

          {/* Grid of 4 target audience cards with dividers */}
          <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-0">
            {/* Card 1 - Enterprises modernizing */}
            <div className="flex-1 flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 relative flex-shrink-0 mb-6">
                <Image
                  src="/infrastructure.svg"
                  alt="Enterprises modernizing legacy infrastructure"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[18px] md:text-[20px] text-white font-semibold leading-relaxed">
                Enterprises<br />
                modernizing<br />
                legacy infrastructure
              </h3>
            </div>

            {/* Divider 1 */}
            <div className="hidden md:block w-px h-32 bg-gradient-to-b from-[#00cccf] to-[#00cccf]/40" />

            {/* Card 2 - Organizations adopting AI */}
            <div className="flex-1 flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 relative flex-shrink-0 mb-6">
                <Image
                  src="/optimized.svg"
                  alt="Organizations adopting AI at scale"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[18px] md:text-[20px] text-white font-semibold leading-relaxed">
                Organizations<br />
                adopting<br />
                AI at scale
              </h3>
            </div>

            {/* Divider 2 */}
            <div className="hidden md:block w-px h-32 bg-gradient-to-b from-[#00cccf] to-[#00cccf]/40" />

            {/* Card 3 - Teams struggling */}
            <div className="flex-1 flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 relative flex-shrink-0 mb-6">
                <Image
                  src="/platform.svg"
                  alt="Teams struggling with cloud sprawl and DevOps complexity"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[18px] md:text-[20px] text-white font-semibold leading-relaxed">
                Teams struggling with<br />
                cloud sprawl and<br />
                DevOps complexity
              </h3>
            </div>

            {/* Divider 3 */}
            <div className="hidden md:block w-px h-32 bg-gradient-to-b from-[#00cccf] to-[#00cccf]/40" />

            {/* Card 4 - Leaders who want predictability */}
            <div className="flex-1 flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 relative flex-shrink-0 mb-6">
                <Image
                  src="/management.svg"
                  alt="Leaders who want predictability, not firefighting"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[18px] md:text-[20px] text-white font-semibold leading-relaxed">
                Leaders who<br />
                want predictability,<br />
                not firefighting
              </h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
