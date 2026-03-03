import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center overflow-visible"
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay — left side for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f3c]/90 via-[#0d1f3c]/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-40 w-full">
        <div className="max-w-[600px]">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white leading-tight mb-6">
            A unified,<br/> AI Powered,{" "}<br/>
            <span className="text-[#00BFBF]">Multi-cloud</span>
            <br />
            <span className="text-[#00BFBF]">DevOps platform</span>
          </h1>

          {/* Subtext */}
          <p className="text-[16px] md:text-[17px] text-gray-300 leading-relaxed mb-10 max-w-[480px]">
            Build, migrate, and operate infrastructure across public cloud,
            private cloud, and hybrid environments — with speed, control, and
            intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="/platform"
              className="bg-[#0099CC] hover:bg-[#007FAA] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-colors duration-200"
            >
              Explore the Platform
            </Link>
            <Link
              href="/why-grait"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0d1f3c] text-[15px] font-semibold px-7 py-3 rounded-full transition-all duration-200"
            >
              Why GRAIT
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
