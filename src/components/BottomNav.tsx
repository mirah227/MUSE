import React from 'react';
import { LayoutGrid, BadgeCheck, Camera, Calendar } from 'lucide-react';

export type TabId = 'works' | 'stats' | 'runway' | 'agency';

interface BottomNavProps {
  activeTab: TabId;
  onSelectTab: (tab: TabId) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onSelectTab }) => {
  const tabs: { id: TabId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'works', label: 'Works', icon: LayoutGrid },
    { id: 'stats', label: 'Stats', icon: BadgeCheck },
    { id: 'runway', label: 'Runway', icon: Camera },
    { id: 'agency', label: 'Agency', icon: Calendar },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-40 pb-safe bg-[#0f0e0d]/95 backdrop-blur-xl border-t border-[#2b2a28]/80 shadow-[0_-4px_24px_rgba(0,0,0,0.6)]">
      <div className="max-w-md mx-auto flex items-center justify-around h-16 px-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => {
                onSelectTab(tab.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center justify-center min-w-[54px] min-h-[48px] py-1 transition-all ${
                isActive
                  ? 'text-white'
                  : 'text-[#929189] hover:text-[#e6e1df]'
              }`}
            >
              <IconComponent className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'scale-110 text-white stroke-[2]' : 'stroke-[1.5]'}`} />
              <span className={`text-[10px] uppercase tracking-[0.18em] font-medium mt-1 ${isActive ? 'text-white' : 'text-[#929189]'}`}>
                {tab.label}
              </span>
              {isActive && (
                <span className="w-1.5 h-1.5 bg-[#e0c298] rounded-full mt-0.5 animate-fadeIn" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
