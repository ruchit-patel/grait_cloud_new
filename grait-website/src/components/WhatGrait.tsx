import Image from "next/image";

export default function WhatGrait() {
  return (
    <section className="w-full">

      {/* ── "What GRAIT is" card — floats over hero ── */}
      <div className="relative z-10 -mt-28 px-6 pb-0">
        <div className="bg-[#e8f4f8] rounded-3xl px-12 py-14 text-center max-w-5xl mx-auto shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d1f3c] mb-6">
            What GRAIT is
          </h2>
          <p className="text-[18px] md:text-[20px] text-gray-700 leading-relaxed max-w-3xl mx-auto">
            GRAIT is the world&apos;s first unified, GenAI-powered multi-cloud,
            multi-agent DevOps platform.
            <br className="hidden md:block" />
            It enables organizations to build, migrate, and operate
            infrastructure with speed, control, and intelligence across public
            cloud, private cloud, and hybrid environments.
          </p>
        </div>
      </div>

      {/* ── Problem / Difference split — text + images all in one row ── */}
      <div className="w-full flex flex-col md:flex-row">

        {/* LEFT — The Problem */}
        <div className="relative flex flex-col md:w-2/5 pt-16 pb-0 overflow-hidden bg-[#0d1f3c]">
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#8aa0b8] mb-5 leading-tight text-right px-12">
            The Problem
          </h3>
          <p className="text-[18px] text-gray-300 leading-relaxed text-right mb-8 px-12">
            Most cloud initiatives fail or stall because they are treated as
            one-off DevOps projects — dependent on large teams, manual effort,
            and institutional knowledge.
          </p>
          {/* Image — 75% width, pushed right to meet the divider */}
          <div className="flex justify-end mt-auto pl-8 pb-10">
            <div className="relative w-3/4 rounded-tl-[3rem] rounded-bl-2xl overflow-hidden shadow-2xl" style={{ height: "320px" }}>
              <Image
                src="/below_hero1.png"
                alt="The Problem"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Thick teal vertical divider — spans full height of the row */}
        <div className="hidden md:block w-[6px] bg-[#00BFBF] flex-shrink-0" />

        {/* RIGHT — The GRAIT Difference */}
        <div
          className="relative flex flex-col md:w-3/5 pt-16 pb-0 overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, #00cccc 18%, #0099CC 55%, #0077aa 100%)",
          }}
        >
          {/* Cloud overlay */}
          <div className="absolute right-[-20px] top-[10%] w-72 opacity-30 pointer-events-none select-none">
            <Image
              src="/cloud_overlay.png"
              alt=""
              width={360}
              height={240}
              className="w-full h-auto"
            />
          </div>

          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight px-12">
            The GRAIT Difference
          </h3>
          <p className="text-[18px] text-white font-semibold leading-relaxed mb-8 max-w-sm px-12">
            GRAIT turns cloud onboarding and operations into a product, not a
            project.
          </p>

          {/* Image — 75% width, pushed left to meet the divider */}
          <div className="flex justify-start mt-auto pr-8 pb-10 relative z-10">
            <div className="relative w-3/4 rounded-tr-[3rem] rounded-br-2xl overflow-hidden shadow-2xl" style={{ height: "320px" }}>
              <Image
                src="/below_hero2.png"
                alt="The GRAIT Difference"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Thin teal bottom border */}
      <div className="w-full h-1 bg-[#00BFBF]" />
    </section>
  );
}
