import React, { useState } from 'react';
import { Sparkles, Calendar, ChevronRight, Eye } from 'lucide-react';
import { RUNWAY_CREDITS, RunwayCredit } from '../data/portfolioData';

interface RunwayScreenProps {
  onViewCreditPhoto?: (imgUrl: string, title: string) => void;
}

export const RunwayScreen: React.FC<RunwayScreenProps> = () => {
  const [selectedSeason, setSelectedSeason] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('rc-1');

  const filteredCredits = selectedSeason === 'all'
    ? RUNWAY_CREDITS
    : RUNWAY_CREDITS.filter((c) => c.year.toLowerCase().includes(selectedSeason.toLowerCase()));

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-20 gap-8">
      {/* Header */}
      <div className="flex flex-col gap-2 border-b border-[#2b2a28] pb-5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-[#e0c298] uppercase tracking-[0.25em] font-semibold">
            Selected Credits
          </span>
          <span className="text-[10px] text-[#929189] uppercase tracking-widest font-mono">
            2023 — 2025
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          Runway &amp; Campaigns
        </h1>
        <p className="text-xs text-[#929189] font-light tracking-wide">
          Haute Couture opening silhouettes, global beauty contracts, and luxury monographs.
        </p>

        {/* Season Filter Bar */}
        <div className="flex items-center gap-2 pt-3 overflow-x-auto no-scrollbar">
          {[
            { id: 'all', label: 'All Credits' },
            { id: '2025', label: '2025 Couture' },
            { id: '2024', label: '2024 Seasons' },
            { id: '2023', label: '2023 Retrospective' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedSeason(item.id)}
              className={`px-3 py-1.5 text-[10px] uppercase tracking-widest font-semibold transition-all whitespace-nowrap border ${
                selectedSeason === item.id
                  ? 'bg-white text-[#141312] border-white'
                  : 'bg-[#1d1b1a] text-[#929189] border-[#2b2a28] hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Credit Roster List */}
      <div className="flex flex-col gap-3">
        {filteredCredits.map((credit) => {
          const isExpanded = expandedId === credit.id;
          return (
            <div
              key={credit.id}
              className={`flex flex-col bg-[#1d1b1a] border transition-all ${
                isExpanded ? 'border-[#e0c298] shadow-xl' : 'border-[#2b2a28] hover:border-[#363433]'
              }`}
            >
              {/* Collapsed Header / Summary */}
              <div
                onClick={() => setExpandedId(isExpanded ? null : credit.id)}
                className="p-4 sm:p-5 flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#e0c298] uppercase tracking-widest font-semibold">
                    {credit.year}
                  </span>
                  <span className={`px-2 py-0.5 text-[9px] tracking-widest uppercase font-semibold ${
                    credit.labelBadge === 'Opening Look'
                      ? 'bg-[#e0c298]/15 text-[#e0c298] border border-[#e0c298]/30'
                      : 'bg-[#363433] text-[#e6e1df]'
                  }`}>
                    {credit.labelBadge}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-serif text-xl sm:text-2xl text-white">
                      {credit.designer}
                    </h2>
                    <p className="text-xs text-[#929189] font-light mt-1">
                      {credit.venue} • {credit.lookNumber}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-[#929189] transition-transform duration-300 mt-1 shrink-0 ${
                      isExpanded ? 'rotate-90 text-[#e0c298]' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Expanded Details Pane */}
              {isExpanded && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-2 border-t border-[#2b2a28] flex flex-col sm:flex-row gap-5">
                  {/* Photo Preview if available */}
                  {credit.imagePreview && (
                    <div className="w-full sm:w-48 aspect-[3/4] bg-[#0f0e0d] overflow-hidden shrink-0 border border-[#2b2a28]">
                      <img
                        src={credit.imagePreview}
                        alt={credit.designer}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex flex-col justify-between gap-3 flex-1 text-xs">
                    <div className="flex flex-col gap-2">
                      <div className="p-3 bg-[#211f1e] border border-[#2b2a28]">
                        <span className="text-[9px] uppercase tracking-widest text-[#e0c298] block">
                          Look Architecture &amp; Wardrobe Spec
                        </span>
                        <p className="text-white text-xs mt-1 leading-relaxed">
                          {credit.details}
                        </p>
                      </div>

                      {credit.notes && (
                        <div className="p-3 bg-[#161413] border border-[#2b2a28]">
                          <span className="text-[9px] uppercase tracking-widest text-[#929189] block">
                            Backstage &amp; Editorial Notes
                          </span>
                          <p className="text-[#c8c7be] text-xs mt-1 leading-relaxed font-light">
                            "{credit.notes}"
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-[#929189] pt-2 border-t border-[#2b2a28]">
                      <span>{credit.seasonCategory}</span>
                      {credit.photographer && <span>Archive Photo: {credit.photographer}</span>}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Agency Representation Cards from Design */}
      <div className="p-5 sm:p-6 bg-[#2b2a28] border border-[#363433] flex flex-col gap-4 shadow-xl">
        <span className="text-[10px] text-[#e0c298] tracking-[0.25em] uppercase font-semibold">
          Mother Agency &amp; Worldwide Representation
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div className="flex flex-col p-4 bg-[#1d1b1a] border border-[#363433]">
            <span className="font-serif text-base text-white">IMG Models Paris</span>
            <span className="text-[11px] text-[#c8c7be] mt-0.5">Women Division</span>
            <span className="text-[9px] text-[#e0c298] mt-2 tracking-widest uppercase font-semibold">
              Direct Board · Paris Desk
            </span>
          </div>
          <div className="flex flex-col p-4 bg-[#1d1b1a] border border-[#363433]">
            <span className="font-serif text-base text-white">Elite Worldwide</span>
            <span className="text-[11px] text-[#c8c7be] mt-0.5">New York &amp; Milan</span>
            <span className="text-[9px] text-[#e0c298] mt-2 tracking-widest uppercase font-semibold">
              High Board · International Contracts
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
