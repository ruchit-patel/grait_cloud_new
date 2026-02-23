import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Platform() {
  return (
    <main className="bg-[#0d1f3c]">
      <Navbar />

      {/* Hero section with platform_hero.webp background */}
      <section className="relative w-full h-screen flex flex-col items-start justify-center overflow-hidden">
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
        <div className="relative z-10 w-full px-12 md:px-16 py-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-[#00e5ff] via-[#00c3ff] to-[#0099ff] bg-clip-text text-transparent">
              DevOps AI Agents
            </span>
          </h1>
          <p className="text-2xl md:text-2xl text-white font-semibold mb-4 max-w-2xl">
            The DevOps AI Agent is the intelligence layer of GRAIT.
          </p>
          <p className="text-[16px] text-gray-300 leading-relaxed max-w-[480px]">
            It automates cloud onboarding, migration,<br />
            and day-to-day DevOps operations — <br />
            reducing dependency on large, specialized
            teams.
          </p>
        </div>
      </section>

      {/* "What It Does" card section */}
      <section className="relative w-full px-6 -mt-16 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#e8f4f8] rounded-3xl px-12 py-14 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d1f3c] mb-6">
              What It Does
            </h2>
            <p className="text-[17px] text-gray-700 leading-relaxed max-w-4xl mx-auto">
              The AI Agent continuously plans, executes, monitors, and optimizes infrastructure workflows across environments.
              <br className="hidden md:block" />
              It transforms traditionally people-heavy, error-prone DevOps tasks into governed, repeatable platform actions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
