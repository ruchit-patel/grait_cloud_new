import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export default function PressHero({
  breadcrumbs,
  title,
  subtitle,
  compact = false,
  children,
}: {
  breadcrumbs: Crumb[];
  title?: string;
  subtitle?: string;
  /** compact = shorter banner used on the article detail page */
  compact?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section
      className={`relative w-full overflow-hidden ${
        compact ? "pt-28 pb-12" : "pt-32 pb-16 md:pb-20"
      }`}
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark blue base + left-weighted overlay for text readability */}
      <div className="absolute inset-0 bg-[#050d1f]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050d1f] via-[#050d1f]/85 to-[#050d1f]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050d1f] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[13px] font-semibold mb-8">
          {breadcrumbs.map((crumb, i) => {
            const isLast = i === breadcrumbs.length - 1;
            return (
              <span key={crumb.label} className="flex items-center gap-2">
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    className="text-[#3fa9f5] hover:text-[#00BFBF] transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
                {!isLast && <span className="text-gray-500">›</span>}
              </span>
            );
          })}
        </nav>

        {title && (
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-none">
            {title}
          </h1>
        )}

        {subtitle && (
          <p className="mt-6 text-[16px] md:text-[18px] text-gray-300 leading-relaxed max-w-[520px]">
            {subtitle}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
