import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import { PORTFOLIO_IMAGES, PLATES_DATA, PlateItem } from '../data/portfolioData';
import { MinimalContactSection } from '../components/MinimalContactSection';
import { CONTACT_INFO, GmailIcon, WhatsAppIcon } from '../components/SocialIcons';

interface WorksScreenProps {
  onSelectPlate: (plate: PlateItem) => void;
  onOpenCompCard: () => void;
  onNavigateToRunway: () => void;
  onNavigateToAgency: () => void;
}

export const WorksScreen: React.FC<WorksScreenProps> = ({
  onSelectPlate,
  onOpenCompCard,
  onNavigateToAgency,
}) => {
  const [filter, setFilter] = useState<'all' | 'couture' | 'editorial' | 'beauty'>('all');

  const filteredPlates = filter === 'all'
    ? PLATES_DATA
    : PLATES_DATA.filter((p) => p.category === filter);

  const plate1 = PLATES_DATA.find((p) => p.id === 'plate-01')!;
  const plate2 = PLATES_DATA.find((p) => p.id === 'plate-02')!;
  const plate3 = PLATES_DATA.find((p) => p.id === 'plate-03')!;
  const plate4 = PLATES_DATA.find((p) => p.id === 'plate-04')!;

  return (
    <div className="flex flex-col w-full pb-16">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#0f0e0d]">
        <div className="relative w-full aspect-[3/4] max-h-[85vh] sm:max-h-[90vh] overflow-hidden">
          <img
            alt="MUSE Haute Couture campaign portrait"
            className="w-full h-full object-cover object-top scale-100 transition-transform duration-1000 ease-out hover:scale-105"
            src={PORTFOLIO_IMAGES.hero}
          />
          {/* Subtle Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0d] via-[#0f0e0d]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0e0d]/60 via-transparent to-transparent" />

          {/* Editorial Badge Top Left */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block px-3 py-1 bg-[#0f0e0d]/85 backdrop-blur-md text-[#e0c298] font-sans text-[10px] uppercase tracking-[0.25em] border border-[#2b2a28]/60 shadow-sm font-semibold">
              SS25 Editorial Selection
            </span>
          </div>

          {/* Hero Bottom Content Overlaid on Scrim */}
          <div className="absolute bottom-0 inset-x-0 p-5 sm:p-8 flex flex-col justify-end max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-[#e0c298]" />
              <p className="text-[11px] text-[#e0c298] uppercase tracking-[0.24em] font-semibold">
                Paris · Milan · New York
              </p>
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white tracking-[-0.03em] leading-none mb-1 font-normal">
              MUSE
            </h1>
            <p className="text-xs sm:text-sm text-[#c8c7be] tracking-[0.16em] uppercase mb-4 font-light">
              Haute Couture &amp; High Fashion Editorial
            </p>

            {/* Quick Comp Card Key Metrics Bar */}
            <div className="grid grid-cols-4 gap-1 p-2 bg-[#2b2a28]/90 backdrop-blur-md border border-[#363433]/80">
              <div className="flex flex-col items-center py-1">
                <span className="text-[9px] text-[#e0c298] tracking-widest uppercase font-semibold">Height</span>
                <span className="text-xs sm:text-sm text-white font-normal mt-0.5">5'11"</span>
              </div>
              <div className="flex flex-col items-center py-1 bg-[#363433]/40">
                <span className="text-[9px] text-[#e0c298] tracking-widest uppercase font-semibold">Bust</span>
                <span className="text-xs sm:text-sm text-white font-normal mt-0.5">32"</span>
              </div>
              <div className="flex flex-col items-center py-1">
                <span className="text-[9px] text-[#e0c298] tracking-widest uppercase font-semibold">Waist</span>
                <span className="text-xs sm:text-sm text-white font-normal mt-0.5">24"</span>
              </div>
              <div className="flex flex-col items-center py-1 bg-[#363433]/40">
                <span className="text-[9px] text-[#e0c298] tracking-widest uppercase font-semibold">Hips</span>
                <span className="text-xs sm:text-sm text-white font-normal mt-0.5">34"</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Direction & Discover Hint */}
        <div className="w-full py-4 px-5 sm:px-8 flex items-center justify-between bg-[#1d1b1a] border-t border-b border-[#2b2a28]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e0c298] animate-pulse" />
            <span className="text-[10px] text-white tracking-[0.2em] uppercase font-semibold">
              Archive Volume VIII
            </span>
          </div>
          <a
            className="flex items-center gap-2 group cursor-pointer"
            href="#gallery"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-[10px] text-[#e0c298] tracking-[0.2em] uppercase group-hover:text-white transition-colors font-semibold">
              Discover
            </span>
            <ArrowDown className="w-3.5 h-3.5 text-[#e0c298] group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* MINIMAL CONTACT SECTION */}
      <MinimalContactSection onBookMe={onNavigateToAgency} />

      {/* SECTION 2: ASYMMETRICAL GALLERY & SELECTED WORKS */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-12 flex flex-col gap-6 sm:gap-8" id="gallery">
        {/* Header with Monograph index */}
        <div className="flex flex-col gap-1 border-b border-[#2b2a28] pb-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#e0c298] uppercase tracking-[0.25em] font-semibold">
              Curation 2024–2025
            </span>
            <span className="text-[10px] text-[#929189] uppercase tracking-widest">
              Plates 01 — 04
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight font-normal">
            Selected Works
          </h2>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center gap-2 pt-3 overflow-x-auto no-scrollbar">
            {(
              [
                { id: 'all', label: 'All Plates' },
                { id: 'couture', label: 'Haute Couture' },
                { id: 'editorial', label: 'Editorial' },
                { id: 'beauty', label: 'Beauty Exclusive' },
              ] as const
            ).map((t) => (
              <button
                key={t.id}
                onClick={() => setFilter(t.id)}
                className={`px-3 py-1.5 text-[10px] uppercase tracking-widest font-semibold transition-all whitespace-nowrap border ${
                  filter === t.id
                    ? 'bg-white text-[#141312] border-white'
                    : 'bg-[#1d1b1a] text-[#929189] border-[#2b2a28] hover:text-white hover:border-[#363433]'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* If filtered, show matching plates in clean dynamic grid */}
        {filter !== 'all' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredPlates.map((plate) => (
              <article
                key={plate.id}
                onClick={() => onSelectPlate(plate)}
                className="flex flex-col bg-[#1d1b1a] border border-[#2b2a28] overflow-hidden cursor-pointer group hover:border-[#e0c298] transition-all"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <img
                    src={plate.imageUrl}
                    alt={plate.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 right-3 bg-[#0f0e0d]/80 backdrop-blur-sm px-2.5 py-1">
                    <span className="text-[9px] tracking-[0.2em] text-white uppercase font-semibold">
                      {plate.plateNumber}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[#e0c298] uppercase tracking-widest font-semibold">
                      {plate.categoryLabel}
                    </span>
                    <span className="text-[11px] text-[#929189]">{plate.location}</span>
                  </div>
                  <h3 className="font-serif text-lg text-white group-hover:text-[#e0c298] transition-colors">
                    {plate.title}
                  </h3>
                  <p className="text-xs text-[#929189] line-clamp-2">{plate.subtitle}</p>
                  <div className="pt-2 flex items-center justify-between border-t border-[#2b2a28]">
                    <span className="text-[10px] text-white tracking-widest uppercase font-mono">
                      {plate.publication} {plate.issue}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#e0c298]" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* DEFAULT CURATED ASYMMETRIC SPREAD */
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Featured Master Photo 1 */}
            <article
              onClick={() => onSelectPlate(plate1)}
              className="flex flex-col bg-[#1d1b1a] border border-[#2b2a28] overflow-hidden shadow-2xl cursor-pointer group hover:border-[#e0c298] transition-all"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <img
                  alt="High fashion sculptural gown runway"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src={plate1.imageUrl}
                />
                <div className="absolute top-3 right-3 bg-[#0f0e0d]/80 backdrop-blur-sm px-2.5 py-1 border border-[#2b2a28]">
                  <span className="text-[9px] tracking-[0.2em] text-white uppercase font-semibold">
                    {plate1.plateNumber}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-5 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#e0c298] uppercase tracking-widest font-semibold">
                    Haute Couture Week
                  </span>
                  <span className="text-[11px] text-[#929189]">Paris</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white leading-snug group-hover:text-[#e0c298] transition-colors">
                  {plate1.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#929189] line-clamp-2 font-light">
                  {plate1.subtitle}
                </p>
                <div className="pt-3 flex items-center justify-between border-t border-[#2b2a28]">
                  <span className="text-[10px] text-white tracking-widest uppercase font-mono">
                    {plate1.publication} {plate1.issue}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#e0c298] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </article>

            {/* Asymmetric Staggered Pair: Plate 02 & Plate 03 */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 items-start">
              <article
                onClick={() => onSelectPlate(plate2)}
                className="flex flex-col bg-[#1d1b1a] border border-[#2b2a28] overflow-hidden shadow-md cursor-pointer group hover:border-[#e0c298] transition-all"
              >
                <div className="relative w-full aspect-[9/16] overflow-hidden">
                  <img
                    alt="Noir Été sunlit portrait"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={plate2.imageUrl}
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0f0e0d] via-[#0f0e0d]/50 to-transparent p-3 pt-8">
                    <span className="text-[8px] text-[#e0c298] tracking-widest uppercase font-semibold">
                      {plate2.plateNumber}
                    </span>
                    <p className="font-serif text-sm sm:text-base text-white leading-tight mt-0.5 group-hover:text-[#e0c298] transition-colors">
                      {plate2.title}
                    </p>
                  </div>
                </div>
                <div className="p-3 flex flex-col gap-1">
                  <span className="text-[9px] text-[#929189] uppercase tracking-wider font-mono">
                    {plate2.publication}
                  </span>
                  <span className="text-xs text-white font-light">{plate2.subtitle}</span>
                </div>
              </article>

              <article
                onClick={() => onSelectPlate(plate3)}
                className="flex flex-col bg-[#1d1b1a] border border-[#2b2a28] overflow-hidden shadow-md mt-6 cursor-pointer group hover:border-[#e0c298] transition-all"
              >
                <div className="relative w-full aspect-[2/3] overflow-hidden">
                  <img
                    alt="Avant-Garde eyewear campaign"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={plate3.imageUrl}
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0f0e0d] via-[#0f0e0d]/50 to-transparent p-3 pt-8">
                    <span className="text-[8px] text-[#e0c298] tracking-widest uppercase font-semibold">
                      {plate3.plateNumber}
                    </span>
                    <p className="font-serif text-sm sm:text-base text-white leading-tight mt-0.5 group-hover:text-[#e0c298] transition-colors">
                      {plate3.title}
                    </p>
                  </div>
                </div>
                <div className="p-3 flex flex-col gap-1">
                  <span className="text-[9px] text-[#929189] uppercase tracking-wider font-mono">
                    {plate3.publication}
                  </span>
                  <span className="text-xs text-white font-light">{plate3.subtitle}</span>
                </div>
              </article>
            </div>

            {/* Full-Width Beauty Spotlight: Plate 04 */}
            <article
              onClick={() => onSelectPlate(plate4)}
              className="flex flex-col bg-[#2b2a28] border border-[#363433] overflow-hidden shadow-2xl cursor-pointer group hover:border-[#e0c298] transition-all"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <img
                  alt="Beauté Éclat luxury beauty campaign"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={plate4.imageUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0d] via-[#0f0e0d]/30 to-transparent flex flex-col justify-end p-5 sm:p-8">
                  <span className="text-[10px] text-[#e0c298] uppercase tracking-[0.25em] mb-1 font-semibold">
                    {plate4.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white leading-tight group-hover:text-[#e0c298] transition-colors">
                    {plate4.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#c8c7be] mt-1 font-light">
                    {plate4.subtitle}
                  </p>
                </div>
              </div>
              <div className="px-5 py-3.5 bg-[#363433] flex items-center justify-between">
                <span className="text-[10px] text-white uppercase tracking-widest font-mono">
                  {plate4.publication}
                </span>
                <span className="text-[10px] text-[#e0c298] tracking-widest uppercase font-semibold">
                  {plate4.issue}
                </span>
              </div>
            </article>
          </div>
        )}
      </section>

      {/* SECTION 3: ABOUT & STATS / COMP CARD PREVIEW */}
      <section className="w-full bg-[#1d1b1a] border-t border-b border-[#2b2a28] py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#e0c298]" />
              <span className="text-[10px] text-[#e0c298] uppercase tracking-[0.25em] font-semibold">
                The Model Persona
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white">
              Sculptural Grace &amp; Raw Luminescence
            </h2>
            <p className="text-sm sm:text-base text-[#c8c7be] leading-relaxed font-light">
              Known professionally as <span className="text-white font-medium">MUSE</span>,
              seamlessly merging athletic precision with transcendent high-fashion drama. Celebrated by legendary
              couturiers for poised geometry, luminous dark complexion, and statuesque runway
              presence anchoring the world's most demanding collections.
            </p>
          </div>

          {/* Official Measurement Grid */}
          <div className="flex flex-col bg-[#0f0e0d] p-5 sm:p-6 border border-[#2b2a28] shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#211f1e]">
              <span className="font-serif text-base sm:text-lg text-white uppercase tracking-wider">
                Official Comp Card
              </span>
              <span className="text-[10px] text-[#e0c298] tracking-widest uppercase font-semibold">
                Paris • Milan Specs
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-left pt-4">
              <div className="p-3.5 bg-[#2b2a28] border border-[#363433] flex flex-col">
                <span className="text-[10px] text-[#929189] uppercase tracking-widest font-semibold">Height</span>
                <span className="font-serif text-lg text-white mt-1">180 cm</span>
                <span className="text-xs text-[#e0c298]">5' 11"</span>
              </div>
              <div className="p-3.5 bg-[#2b2a28] border border-[#363433] flex flex-col">
                <span className="text-[10px] text-[#929189] uppercase tracking-widest font-semibold">Bust / Waist / Hips</span>
                <span className="font-serif text-lg text-white mt-1">81 · 60 · 87</span>
                <span className="text-xs text-[#e0c298]">32" · 23.5" · 34.5"</span>
              </div>
              <div className="p-3.5 bg-[#2b2a28] border border-[#363433] flex flex-col">
                <span className="text-[10px] text-[#929189] uppercase tracking-widest font-semibold">Shoe Size</span>
                <span className="font-serif text-lg text-white mt-1">40 EU</span>
                <span className="text-xs text-[#e0c298]">9 US · 6.5 UK</span>
              </div>
              <div className="p-3.5 bg-[#2b2a28] border border-[#363433] flex flex-col">
                <span className="text-[10px] text-[#929189] uppercase tracking-widest font-semibold">Eyes &amp; Hair</span>
                <span className="font-serif text-lg text-white mt-1">Dark Amber</span>
                <span className="text-xs text-[#e0c298]">Deep Espresso</span>
              </div>
            </div>

            <button
              onClick={onOpenCompCard}
              className="mt-4 w-full py-4 px-4 bg-white text-[#141312] flex items-center justify-center gap-3 transition-colors hover:bg-[#e0c298] shadow-lg font-sans text-xs uppercase tracking-[0.2em] font-semibold"
            >
              <FileText className="w-4 h-4 text-[#141312]" />
              <span>Download Digital Comp Card (PDF)</span>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER IN WORKS SCREEN */}
      <footer className="pt-8 pb-4 flex flex-col items-center gap-4 text-center border-t border-[#2b2a28] mt-8">
        <div className="flex items-center gap-3">
          <a
            href={CONTACT_INFO.gmailLink}
            aria-label="Email MUSE via Gmail"
            title={`Email: ${CONTACT_INFO.email}`}
            className="w-9 h-9 flex items-center justify-center bg-[#1d1b1a] hover:bg-[#2b2a28] text-white hover:text-[#e0c298] border border-[#2b2a28] hover:border-[#e0c298] transition-all cursor-pointer shadow-sm"
          >
            <GmailIcon className="w-4 h-4" />
          </a>

          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with MUSE on WhatsApp"
            title={`WhatsApp: ${CONTACT_INFO.whatsappDisplay}`}
            className="w-9 h-9 flex items-center justify-center bg-[#1d1b1a] hover:bg-[#2b2a28] text-white hover:text-[#25D366] border border-[#2b2a28] hover:border-[#25D366] transition-all cursor-pointer shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>

          <button
            onClick={onNavigateToAgency}
            className="h-9 px-3.5 bg-white hover:bg-[#e0c298] text-[#141312] text-[11px] uppercase tracking-[0.2em] font-semibold transition-all shadow-sm flex items-center gap-1 cursor-pointer"
          >
            <span>Book Me</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs">
          <a
            className="text-[10px] text-[#e0c298] tracking-widest uppercase hover:text-white transition-colors"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            @muse
          </a>
          <span className="w-1 h-1 rounded-full bg-[#363433]" />
          <span className="text-[10px] text-[#e0c298] tracking-widest uppercase">
            Modelwire ID: 89402
          </span>
          <span className="w-1 h-1 rounded-full bg-[#363433]" />
          <span className="text-[10px] text-[#e0c298] tracking-widest uppercase">
            Models.com Top 50
          </span>
        </div>
        <p className="text-[9px] text-[#929189] tracking-[0.16em] uppercase">
          © 2025 MUSE. All photographic rights reserved.
        </p>
        <p className="text-[10px] text-[#929189] tracking-wider">
          Paris • Milan • London • New York
        </p>
      </footer>
    </div>
  );
};
