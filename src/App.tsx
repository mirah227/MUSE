import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav, TabId } from './components/BottomNav';
import { MenuDrawer } from './components/MenuDrawer';
import { CastingQuickSheet } from './components/CastingQuickSheet';
import { CompCardModal } from './components/CompCardModal';
import { ImageLightbox } from './components/ImageLightbox';
import { WorksScreen } from './screens/WorksScreen';
import { StatsScreen } from './screens/StatsScreen';
import { RunwayScreen } from './screens/RunwayScreen';
import { AgencyScreen } from './screens/AgencyScreen';
import { PLATES_DATA, PlateItem } from './data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('works');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCastingSheetOpen, setIsCastingSheetOpen] = useState(false);
  const [isCompCardOpen, setIsCompCardOpen] = useState(false);
  const [selectedPlate, setSelectedPlate] = useState<PlateItem | null>(null);

  const handleSelectPlate = (plate: PlateItem) => {
    setSelectedPlate(plate);
  };

  const handleNextPlate = () => {
    if (!selectedPlate) return;
    const currentIndex = PLATES_DATA.findIndex((p) => p.id === selectedPlate.id);
    if (currentIndex < PLATES_DATA.length - 1) {
      setSelectedPlate(PLATES_DATA[currentIndex + 1]);
    } else {
      setSelectedPlate(PLATES_DATA[0]);
    }
  };

  const handlePrevPlate = () => {
    if (!selectedPlate) return;
    const currentIndex = PLATES_DATA.findIndex((p) => p.id === selectedPlate.id);
    if (currentIndex > 0) {
      setSelectedPlate(PLATES_DATA[currentIndex - 1]);
    } else {
      setSelectedPlate(PLATES_DATA[PLATES_DATA.length - 1]);
    }
  };

  const handleBookMe = () => {
    setActiveTab('agency');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#141312] text-[#e6e1df] min-h-screen flex flex-col font-sans selection:bg-[#e0c298] selection:text-[#141312]">
      {/* Editorial Header with MUSE branding, Gmail & WhatsApp icons, and subtle Book Me */}
      <Header
        activeTab={activeTab}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenCastingSheet={() => setIsCastingSheetOpen(true)}
        onBookMe={handleBookMe}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 w-full pt-16">
        {activeTab === 'works' && (
          <WorksScreen
            onSelectPlate={handleSelectPlate}
            onOpenCompCard={() => setIsCompCardOpen(true)}
            onNavigateToRunway={() => setActiveTab('runway')}
            onNavigateToAgency={handleBookMe}
          />
        )}

        {activeTab === 'stats' && (
          <StatsScreen onOpenCompCard={() => setIsCompCardOpen(true)} />
        )}

        {activeTab === 'runway' && <RunwayScreen />}

        {activeTab === 'agency' && <AgencyScreen />}
      </main>

      {/* Persistent Bottom Tab Bar */}
      <BottomNav activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Slide-over Index Menu */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          setIsMenuOpen(false);
        }}
        onOpenCompCard={() => {
          setIsCompCardOpen(true);
          setIsMenuOpen(false);
        }}
      />

      {/* Casting Director Quick Sheet */}
      <CastingQuickSheet
        isOpen={isCastingSheetOpen}
        onClose={() => setIsCastingSheetOpen(false)}
        onOpenCompCard={() => {
          setIsCastingSheetOpen(false);
          setIsCompCardOpen(true);
        }}
      />

      {/* Digital Comp Card Modal */}
      <CompCardModal
        isOpen={isCompCardOpen}
        onClose={() => setIsCompCardOpen(false)}
      />

      {/* High-Resolution Plate Lightbox */}
      <ImageLightbox
        plate={selectedPlate}
        onClose={() => setSelectedPlate(null)}
        onNext={handleNextPlate}
        onPrev={handlePrevPlate}
        hasNext={true}
        hasPrev={true}
      />
    </div>
  );
}
