import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatGrait from "@/components/WhatGrait";
import WhatMakesGraitDifferent from "@/components/WhatMakesGraitDifferent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0d1f3c]">
      <Navbar />
      <Hero />
      <WhatGrait />
      <WhatMakesGraitDifferent />
      <Footer />
    </main>
  );
}
