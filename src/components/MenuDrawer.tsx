import React from 'react';
import { X, ArrowRight, Download, ArrowUpRight } from 'lucide-react';
import { TabId } from './BottomNav';
import { CONTACT_INFO, GmailIcon, WhatsAppIcon } from './SocialIcons';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: TabId) => void;
  onOpenCompCard: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onSelectTab,
  onOpenCompCard,
}) => {
  if (!isOpen) return null;

  const navLinks: { label: string; tab: TabId; subtitle: string; index: string }[] = [
    { label: 'Selected Works', tab: 'works', subtitle: 'Plates 01 — 04 · High Fashion Editorial', index: '01' },
    { label: 'Comp Card & Stats', tab: 'stats', subtitle: 'Official Measurements · Paris & Milan Specs', index: '02' },
    { label: 'Runway & Campaigns', tab: 'runway', subtitle: '2023 — 2025 Archive · Schiaparelli, Balmain, YSL', index: '03' },
    { label: 'Direct Booking & Press', tab: 'agency', subtitle: 'Reservations, Enquiries & Representation', index: '04' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <div className="relative w-full max-w-md bg-[#141312] border-r border-[#2b2a28] h-full flex flex-col justify-between overflow-y-auto z-10 p-6 sm:p-8 animate-slideIn">
        {/* Top Header */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-[#2b2a28] pb-5">
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.24em] uppercase text-white font-medium">
                MUSE
              </span>
              <span className="text-[9px] tracking-[0.28em] text-[#e0c298] uppercase font-semibold">
                Haute Couture Index
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close Menu"
              className="w-10 h-10 flex items-center justify-center text-[#e6e1df] hover:text-[#e0c298] transition-colors border border-[#2b2a28] hover:border-[#e0c298] cursor-pointer"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col divide-y divide-[#211f1e] my-2">
            {navLinks.map((item) => (
              <button
                key={item.tab}
                onClick={() => {
                  onSelectTab(item.tab);
                  onClose();
                }}
                className="group py-4 flex items-center justify-between text-left transition-colors hover:bg-[#1d1b1a]/50 px-2 cursor-pointer"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-mono text-[#e0c298] tracking-widest">{item.index}</span>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-white group-hover:text-[#e0c298] transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-xs text-[#929189] font-light mt-0.5 tracking-wide">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#929189] group-hover:text-[#e0c298] group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </nav>

          {/* Minimal Contact Quick Access */}
          <div className="p-3.5 bg-[#1d1b1a] border border-[#2b2a28] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <a
                href={CONTACT_INFO.gmailLink}
                aria-label="Email MUSE via Gmail"
                className="w-8 h-8 flex items-center justify-center bg-[#211f1e] hover:bg-[#2b2a28] text-white hover:text-[#e0c298] border border-[#2b2a28] transition-colors"
                title={CONTACT_INFO.email}
              >
                <GmailIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp MUSE"
                className="w-8 h-8 flex items-center justify-center bg-[#211f1e] hover:bg-[#2b2a28] text-white hover:text-[#25D366] border border-[#2b2a28] transition-colors"
                title={CONTACT_INFO.whatsappDisplay}
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={() => {
                onSelectTab('agency');
                onClose();
              }}
              className="px-3 py-1.5 bg-white hover:bg-[#e0c298] text-[#141312] text-[10px] uppercase tracking-[0.2em] font-semibold transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Book Me</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col gap-2.5 pt-1">
            <button
              onClick={() => {
                onClose();
                onOpenCompCard();
              }}
              className="w-full py-3.5 px-4 bg-white hover:bg-[#e0c298] text-[#141312] transition-colors flex items-center justify-center gap-2.5 font-medium text-xs tracking-[0.2em] uppercase shadow-lg cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#141312]" />
              <span>Download Digital Comp Card</span>
            </button>
          </div>
        </div>

        {/* Footer info in menu */}
        <div className="mt-8 pt-6 border-t border-[#2b2a28] flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex flex-col">
              <span className="text-[10px] text-[#e0c298] uppercase tracking-widest">Direct Desk</span>
              <span className="text-white font-mono text-[11px] mt-0.5">{CONTACT_INFO.email}</span>
              <span className="text-[#929189] text-[11px]">WA: {CONTACT_INFO.whatsappDisplay}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-[#e0c298] uppercase tracking-widest">Representation</span>
              <span className="text-white font-serif mt-0.5">IMG Models Paris</span>
              <span className="text-[#929189] text-[11px]">Elite Worldwide</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#929189] pt-2 border-t border-[#211f1e]">
            <span>Modelwire ID: 89402</span>
            <span>Models.com Top 50</span>
          </div>
        </div>
      </div>
    </div>
  );
};
