import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, CheckCircle2, Shield, ArrowUpRight } from 'lucide-react';
import { AGENCIES } from '../data/portfolioData';
import { CONTACT_INFO, GmailIcon, WhatsAppIcon } from '../components/SocialIcons';

interface AgencyScreenProps {
  onOpenBookingModal?: () => void;
}

export const AgencyScreen: React.FC<AgencyScreenProps> = () => {
  const [formData, setFormData] = useState({
    producerName: '',
    fashionHouse: '',
    category: 'couture',
    proposedDate: '',
    location: '',
    notes: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('submitted');
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      producerName: '',
      fashionHouse: '',
      category: 'couture',
      proposedDate: '',
      location: '',
      notes: '',
    });
    setStatus('idle');
  };

  const scrollToForm = () => {
    document.getElementById('booking-inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-20 gap-8" id="booking">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="w-8 h-[1px] bg-[#e0c298]" />
          <span className="text-[10px] text-[#e0c298] uppercase tracking-[0.25em] font-semibold">
            Reservations &amp; Enquiries
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          Direct Booking &amp; Press
        </h1>
        <p className="text-xs sm:text-sm text-[#929189] leading-relaxed font-light">
          For couture bookings, runway options, campaigns, and global editorial shoots. Verified casting directors and houses receive 12-hour turnaround.
        </p>
      </div>

      {/* MINIMAL CONTACT QUICK BAR WITH GMAIL & WHATSAPP ICONS & SUBTLE BOOK ME */}
      <div className="p-4 sm:p-5 bg-[#161413] border border-[#2b2a28] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-[10px] text-[#e0c298] uppercase tracking-[0.22em] font-semibold">
            Direct Messaging
          </span>
          <span className="text-xs text-[#c8c7be] mt-0.5">
            Instant communication via verified model channels
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Clickable Gmail Icon */}
          <a
            href={CONTACT_INFO.gmailLink}
            aria-label="Email MUSE directly"
            title={`Email: ${CONTACT_INFO.email}`}
            className="w-10 h-10 flex items-center justify-center bg-[#1d1b1a] hover:bg-[#2b2a28] text-white hover:text-[#e0c298] border border-[#2b2a28] hover:border-[#e0c298] transition-all cursor-pointer shadow-sm group"
          >
            <GmailIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
          </a>

          {/* Clickable WhatsApp Icon */}
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message MUSE on WhatsApp"
            title={`WhatsApp: ${CONTACT_INFO.whatsappDisplay}`}
            className="w-10 h-10 flex items-center justify-center bg-[#1d1b1a] hover:bg-[#2b2a28] text-white hover:text-[#25D366] border border-[#2b2a28] hover:border-[#25D366] transition-all cursor-pointer shadow-sm group"
          >
            <WhatsAppIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
          </a>

          {/* Subtle Book Me Button */}
          <button
            onClick={scrollToForm}
            className="h-10 px-4 bg-white hover:bg-[#e0c298] text-[#141312] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <span>Book Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Quick Communication Chips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <a
          className="p-3.5 bg-[#1d1b1a] border border-[#2b2a28] flex items-center justify-between transition-colors hover:bg-[#2b2a28] hover:border-[#e0c298] group"
          href={CONTACT_INFO.gmailLink}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#211f1e] flex items-center justify-center border border-[#2b2a28] text-[#e0c298]">
              <GmailIcon className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-[#929189] uppercase tracking-widest font-semibold">Official Desk (Gmail)</span>
              <span className="text-xs sm:text-sm text-white font-medium">{CONTACT_INFO.email}</span>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-[#e0c298] group-hover:translate-x-1 transition-transform" />
        </a>

        <a
          className="p-3.5 bg-[#1d1b1a] border border-[#2b2a28] flex items-center justify-between transition-colors hover:bg-[#2b2a28] hover:border-[#25D366] group"
          href={CONTACT_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#211f1e] flex items-center justify-center border border-[#2b2a28] text-[#25D366]">
              <WhatsAppIcon className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-[#929189] uppercase tracking-widest font-semibold">WhatsApp Direct</span>
              <span className="text-xs sm:text-sm text-white font-medium">{CONTACT_INFO.whatsappDisplay}</span>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-[#25D366] group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Direct Luxury Inquiry Form */}
      <div className="bg-[#1d1b1a] border border-[#2b2a28] p-5 sm:p-7 shadow-2xl" id="booking-inquiry-form">
        <div className="flex items-center justify-between border-b border-[#2b2a28] pb-4 mb-5">
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl text-white">
              Casting &amp; Production Booking Desk
            </span>
            <span className="text-[10px] text-[#929189] uppercase tracking-widest mt-0.5">
              Strictly Confidential · Model: MUSE
            </span>
          </div>
          <Shield className="w-5 h-5 text-[#e0c298]" />
        </div>

        {status === 'submitted' ? (
          <div className="p-6 bg-[#211f1e] border border-[#e0c298]/60 flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#e0c298]/20 flex items-center justify-center border border-[#e0c298]">
              <CheckCircle2 className="w-6 h-6 text-[#e0c298]" />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-white">
                REQUEST TRANSMITTED · PENDING CONFIRMATION
              </h3>
              <p className="text-xs text-[#c8c7be] mt-2 max-w-md font-light leading-relaxed">
                Thank you, <span className="text-white font-medium">{formData.producerName || 'Producer'}</span>.
                Your availability inquiry for MUSE (<span className="text-white font-medium">{formData.fashionHouse || 'your house'}</span>) has been received. A booking confirmation will be sent to your desk within 12 hours.
              </p>
            </div>
            <div className="p-3 bg-[#161413] border border-[#2b2a28] w-full max-w-sm text-left text-xs text-[#929189] space-y-1">
              <div><span className="text-[#e0c298] uppercase text-[9px] tracking-widest">Category:</span> {formData.category}</div>
              {formData.location && <div><span className="text-[#e0c298] uppercase text-[9px] tracking-widest">Location:</span> {formData.location}</div>}
              {formData.proposedDate && <div><span className="text-[#e0c298] uppercase text-[9px] tracking-widest">Date:</span> {formData.proposedDate}</div>}
            </div>
            <button
              onClick={handleReset}
              className="py-2.5 px-6 bg-white hover:bg-[#e0c298] text-[#141312] text-xs uppercase tracking-widest font-semibold transition-colors mt-2"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] text-[#e0c298] tracking-widest uppercase font-semibold">
                Producer / Director Name
              </label>
              <input
                className="w-full bg-[#2b2a28] px-3.5 py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:bg-[#363433] placeholder:text-[#929189] border border-transparent focus:border-[#e0c298] transition-colors"
                placeholder="e.g. Jean-Luc Dubois"
                required
                type="text"
                value={formData.producerName}
                onChange={(e) => setFormData({ ...formData, producerName: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] text-[#e0c298] tracking-widest uppercase font-semibold">
                Fashion House or Publication
              </label>
              <input
                className="w-full bg-[#2b2a28] px-3.5 py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:bg-[#363433] placeholder:text-[#929189] border border-transparent focus:border-[#e0c298] transition-colors"
                placeholder="e.g. Maison Margiela / Vogue Paris"
                required
                type="text"
                value={formData.fashionHouse}
                onChange={(e) => setFormData({ ...formData, fashionHouse: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] text-[#e0c298] tracking-widest uppercase font-semibold">
                Project Category
              </label>
              <select
                className="w-full bg-[#2b2a28] px-3.5 py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:bg-[#363433] border border-transparent focus:border-[#e0c298] transition-colors cursor-pointer"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                <option value="couture">Haute Couture Runway</option>
                <option value="editorial">Global Print / Digital Editorial</option>
                <option value="campaign">Luxury Advertising Campaign</option>
                <option value="beauty">Global Beauty Contract</option>
                <option value="lookbook">Maison Lookbook &amp; Campaign</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-[#e0c298] tracking-widest uppercase font-semibold">
                  Proposed Date
                </label>
                <input
                  className="w-full bg-[#2b2a28] px-3 py-2 text-white text-xs focus:outline-none border border-transparent focus:border-[#e0c298] transition-colors"
                  type="date"
                  value={formData.proposedDate}
                  onChange={(e) => setFormData({ ...formData, proposedDate: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-[#e0c298] tracking-widest uppercase font-semibold">
                  Location / City
                </label>
                <input
                  className="w-full bg-[#2b2a28] px-3.5 py-2 text-white text-xs focus:outline-none placeholder:text-[#929189] border border-transparent focus:border-[#e0c298] transition-colors"
                  placeholder="Paris, France"
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] text-[#e0c298] tracking-widest uppercase font-semibold">
                Production Notes &amp; Wardrobe
              </label>
              <textarea
                className="w-full bg-[#2b2a28] px-3.5 py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:bg-[#363433] placeholder:text-[#929189] resize-none border border-transparent focus:border-[#e0c298] transition-colors"
                placeholder="Brief scope, creative direction, usage rights, call time..."
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>

            <button
              className="w-full py-4 bg-white text-[#141312] text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 hover:bg-[#e0c298] shadow-lg mt-2 cursor-pointer disabled:opacity-50"
              type="submit"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Transmitting to Paris Desk...' : 'Request Availability'}
            </button>
          </form>
        )}
      </div>

      {/* Global Agency Boards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {AGENCIES.map((agency) => (
          <div key={agency.name} className="p-5 bg-[#1d1b1a] border border-[#2b2a28] flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-[#e0c298] uppercase tracking-[0.2em] font-semibold">
                {agency.city}
              </span>
              <h3 className="font-serif text-xl text-white mt-1">{agency.name}</h3>
              <p className="text-xs text-[#929189] mt-0.5">{agency.division} • {agency.board}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#2b2a28] flex flex-col gap-1 text-xs">
              <span className="text-white font-light">Agent: {agency.agent}</span>
              <a href={`mailto:${agency.email}`} className="text-[#e0c298] hover:underline">
                {agency.email}
              </a>
              <a href={`tel:${agency.phone}`} className="text-[#929189] hover:text-white">
                {agency.phone}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Editorial Footer With Clickable Icons and Subtle "Book Me" */}
      <footer className="pt-8 pb-6 flex flex-col items-center gap-4 text-center border-t border-[#2b2a28]">
        {/* Footer Contact Icons Bar */}
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
            onClick={scrollToForm}
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
