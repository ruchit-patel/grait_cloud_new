import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatGrait from "@/components/WhatGrait";

export default function Home() {
  return (
    <main className="bg-[#0d1f3c]">
      <Navbar />
      <Hero />
      <WhatGrait />
    </main>
  );
}
