import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PressHero from "@/components/PressHero";
import { pressReleases } from "@/data/press";

export const metadata: Metadata = {
  title: "Press | GRAIT Cloud",
  description:
    "Stay up to date with the latest announcements, media coverage, and company news from GRAIT Cloud.",
};

export default function PressPage() {
  return (
    <main className="bg-[#0d1f3c] min-h-screen flex flex-col">
      <Navbar />

      <PressHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Press" }]}
        title="Press"
        subtitle="Stay up to date with the latest announcements, media coverage, and company news."
      />

      {/* Listing */}
      <section className="w-full bg-white flex-1">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col gap-8">
            {pressReleases.map((release) => {
              const CardInner = (
                <>
                  {/* Thumbnail */}
                  <div className="relative w-full sm:w-[180px] h-[130px] sm:h-[120px] flex-shrink-0 overflow-hidden rounded-xl bg-[#0d1f3c]">
                    <Image
                      src={release.thumbnail}
                      alt={release.title}
                      fill
                      sizes="180px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#0099CC]">
                      {release.category}
                    </span>
                    <h2 className="mt-2 text-[19px] md:text-[21px] font-bold text-[#0d1f3c] leading-snug group-hover:text-[#0099CC] transition-colors">
                      {release.title}
                    </h2>
                    <p className="mt-1 text-[13px] text-gray-500">{release.date}</p>
                    <p className="mt-3 text-[14px] text-gray-600 leading-relaxed line-clamp-2">
                      {release.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0099CC] group-hover:gap-2.5 transition-all">
                      Read more
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </>
              );

              const cardClass =
                "group flex flex-col sm:flex-row gap-5 sm:gap-6 p-4 sm:p-5 rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-[#0099CC]/40 hover:shadow-[0_12px_40px_rgba(0,153,204,0.15)]";

              return release.externalUrl ? (
                <a
                  key={release.slug}
                  href={release.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {CardInner}
                </a>
              ) : (
                <Link
                  key={release.slug}
                  href={`/press/${release.slug}`}
                  className={cardClass}
                >
                  {CardInner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
