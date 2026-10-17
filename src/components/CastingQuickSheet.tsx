import React, { useState } from 'react';
import { X, Check, Copy, FileText, Phone } from 'lucide-react';
import { CONTACT_INFO, GmailIcon, WhatsAppIcon } from './SocialIcons';

interface CastingQuickSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCompCard: () => void;
}

export const CastingQuickSheet: React.FC<CastingQuickSheetProps> = ({
  isOpen,
  onClose,
  onOpenCompCard,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopySpecs = () => {
    const specsText = `MUSE — CASTING SPECS
Height: 180 cm / 5'11"
Bust: 81 cm / 32"
Waist: 60 cm / 23.5"
Hips: 87 cm / 34.5"
Shoe: 40 EU / 9 US / 6.5 UK
Hair: Deep Espresso
Eyes: Dark Amber
Direct Email: ${CONTACT_INFO.email}
WhatsApp: ${CONTACT_INFO.whatsappDisplay}
Mother Agency: IMG Models Paris
Milan/NY: Elite Worldwide`;

    navigator.clipboard.writeText(specsText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Sheet Content */}
      <div className="relative w-full max-w-lg bg-[#161413] border border-[#2b2a28] p-6 sm:p-8 z-10 shadow-2xl flex flex-col gap-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#2b2a28] pb-4">
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.25em] text-[#e0c298] uppercase font-semibold">
              Casting Director Quick Desk
            </span>
            <h2 className="font-serif text-2xl text-white mt-0.5">
              MUSE • Paris / Milan
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Casting Sheet"
            className="w-9 h-9 flex items-center justify-center text-[#e6e1df] hover:text-[#e0c298] transition-colors border border-[#2b2a28]"
          >
            <X className="w-4 h-4 stroke-[1.5]" />
          </button>
        </div>

        {/* Live Status Strip */}
        <div className="p-3.5 bg-[#1d1b1a] border border-[#363433] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-white font-medium tracking-wide">
              SS25 Options Open · Paris &amp; Milan In-Town
            </span>
          </div>
          <span className="text-[10px] tracking-widest text-[#e0c298] uppercase font-mono">
            Direct Board
          </span>
        </div>

        {/* Quick Measurement Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="p-3 bg-[#211f1e] border border-[#2b2a28] flex flex-col">
            <span className="text-[9px] uppercase tracking-widest text-[#929189]">Height</span>
            <span className="font-serif text-base text-white mt-1">180 cm</span>
            <span className="text-[11px] text-[#e0c298]">5'11"</span>
          </div>
          <div className="p-3 bg-[#211f1e] border border-[#2b2a28] flex flex-col">
            <span className="text-[9px] uppercase tracking-widest text-[#929189]">Bust / Waist</span>
            <span className="font-serif text-base text-white mt-1">81 · 60</span>
            <span className="text-[11px] text-[#e0c298]">32" · 23.5"</span>
          </div>
          <div className="p-3 bg-[#211f1e] border border-[#2b2a28] flex flex-col">
            <span className="text-[9px] uppercase tracking-widest text-[#929189]">Hips</span>
            <span className="font-serif text-base text-white mt-1">87 cm</span>
            <span className="text-[11px] text-[#e0c298]">34.5"</span>
          </div>
          <div className="p-3 bg-[#211f1e] border border-[#2b2a28] flex flex-col">
            <span className="text-[9px] uppercase tracking-widest text-[#929189]">Shoe</span>
            <span className="font-serif text-base text-white mt-1">40 EU</span>
            <span className="text-[11px] text-[#e0c298]">9 US · 6.5 UK</span>
          </div>
        </div>

        {/* Direct Contacts with Gmail and WhatsApp */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#e0c298]">
            Direct Model Channels
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <a
              href={CONTACT_INFO.gmailLink}
              className="p-3 bg-[#1d1b1a] border border-[#2b2a28] hover:border-[#e0c298] flex items-center justify-between group transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <GmailIcon className="w-4 h-4 text-[#e0c298]" />
                <div className="flex flex-col">
                  <span className="text-white font-medium text-[11px]">Direct Email (Gmail)</span>
                  <span className="text-[#929189] text-[10px]">{CONTACT_INFO.email}</span>
                </div>
              </div>
            </a>

            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1d1b1a] border border-[#2b2a28] hover:border-[#25D366] flex items-center justify-between group transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <div className="flex flex-col">
                  <span className="text-white font-medium text-[11px]">Direct WhatsApp</span>
                  <span className="text-[#929189] text-[10px]">{CONTACT_INFO.whatsappDisplay}</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <button
            onClick={handleCopySpecs}
            className="flex-1 py-3 px-4 bg-[#2b2a28] hover:bg-[#363433] text-white flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-medium transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Specs Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Full Specs</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenCompCard();
            }}
            className="flex-1 py-3 px-4 bg-white hover:bg-[#e0c298] text-[#141312] flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-semibold transition-colors shadow-lg"
          >
            <FileText className="w-4 h-4" />
            <span>Digital Comp Card PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
