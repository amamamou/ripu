interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-white border-b border-[#e8e8e8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {breadcrumb && (
          <div className="flex items-center gap-2 mb-6 text-sm text-[#666666]">
            {breadcrumb.map((crumb, idx) => (
              <div key={crumb.href} className="flex items-center gap-2">
                <a href={crumb.href} className="hover:text-[#2d9bb7] transition-smooth">
                  {crumb.label}
                </a>
                {idx < breadcrumb.length - 1 && <span>/</span>}
              </div>
            ))}
          </div>
        )}
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 leading-tight">{title}</h1>
        {subtitle && <p className="text-xl text-[#666666] max-w-2xl leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
