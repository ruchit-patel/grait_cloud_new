import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PressHero from "@/components/PressHero";
import ShareButtons from "@/components/ShareButtons";
import { getPressRelease, pressReleases, type PressBlock } from "@/data/press";

export function generateStaticParams() {
  return pressReleases.map((release) => ({ slug: release.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const release = getPressRelease(slug);
  if (!release) return { title: "Press | GRAIT Cloud" };
  return {
    title: `${release.title} | GRAIT Cloud`,
    description: release.excerpt,
  };
}

function Block({ block }: { block: PressBlock }) {
  switch (block.type) {
    case "h":
      return (
        <h2 className="text-2xl md:text-[28px] font-bold text-[#0d1f3c] mt-10 mb-2">
          {block.text}
        </h2>
      );
    case "ul":
      return (
        <ul className="my-4 space-y-2 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[16px] text-gray-700 leading-relaxed">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0099CC]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-8 rounded-2xl border-l-4 border-[#0099CC] bg-[#f2f9fc] p-6 md:p-7">
          <p className="text-[17px] italic text-[#0d1f3c] leading-relaxed">
            &ldquo;{block.text}&rdquo;
          </p>
          <footer className="mt-4 text-[14px] font-semibold text-[#0099CC]">
            — {block.author}
          </footer>
        </blockquote>
      );
    default:
      return (
        <p className="my-4 text-[16px] text-gray-700 leading-relaxed">{block.text}</p>
      );
  }
}

export default async function PressReleasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const release = getPressRelease(slug);

  if (!release) notFound();

  return (
    <main className="bg-[#0d1f3c] min-h-screen flex flex-col">
      <Navbar />

      <PressHero
        compact
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Press", href: "/press" },
          { label: release.category },
        ]}
      >
        <span className="inline-block rounded-md bg-[#0099CC] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
          {release.category}
        </span>
        <h1 className="mt-5 max-w-4xl text-3xl md:text-[40px] font-extrabold text-white leading-tight">
          {release.title}
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-gray-300">
          <span className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 text-[#00BFBF]">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path strokeLinecap="round" d="M3 10h18M8 2v4M16 2v4" />
            </svg>
            {release.date}
          </span>
          {release.location && (
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 text-[#00BFBF]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              {release.location}
            </span>
          )}
        </div>
      </PressHero>

      {/* Article */}
      <article className="w-full bg-white flex-1">
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
          {/* Top share bar */}
          <div className="flex justify-end border-b border-gray-100 pb-6">
            <ShareButtons title={release.title} />
          </div>

          {/* Body */}
          <div className="mt-8">
            {release.body?.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          {/* About */}
          {release.about && (
            <section className="mt-12 rounded-2xl bg-[#f7fafc] p-6 md:p-8">
              <h2 className="text-xl font-bold text-[#0d1f3c] mb-3">
                About GRAIT Cloud
              </h2>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                {release.about}
              </p>
            </section>
          )}

          {/* Media contact */}
          {release.mediaContact && (
            <section className="mt-8">
              <h2 className="text-xl font-bold text-[#0d1f3c] mb-3">
                Media Contact
              </h2>
              <div className="flex flex-col gap-2 text-[15px]">
                <a
                  href={`mailto:${release.mediaContact.email}`}
                  className="flex items-center gap-3 text-[#0099CC] hover:text-[#00BFBF] transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
                  </svg>
                  {release.mediaContact.email}
                </a>
                {release.mediaContact.phone && (
                  <a
                    href={`tel:${release.mediaContact.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3 text-[#0099CC] hover:text-[#00BFBF] transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
                    </svg>
                    {release.mediaContact.phone}
                  </a>
                )}
              </div>
            </section>
          )}

          {/* Bottom share bar */}
          <div className="mt-12 border-t border-gray-100 pt-8">
            <ShareButtons title={release.title} />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
