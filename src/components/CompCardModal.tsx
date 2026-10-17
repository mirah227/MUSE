import React, { useState } from 'react';
import { X, Printer } from 'lucide-react';
import { PORTFOLIO_IMAGES } from '../data/portfolioData';
import { CONTACT_INFO } from './SocialIcons';

interface CompCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompCardModal: React.FC<CompCardModalProps> = ({ isOpen, onClose }) => {
  const [activeSide, setActiveSide] = useState<'front' | 'back'>('front');
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      window.print();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#141312] border border-[#2b2a28] shadow-2xl flex flex-col max-h-[95vh] overflow-hidden z-10">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#2b2a28] bg-[#0f0e0d]">
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg tracking-[0.2em] text-white uppercase font-medium">
              Digital Comp Card · MUSE
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 bg-[#211f1e] text-[#e0c298] text-[10px] tracking-widest uppercase">
              300 DPI Ready
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Front / Back Toggle */}
            <div className="flex items-center bg-[#1d1b1a] border border-[#2b2a28] p-0.5">
              <button
                onClick={() => setActiveSide('front')}
                className={`px-3 py-1 text-xs uppercase tracking-wider font-medium transition-colors ${
                  activeSide === 'front'
                    ? 'bg-white text-[#141312]'
                    : 'text-[#929189] hover:text-white'
                }`}
              >
                Front
              </button>
              <button
                onClick={() => setActiveSide('back')}
                className={`px-3 py-1 text-xs uppercase tracking-wider font-medium transition-colors ${
                  activeSide === 'back'
                    ? 'bg-white text-[#141312]'
                    : 'text-[#929189] hover:text-white'
                }`}
              >
                Back Specs
              </button>
            </div>

            {/* Print/Download Button */}
            <button
              onClick={handleDownload}
              className="py-1.5 px-3 bg-[#e0c298] hover:bg-white text-[#141312] text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{downloading ? 'Preparing...' : 'Print / Save PDF'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close Comp Card"
              className="w-8 h-8 flex items-center justify-center text-[#e6e1df] hover:text-[#e0c298] transition-colors border border-[#2b2a28] cursor-pointer"
            >
              <X className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Scrollable Card Container */}
        <div className="p-4 sm:p-8 overflow-y-auto flex justify-center bg-[#0d0c0b]">
          {activeSide === 'front' ? (
            /* FRONT OF COMP CARD */
            <div className="w-full max-w-md bg-[#161413] border border-[#2b2a28] flex flex-col shadow-2xl relative">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img
                  src={PORTFOLIO_IMAGES.hero}
                  alt="MUSE Master Comp Card Portrait"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161413] via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-6 flex flex-col items-center text-center -mt-8 relative z-10">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#e0c298] font-semibold">
                  Paris • Milan
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl text-white tracking-[0.14em] uppercase mt-1">
                  MUSE
                </h1>
                <p className="text-[11px] text-[#929189] uppercase tracking-widest mt-1">
                  Haute Couture &amp; High Fashion Editorial
                </p>

                <div className="w-full grid grid-cols-4 gap-1 mt-6 border-t border-[#2b2a28] pt-4 text-center">
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-[#e0c298]">Height</span>
                    <span className="text-xs text-white font-medium">180 / 5'11"</span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-[#e0c298]">Bust</span>
                    <span className="text-xs text-white font-medium">81 / 32"</span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-[#e0c298]">Waist</span>
                    <span className="text-xs text-white font-medium">60 / 23.5"</span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-[#e0c298]">Hips</span>
                    <span className="text-xs text-white font-medium">87 / 34.5"</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#211f1e] w-full flex justify-between items-center text-[10px] text-[#929189]">
                  <span>{CONTACT_INFO.email}</span>
                  <span>WA: {CONTACT_INFO.whatsappDisplay}</span>
                </div>
              </div>
            </div>
          ) : (
            /* BACK OF COMP CARD */
            <div className="w-full max-w-2xl bg-[#161413] border border-[#2b2a28] p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
              {/* Top Header */}
              <div className="flex items-center justify-between border-b border-[#2b2a28] pb-4">
                <div>
                  <h2 className="font-serif text-3xl text-white tracking-widest uppercase">
                    MUSE
                  </h2>
                  <span className="text-[10px] text-[#e0c298] tracking-[0.25em] uppercase">
                    Official Agency Specifications
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#929189] block tracking-widest uppercase">Modelwire ID</span>
                  <span className="font-mono text-sm text-white">#89402</span>
                </div>
              </div>

              {/* 4 Supporting Image Panels */}
              <div className="grid grid-cols-4 gap-2">
                <div className="aspect-[3/4] bg-[#211f1e] overflow-hidden">
                  <img src={PORTFOLIO_IMAGES.plate1} alt="Runway" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] bg-[#211f1e] overflow-hidden">
                  <img src={PORTFOLIO_IMAGES.plate2} alt="Raw Profile" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] bg-[#211f1e] overflow-hidden">
                  <img src={PORTFOLIO_IMAGES.plate3} alt="Beauty Spec" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] bg-[#211f1e] overflow-hidden">
                  <img src={PORTFOLIO_IMAGES.plate4} alt="Campaign" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Comprehensive Measurement Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <div className="p-3 bg-[#1d1b1a] border border-[#2b2a28]">
                  <span className="text-[9px] uppercase tracking-widest text-[#929189]">Height</span>
                  <div className="font-serif text-lg text-white mt-0.5">180 cm / 5' 11"</div>
                </div>
                <div className="p-3 bg-[#1d1b1a] border border-[#2b2a28]">
                  <span className="text-[9px] uppercase tracking-widest text-[#929189]">Bust</span>
                  <div className="font-serif text-lg text-white mt-0.5">81 cm / 32"</div>
                </div>
                <div className="p-3 bg-[#1d1b1a] border border-[#2b2a28]">
                  <span className="text-[9px] uppercase tracking-widest text-[#929189]">Waist</span>
                  <div className="font-serif text-lg text-white mt-0.5">60 cm / 23.5"</div>
                </div>
                <div className="p-3 bg-[#1d1b1a] border border-[#2b2a28]">
                  <span className="text-[9px] uppercase tracking-widest text-[#929189]">Hips</span>
                  <div className="font-serif text-lg text-white mt-0.5">87 cm / 34.5"</div>
                </div>
                <div className="p-3 bg-[#1d1b1a] border border-[#2b2a28]">
                  <span className="text-[9px] uppercase tracking-widest text-[#929189]">Shoe Size</span>
                  <div className="font-serif text-lg text-white mt-0.5">40 EU / 9 US / 6.5 UK</div>
                </div>
                <div className="p-3 bg-[#1d1b1a] border border-[#2b2a28]">
                  <span className="text-[9px] uppercase tracking-widest text-[#929189]">Eyes &amp; Hair</span>
                  <div className="font-serif text-lg text-white mt-0.5">Dark Amber / Espresso</div>
                </div>
              </div>

              {/* Booking Representation Desk */}
              <div className="p-4 bg-[#211f1e] border border-[#2b2a28] flex flex-col sm:flex-row justify-between gap-4 text-xs">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#e0c298]">Direct Contacts</span>
                  <p className="font-serif text-white text-sm mt-0.5">{CONTACT_INFO.email}</p>
                  <p className="text-[#929189] text-[11px]">WhatsApp: {CONTACT_INFO.whatsappDisplay}</p>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#e0c298]">Agency Representation</span>
                  <p className="font-serif text-white text-sm mt-0.5">IMG Models Paris · Direct</p>
                  <p className="text-[#929189] text-[11px]">Elite Worldwide · New York &amp; Milan</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
