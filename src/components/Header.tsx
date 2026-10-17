import React from 'react';
import { Menu, User, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO, GmailIcon, WhatsAppIcon } from './SocialIcons';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenCastingSheet: () => void;
  onBookMe: () => void;
  activeTab: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onOpenCastingSheet,
  onBookMe,
}) => {
  return (
    <header className="fixed top-0 w-full z-40 pt-safe bg-[#141312]/92 backdrop-blur-xl border-b border-[#2b2a28]/60 shadow-[0_1px_16px_rgba(0,0,0,0.4)]">
      <div className="h-16 max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between">
        {/* Left: Menu Trigger */}
        <div className="flex items-center">
          <button
            onClick={onOpenMenu}
            aria-label="Open Index Menu"
            className="w-10 h-10 -ml-1 flex items-center justify-center text-[#e6e1df] hover:text-[#e0c298] transition-colors focus:outline-none cursor-pointer"
          >
            <Menu className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Center: Brand Lockup "MUSE" */}
        <div
          className="flex flex-col items-center select-none cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="font-serif text-[19px] sm:text-[22px] tracking-[0.26em] uppercase text-white font-medium">
            MUSE
          </span>
          <span className="text-[9px] tracking-[0.28em] text-[#e0c298] font-semibold -mt-0.5 uppercase">
            PARIS • MILAN
          </span>
        </div>

        {/* Right: Clickable Gmail, WhatsApp & Subtle "Book Me" button */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Clickable Gmail Icon */}
          <a
            href={CONTACT_INFO.gmailLink}
            aria-label="Email MUSE (raregem12343@gmail.com)"
            title="Email: raregem12343@gmail.com"
            className="w-8 h-8 sm:w-8 sm:h-8 flex items-center justify-center text-[#c8c7be] hover:text-[#e0c298] hover:bg-[#1d1b1a] transition-colors rounded-none cursor-pointer"
          >
            <GmailIcon className="w-4 h-4" />
          </a>

          {/* Clickable WhatsApp Icon */}
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp MUSE (080 8864 7547)"
            title="WhatsApp: 080 8864 7547"
            className="w-8 h-8 sm:w-8 sm:h-8 flex items-center justify-center text-[#c8c7be] hover:text-[#25D366] hover:bg-[#1d1b1a] transition-colors rounded-none cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>

          {/* Subtle "Book Me" Button */}
          <button
            onClick={onBookMe}
            className="px-2.5 sm:px-3 py-1.5 bg-white hover:bg-[#e0c298] text-[#141312] text-[10px] sm:text-xs uppercase tracking-[0.18em] font-semibold transition-colors shadow-sm flex items-center gap-1 cursor-pointer"
          >
            <span>Book Me</span>
            <ArrowUpRight className="w-3 h-3 text-[#141312]" />
          </button>

          {/* Casting Quick Profile Avatar */}
          <button
            onClick={onOpenCastingSheet}
            aria-label="Casting Director Quick Desk"
            title="Casting Director Quick Desk"
            className="w-8 h-8 rounded-full bg-[#1d1b1a] hover:bg-[#2b2a28] border border-[#363433] flex items-center justify-center text-white hover:text-[#e0c298] transition-colors cursor-pointer ml-0.5"
          >
            <User className="w-4 h-4 text-[#e0c298]" />
          </button>
        </div>
      </div>
    </header>
  );
};
