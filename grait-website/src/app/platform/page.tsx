import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowCard from "@/components/GlowCard";
import Image from "next/image";

export default function Platform() {
  return (
    <main className="bg-[#0d1f3c]">
      <Navbar />

      {/* Hero section with platform_hero.webp background */}
      <section className="relative w-full h-screen flex flex-col items-start justify-center overflow-visible">
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/platform_hero.webp"
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
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-[#00e5ff] via-[#00c3ff] to-[#0099ff] bg-clip-text text-transparent">
              DevOps AI Assistant
            </span>
          </h1>
          <p className="text-2xl md:text-2xl text-white font-semibold mb-4 max-w-2xl">
            The DevOps AI Assistant is the intelligence layer of GRAIT.
          </p>
          <p className="text-[16px] text-gray-300 leading-relaxed max-w-[480px]">
            It simplifies cloud onboarding, migration,<br />
            and day-to-day DevOps operations — <br />
            reducing dependency on large, specialized
            teams.
          </p>
        </div>
      </section>

      {/* "What It Does" card section */}
      <section className="relative w-full px-6 -mt-28 pb-16">
        {/* Gradient background SVG behind the card */}
        <div className="absolute left-0 right-0 top-[-200px] h-[556px] pointer-events-none select-none z-0">
          <Image
            src="/Rectanglebg.svg"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <GlowCard>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 pb-2 bg-gradient-to-r from-[#0d1f3c] via-[#0099CC] to-[#00BFBF] bg-clip-text text-transparent animate-gradient bg-300 drop-shadow-sm">
              What It Does
            </h2>
            <p className="text-[17px] text-gray-700 font-semibold leading-relaxed max-w-3xl mx-auto">
              The AI Agent continuously plans, <span className="font-semibold text-[#00BFBF] relative inline-block hover:scale-110 transition-transform cursor-default">executes</span>, <span className="font-semibold text-[#0099CC] relative inline-block hover:scale-110 transition-transform cursor-default">monitors</span>, and <span className="font-semibold text-[#00BFBF] relative inline-block hover:scale-110 transition-transform cursor-default">optimizes</span> <br className="hidden md:block" /> infrastructure workflows across environments.
              <br className="hidden md:block" />
              It transforms traditionally people-heavy, error prone <br className="hidden md:block" /> DevOps tasks into governed, repeatable platform actions.
            </p>
          </GlowCard>
        </div>
      </section>

      {/* Key Capabilities section */}
      <section className="w-full pt-2 py-20 px-6 bg-[#0a1f3d]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16">
            Key Capabilities
          </h2>

          {/* Grid of capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Automated cloud onboarding */}
            <div className="group flex flex-col gap-4 rounded-2xl border border-[#1a4a7a] bg-[#0d2847] p-8 transition-all duration-300 hover:border-[#0099CC] hover:bg-gradient-to-br hover:from-[#0099CC]/20 hover:to-[#0099CC]/5 hover:shadow-[0_0_40px_rgba(0,153,204,0.6),inset_0_0_30px_rgba(0,153,204,0.15)] cursor-pointer">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="/automated_cloud.svg"
                  alt="Automated cloud onboarding"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[17px] text-[#00cccf] font-semibold leading-relaxed group-hover:text-[#00BFBF] transition-colors duration-300">
                Automated cloud onboarding (AWS, Azure, GCP, private cloud)
              </h3>
            </div>

            {/* Card 2 - GenAI-driven migration */}
            <div className="group flex flex-col gap-4 rounded-2xl border border-[#1a4a7a] bg-[#0d2847] p-8 transition-all duration-300 hover:border-[#0099CC] hover:bg-gradient-to-br hover:from-[#0099CC]/20 hover:to-[#0099CC]/5 hover:shadow-[0_0_40px_rgba(0,153,204,0.6),inset_0_0_30px_rgba(0,153,204,0.15)] cursor-pointer">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="/genai.svg"
                  alt="GenAI-driven migration"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[17px] text-[#00cccf] font-semibold leading-relaxed group-hover:text-[#00BFBF] transition-colors duration-300">
                AI driven migration planning and execution
              </h3>
            </div>

            {/* Card 3 - Infrastructure provisioning */}
            <div className="group flex flex-col gap-4 rounded-2xl border border-[#1a4a7a] bg-[#0d2847] p-8 transition-all duration-300 hover:border-[#0099CC] hover:bg-gradient-to-br hover:from-[#0099CC]/20 hover:to-[#0099CC]/5 hover:shadow-[0_0_40px_rgba(0,153,204,0.6),inset_0_0_30px_rgba(0,153,204,0.15)] cursor-pointer">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="/infra.svg"
                  alt="Infrastructure provisioning"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[17px] text-[#00cccf] font-semibold leading-relaxed group-hover:text-[#00BFBF] transition-colors duration-300">
                Infrastructure recommendation, provisioning, & configuration
              </h3>
            </div>

            {/* Card 4 - CI/CD */}
            <div className="group flex flex-col gap-4 rounded-2xl border border-[#1a4a7a] bg-[#0d2847] p-8 transition-all duration-300 hover:border-[#0099CC] hover:bg-gradient-to-br hover:from-[#0099CC]/20 hover:to-[#0099CC]/5 hover:shadow-[0_0_40px_rgba(0,153,204,0.6),inset_0_0_30px_rgba(0,153,204,0.15)] cursor-pointer">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="/cloud2.svg"
                  alt="CI/CD automation"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[17px] text-[#00cccf] font-semibold leading-relaxed group-hover:text-[#00BFBF] transition-colors duration-300">
                CI/CD and environment setup automation
              </h3>
            </div>

            {/* Card 5 - Observability */}
            <div className="group flex flex-col gap-4 rounded-2xl border border-[#1a4a7a] bg-[#0d2847] p-8 transition-all duration-300 hover:border-[#0099CC] hover:bg-gradient-to-br hover:from-[#0099CC]/20 hover:to-[#0099CC]/5 hover:shadow-[0_0_40px_rgba(0,153,204,0.6),inset_0_0_30px_rgba(0,153,204,0.15)] cursor-pointer">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="/observ.svg"
                  alt="Observability"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[17px] text-[#00cccf] font-semibold leading-relaxed group-hover:text-[#00BFBF] transition-colors duration-300">
                Observability, monitoring, and troubleshooting
              </h3>
            </div>

            {/* Card 6 - Cloud-agnostic */}
            <div className="group flex flex-col gap-4 rounded-2xl border border-[#1a4a7a] bg-[#0d2847] p-8 transition-all duration-300 hover:border-[#0099CC] hover:bg-gradient-to-br hover:from-[#0099CC]/20 hover:to-[#0099CC]/5 hover:shadow-[0_0_40px_rgba(0,153,204,0.6),inset_0_0_30px_rgba(0,153,204,0.15)] cursor-pointer">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="/cloud2.svg"
                  alt="Cloud-agnostic deployment"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[17px] text-[#00cccf] font-semibold leading-relaxed group-hover:text-[#00BFBF] transition-colors duration-300">
                Cloud agnostic deployment with no vendor lock-in
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principle section */}
      <section className="relative w-full pt-16 pb-32 px-6 overflow-hidden min-h-[500px]">
        {/* bg2.svg background */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <Image
            src="/bg2.svg"
            alt=""
            fill
            className="object-cover object-bottom"
          />
        </div>

        {/* Teal top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#00BFBF]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
            Core Principle
          </h2>
          <p className="text-2xl md:text-3xl text-white font-semibold leading-relaxed">
            DevOps, without cloud lock-in.
            <br />
            Operate once. Scale anytime.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
