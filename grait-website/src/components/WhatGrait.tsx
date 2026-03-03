"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function WhatGrait() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <section className="w-full">

     {/* ── "What GRAIT is" card — floats over hero ── */}
      <div className="relative z-10 -mt-28 px-6 pb-0">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative group rounded-[60px] px-12 py-14 text-center max-w-5xl mx-auto overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_30px_80px_rgba(0,191,191,0.4)] shadow-[0_10px_40px_rgba(0,153,204,0.2)]"
          style={{
            '--mouse-x': `${mousePosition.x}px`,
            '--mouse-y': `${mousePosition.y}px`,
          } as React.CSSProperties}>
          {/* Cursor-following border glow */}
          {isHovered && (
            <div
              className="absolute inset-0 rounded-[60px] pointer-events-none"
              style={{
                background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,191,191,0.15), transparent 40%)`,
              }}
            />
          )}

          {/* Border gradient that follows cursor */}
          <div
            className="absolute inset-0 rounded-[60px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,191,191,0.3), transparent 40%)`,
              padding: '2px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />

          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-[#e8f9fc] to-[#d0f4fc]"></div>

          {/* Floating orbs for visual interest */}
          <div className="absolute top-10 -left-10 w-40 h-40 bg-gradient-to-br from-[#00BFBF]/30 to-[#0099CC]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-br from-[#0099CC]/30 to-[#00e5ff]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-[#00e5ff]/20 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>

          {/* Mesh gradient overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00BFBF]/10 via-transparent to-[#0099CC]/10"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#0d1f3c] via-[#0099CC] to-[#00BFBF] bg-clip-text text-transparent animate-gradient bg-300 drop-shadow-sm">
              What GRAIT IS
            </h2>
            <p className="text-[17px] text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <span className="font-bold bg-gradient-to-r from-[#0099CC] to-[#00BFBF] bg-clip-text text-transparent">GRAIT</span> is the world&apos;s first unified, AI-powered multi-cloud,
              multi-agent DevOps platform.
              <br className="hidden md:block" />
              It enables organizations to build, migrate, and operate
              infrastructure with <span className="font-semibold text-[#00BFBF] relative inline-block hover:scale-110 transition-transform cursor-default">speed</span>, <span className="font-semibold text-[#0099CC] relative inline-block hover:scale-110 transition-transform cursor-default">control</span>, and <span className="font-semibold text-[#00BFBF] relative inline-block hover:scale-110 transition-transform cursor-default">intelligence</span> across public
              cloud, private cloud, and hybrid environments.
            </p>
          </div>

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
          <div className="flex justify-end mt-auto pl-8">
            <div className="relative w-[85%] rounded-tl-[3rem] rounded-bl-2xl overflow-hidden shadow-2xl" style={{ height: "320px" }}>
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
          <div className="flex justify-start mt-auto pr-8 relative z-10">
            <div className="relative w-[85%] rounded-tr-[3rem] rounded-br-2xl overflow-hidden shadow-2xl" style={{ height: "320px" }}>
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
