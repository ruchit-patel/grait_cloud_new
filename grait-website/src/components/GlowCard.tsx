"use client";

import { useRef, useState } from "react";

export default function GlowCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group rounded-[60px] px-12 py-14 text-center max-w-5xl mx-auto overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_30px_80px_rgba(0,191,191,0.4)] shadow-[0_10px_40px_rgba(0,153,204,0.2)]"
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
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

      {/* Floating orbs */}
      <div className="absolute top-10 -left-10 w-40 h-40 bg-gradient-to-br from-[#00BFBF]/30 to-[#0099CC]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-br from-[#0099CC]/30 to-[#00e5ff]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-[#00e5ff]/20 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00BFBF]/10 via-transparent to-[#0099CC]/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
