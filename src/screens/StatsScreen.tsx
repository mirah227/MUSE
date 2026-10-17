import React, { useState } from 'react';
import { Copy, Check, FileDown, Globe } from 'lucide-react';
import { POLAROIDS } from '../data/portfolioData';
import { CONTACT_INFO } from '../components/SocialIcons';

interface StatsScreenProps {
  onOpenCompCard: () => void;
}

export const StatsScreen: React.FC<StatsScreenProps> = ({ onOpenCompCard }) => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [copied, setCopied] = useState(false);

  const handleCopySpecs = () => {
    const text = `MUSE — OFFICIAL CASTING SPECS (${unit.toUpperCase()})
Height: ${unit === 'metric' ? '180 cm' : "5' 11\""}
Bust: ${unit === 'metric' ? '81 cm' : '32"'}
Waist: ${unit === 'metric' ? '60 cm' : '23.5"'}
Hips: ${unit === 'metric' ? '87 cm' : '34.5"'}
Dress: ${unit === 'metric' ? '34 EU' : '2 US / 6 UK'}
Shoe: ${unit === 'metric' ? '40 EU' : '9 US / 6.5 UK'}
Eyes: Dark Amber
Hair: Deep Espresso
Email: ${CONTACT_INFO.email}
WhatsApp: ${CONTACT_INFO.whatsappDisplay}
Agencies: IMG Models Paris (Direct) · Elite Worldwide (NY/Milan)`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-20 gap-8">
      {/* Header */}
      <div className="flex flex-col gap-2 border-b border-[#2b2a28] pb-5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-[#e0c298] uppercase tracking-[0.25em] font-semibold">
            Measurements &amp; Digitals
          </span>
          <span className="text-[10px] text-[#929189] uppercase tracking-widest font-mono">
            Modelwire #89402
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              Official Comp Card · MUSE
            </h1>
            <p className="text-xs text-[#929189] mt-1 font-light tracking-wide">
              Certified Agency Standard · Paris &amp; Milan Federation Specs
            </p>
          </div>

          {/* Unit Switcher */}
          <div className="flex items-center bg-[#1d1b1a] border border-[#2b2a28] p-1 self-start sm:self-auto">
            <button
              onClick={() => setUnit('metric')}
              className={`px-3 py-1 text-xs uppercase tracking-wider font-semibold transition-all ${
                unit === 'metric'
                  ? 'bg-white text-[#141312]'
                  : 'text-[#929189] hover:text-white'
              }`}
            >
              Metric (cm)
            </button>
            <button
              onClick={() => setUnit('imperial')}
              className={`px-3 py-1 text-xs uppercase tracking-wider font-semibold transition-all ${
                unit === 'imperial'
                  ? 'bg-white text-[#141312]'
                  : 'text-[#929189] hover:text-white'
              }`}
            >
              Imperial (in)
            </button>
          </div>
        </div>
      </div>

      {/* Main Spec Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div className="p-4 bg-[#1d1b1a] border border-[#2b2a28] flex flex-col justify-between">
          <span className="text-[10px] text-[#929189] uppercase tracking-widest font-semibold">Height</span>
          <div className="mt-2">
            <span className="font-serif text-2xl text-white font-normal">
              {unit === 'metric' ? '180 cm' : "5' 11\""}
            </span>
            <span className="block text-[11px] text-[#e0c298] mt-0.5">
              {unit === 'metric' ? "5' 11\"" : '180 cm'}
            </span>
          </div>
        </div>

        <div className="p-4 bg-[#1d1b1a] border border-[#2b2a28] flex flex-col justify-between">
          <span className="text-[10px] text-[#929189] uppercase tracking-widest font-semibold">Bust</span>
          <div className="mt-2">
            <span className="font-serif text-2xl text-white font-normal">
              {unit === 'metric' ? '81 cm' : '32"'}
            </span>
            <span className="block text-[11px] text-[#e0c298] mt-0.5">Cup 32B / 85A FR</span>
          </div>
        </div>

        <div className="p-4 bg-[#1d1b1a] border border-[#2b2a28] flex flex-col justify-between">
          <span className="text-[10px] text-[#929189] uppercase tracking-widest font-semibold">Waist</span>
          <div className="mt-2">
            <span className="font-serif text-2xl text-white font-normal">
              {unit === 'metric' ? '60 cm' : '23.5"'}
            </span>
            <span className="block text-[11px] text-[#e0c298] mt-0.5">Natural High Waist</span>
          </div>
        </div>

        <div className="p-4 bg-[#1d1b1a] border border-[#2b2a28] flex flex-col justify-between">
          <span className="text-[10px] text-[#929189] uppercase tracking-widest font-semibold">Hips</span>
          <div className="mt-2">
            <span className="font-serif text-2xl text-white font-normal">
              {unit === 'metric' ? '87 cm' : '34.5"'}
            </span>
            <span className="block text-[11px] text-[#e0c298] mt-0.5">Runway Standard</span>
          </div>
        </div>

        <div className="p-4 bg-[#1d1b1a] border border-[#2b2a28] flex flex-col justify-between">
          <span className="text-[10px] text-[#929189] uppercase tracking-widest font-semibold">Shoe</span>
          <div className="mt-2">
            <span className="font-serif text-2xl text-white font-normal">
              {unit === 'metric' ? '40 EU' : '9 US'}
            </span>
            <span className="block text-[11px] text-[#e0c298] mt-0.5">6.5 UK · 25.5 JPN</span>
          </div>
        </div>

        <div className="p-4 bg-[#1d1b1a] border border-[#2b2a28] flex flex-col justify-between">
          <span className="text-[10px] text-[#929189] uppercase tracking-widest font-semibold">Dress Size</span>
          <div className="mt-2">
            <span className="font-serif text-2xl text-white font-normal">
              {unit === 'metric' ? '34 EU' : '2 US'}
            </span>
            <span className="block text-[11px] text-[#e0c298] mt-0.5">6 UK · Extra Small</span>
          </div>
        </div>
      </div>

      {/* Feature Attributes Table */}
      <div className="bg-[#1d1b1a] border border-[#2b2a28] p-5">
        <span className="text-[10px] text-[#e0c298] uppercase tracking-[0.25em] font-semibold block mb-3">
          Facial &amp; Hair Profile
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs divide-y sm:divide-y-0 sm:divide-x divide-[#2b2a28]">
          <div className="pt-2 sm:pt-0">
            <span className="text-[10px] text-[#929189] uppercase tracking-widest block">Eye Color</span>
            <span className="text-white font-serif text-base mt-1 block">Dark Amber</span>
          </div>
          <div className="pt-2 sm:pt-0 sm:pl-4">
            <span className="text-[10px] text-[#929189] uppercase tracking-widest block">Hair Color</span>
            <span className="text-white font-serif text-base mt-1 block">Deep Espresso</span>
          </div>
          <div className="pt-2 sm:pt-0 sm:pl-4">
            <span className="text-[10px] text-[#929189] uppercase tracking-widest block">Skin Tone</span>
            <span className="text-white font-serif text-base mt-1 block">Warm Deep Ebony</span>
          </div>
          <div className="pt-2 sm:pt-0 sm:pl-4">
            <span className="text-[10px] text-[#929189] uppercase tracking-widest block">Hair Texture</span>
            <span className="text-white font-serif text-base mt-1 block">Type 4C / Editorial</span>
          </div>
        </div>
      </div>

      {/* Action Buttons: Copy Specs & Download PDF */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleCopySpecs}
          className="flex-1 py-4 px-4 bg-[#2b2a28] hover:bg-[#363433] text-white flex items-center justify-center gap-2.5 text-xs uppercase tracking-[0.2em] font-semibold transition-colors border border-[#363433]"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400">Measurements Copied to Clipboard</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-[#e0c298]" />
              <span>Copy Verified Measurements</span>
            </>
          )}
        </button>

        <button
          onClick={onOpenCompCard}
          className="flex-1 py-4 px-4 bg-white hover:bg-[#e0c298] text-[#141312] flex items-center justify-center gap-2.5 text-xs uppercase tracking-[0.2em] font-semibold transition-colors shadow-xl"
        >
          <FileDown className="w-4 h-4" />
          <span>Generate Print Comp Card (PDF)</span>
        </button>
      </div>

      {/* RAW CASTING POLAROIDS SECTION */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center justify-between border-b border-[#2b2a28] pb-3">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl text-white">
              Casting Polaroids &amp; Raw Digitals
            </h2>
            <p className="text-xs text-[#929189] font-light mt-0.5">
              Unretouched daylight casting polaroids · Taken Paris Agency Studio, Jan 2025
            </p>
          </div>
          <span className="hidden sm:inline-block text-[10px] text-[#e0c298] uppercase tracking-widest font-mono">
            Direct Casting Ready
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {POLAROIDS.map((p) => (
            <div
              key={p.id}
              className="flex flex-col bg-[#161413] border border-[#2b2a28] overflow-hidden group hover:border-[#e0c298] transition-all"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#211f1e]">
                <img
                  src={p.imageUrl}
                  alt={p.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-black/75 px-1.5 py-0.5 text-[8px] text-[#e0c298] font-mono tracking-widest uppercase">
                  RAW
                </div>
              </div>
              <div className="p-2.5 flex flex-col gap-0.5">
                <span className="text-[11px] text-white font-medium">{p.label}</span>
                <span className="text-[9px] text-[#929189] font-light">{p.specs}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TRAVEL & WORK ELIGIBILITY */}
      <div className="p-5 bg-[#161413] border border-[#2b2a28] flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#e0c298]" />
          <span className="text-[10px] text-[#e0c298] uppercase tracking-[0.25em] font-semibold">
            Travel, Visas &amp; Global Mobility
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 bg-[#1d1b1a] border border-[#2b2a28] flex flex-col">
            <span className="text-white font-medium">European Union Citizen</span>
            <span className="text-[#929189] text-[11px] mt-0.5">French Passport · Unrestricted Schengen</span>
          </div>
          <div className="p-3 bg-[#1d1b1a] border border-[#2b2a28] flex flex-col">
            <span className="text-white font-medium">United States (O-1 Visa)</span>
            <span className="text-[#929189] text-[11px] mt-0.5">Active Extraordinary Ability Status</span>
          </div>
          <div className="p-3 bg-[#1d1b1a] border border-[#2b2a28] flex flex-col">
            <span className="text-white font-medium">United Kingdom &amp; Japan</span>
            <span className="text-[#929189] text-[11px] mt-0.5">Direct Work Authorization Fast-Track</span>
          </div>
        </div>
      </div>
    </div>
  );
};
