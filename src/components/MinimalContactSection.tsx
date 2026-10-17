import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { CONTACT_INFO, GmailIcon, WhatsAppIcon } from './SocialIcons';

interface MinimalContactSectionProps {
  onBookMe: () => void;
  className?: string;
}

export const MinimalContactSection: React.FC<MinimalContactSectionProps> = ({
  onBookMe,
  className = '',
}) => {
  return (
    <section className={`w-full max-w-4xl mx-auto px-4 sm:px-6 my-6 ${className}`}>
      <div className="p-5 sm:p-6 bg-[#161413] border border-[#2b2a28] flex flex-col sm:flex-row sm:items-center justify-between gap-5 transition-colors hover:border-[#363433]">
        {/* Left: Minimal Editorial Label & Contact Value */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e0c298]" />
            <span className="text-[10px] text-[#e0c298] uppercase tracking-[0.24em] font-semibold">
              Direct Inquiries · Paris &amp; Milan
            </span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mt-0.5">
            Connect with MUSE
          </h3>
          <p className="text-xs text-[#929189] font-light">
            Verified casting, runway options, and campaigns response within 12 hours.
          </p>
        </div>

        {/* Right: Clickable Icons & Subtle Book Me Button */}
        <div className="flex items-center gap-3 self-start sm:self-auto shrink-0">
          {/* Clickable Gmail Icon */}
          <a
            href={CONTACT_INFO.gmailLink}
            aria-label="Send Email to MUSE (raregem12343@gmail.com)"
            title="Email: raregem12343@gmail.com"
            className="w-10 h-10 flex items-center justify-center bg-[#1d1b1a] hover:bg-[#2b2a28] text-[#e6e1df] hover:text-[#e0c298] border border-[#2b2a28] hover:border-[#e0c298] transition-all cursor-pointer shadow-sm group"
          >
            <GmailIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
          </a>

          {/* Clickable WhatsApp Icon */}
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message MUSE on WhatsApp (080 8864 7547)"
            title="WhatsApp: 080 8864 7547"
            className="w-10 h-10 flex items-center justify-center bg-[#1d1b1a] hover:bg-[#2b2a28] text-[#e6e1df] hover:text-[#25D366] border border-[#2b2a28] hover:border-[#25D366] transition-all cursor-pointer shadow-sm group"
          >
            <WhatsAppIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
          </a>

          {/* Subtle "Book Me" Button */}
          <button
            onClick={onBookMe}
            className="h-10 px-4 bg-white hover:bg-[#e0c298] text-[#141312] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <span>Book Me</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#141312]" />
          </button>
        </div>
      </div>
    </section>
  );
};
