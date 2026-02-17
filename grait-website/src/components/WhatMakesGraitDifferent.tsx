import Image from "next/image";

const cards = [
  {
    icon: "/ai.svg",
    alt: "AI icon",
    text: "GenAI-driven automation that replaces manual DevOps effort",
  },
  {
    icon: "/clock.svg",
    alt: "Clock icon",
    text: "Designed for repeatability, speed, and operational control",
  },
  {
    icon: "/cloud.svg",
    alt: "Cloud icon",
    text: "Works seamlessly across public, private, and hybrid cloud",
  },
  {
    icon: "/redirect.svg",
    alt: "Scale icon",
    text: "Built to scale across teams, environments, and geographies",
  },
];

export default function WhatMakesGraitDifferent() {
  return (
    <section
      className="relative w-full py-20 px-6 overflow-hidden"
      style={{ backgroundColor: "#061735" }}
    >
      {/* Background SVG */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <Image
          src="/bg.svg"
          alt=""
          fill
          className="object-cover object-center opacity-60"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16">
          What Makes GRAIT Different
        </h2>

        {/* Cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 rounded-2xl border border-[#1a4a7a] bg-[#0a1f3d]/70 backdrop-blur-sm p-8"
            >
              {/* Icon */}
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src={card.icon}
                  alt={card.alt}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Description */}
              <p className="text-[15px] text-gray-300 leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
