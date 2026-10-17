export interface PlateItem {
  id: string;
  plateNumber: string;
  title: string;
  subtitle: string;
  category: 'couture' | 'editorial' | 'beauty' | 'runway';
  categoryLabel: string;
  publication: string;
  issue: string;
  location: string;
  year: string;
  description: string;
  imageUrl: string;
  artDirection?: string;
  photographer?: string;
  stylist?: string;
  aspectRatio: string;
}

export interface RunwayCredit {
  id: string;
  year: string;
  seasonCategory: string;
  labelBadge: string;
  designer: string;
  venue: string;
  details: string;
  lookNumber: string;
  photographer?: string;
  notes?: string;
  imagePreview?: string;
}

export interface AgencyContact {
  name: string;
  city: string;
  division: string;
  board: string;
  agent: string;
  email: string;
  phone: string;
}

export interface PolaroidItem {
  id: string;
  label: string;
  specs: string;
  date: string;
  imageUrl: string;
}

export const PORTFOLIO_IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTS9IkGBvrDu4wb_RciBd-50Btxda3BhIlkWuLoac7L8xPSGekFAJ1CPhcTPPe6FWtutgJP2AvXuAVAmSazRTyqRiVyz4pL94L5zP36e580m1mMxduQit157TnYNScmvYQzArFSKQOR1Rpk0ZsJuQUfgf6i92rc99T7f9E6ClM-s-FFxn-PPlmIh9MLVi04X5OMLYaguOm-YJtCwFL0TPCkv77Qe6HYK67QqW1hvIB9uHcvhRBSeQ3USEYwWIaBjmZiQ",
  plate1: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtKaLpEzYcJQyLfXBhMcEyYs_9vRyUc1XhvvpzTzsRZKiNmGjRwR91P1EcN29PYkOXl12Oxk7WyxsSHrZODGZMce_Nj_gQaH5YnCHTx9LO1_rLZrkogaai2tvoC1dQdjL2pS2zcjEQnR1QVk0xyOTDgGfMzS-Tog9FAtQiLAV7gshkkN05LRWxsuxcjqh61S7X9-j4l083aOEqVk8ubpZaatY5kE9NTCeEVsZMj-ocrNUEPoM-lFiW",
  plate2: "https://lh3.googleusercontent.com/aida-public/AB6AXuDULe7IqD-SpWzlsbb49wdj8xFDVyRC5Zgn1POy_ly5TQUl4PvaSauPEr2aTIzD-lTCAowLxQDXxd_J6lA-aKF-b1KGhCCND0o6tIQfOdNMpPSgU_v-7knk4x_hlKBeSj74QpjB4_Wg8Az8p79XqbZYm15wC_XiIjA6RVi7heYd4QKbQzozKk0uViON_5sgDoUj_W6Eg5IJ9ZOhTesFbyP62NXO6l9OwHg5IPEbgl7-Ln-rMAvdW0fCVcGHf3EUlmot1A",
  plate3: "https://lh3.googleusercontent.com/aida-public/AB6AXuAF89ced1-2bWMhS_IZlUKsBqW9dfmZ9IgaWVOisTJV7Cdg0XnyHR_-zlIK5usUIPsppiDWZgv2JwwAoMN_sIFw2M1iEI1mI0E1keYR0Ywl2XvR-AF15Xu0RLifYp96S8dHpTez3t665asJUi-xepyVDr50LooTZXPERRXEj43Ajk5csm6lExynWjKfGbAvizliVdaDYqXQVOIhkJ-ReYehQoHpXtfHpwA6REpnq5kLHtO_bbFDTdu75i7Wp19SPKq6Gg",
  plate4: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2RYzikOPf-MCJbet5tmC1iuzOpgvxTQRRpne3kAR1kXNEddHslwug5H-dBcuT093YhsZ-pgX93ywEbmZMLyTGABdglzTrOYwU4yppQySBfD2gzNi6LU7iK8IDUmoY452RhbI3d8GQZTAkK-2b9qNW5Lo3glF5F0xQw22anr64F6RO-crklPRJv4SCRB9WyH_biIxKlIkWLUZjw6-ti_-hvURB4IavE2HdJw1-30uVYmZaXwfjum0z1en8cXOEclrLkQ",
};

export const PLATES_DATA: PlateItem[] = [
  {
    id: "plate-01",
    plateNumber: "Plate 01",
    title: "The Sculptural Pleat — Opening Silhouette",
    subtitle: "An architectural study in motion. Custom duchess satin and pleated noir taffeta engineered for Paris Haute Couture.",
    category: "couture",
    categoryLabel: "Haute Couture Week",
    publication: "Vogue Italia",
    issue: "N° 842",
    location: "Paris",
    year: "2025",
    description: "Commissioned opening silhouette exploring volume, gravitational tension, and monolithic black draping under direct spotlight at the Grand Palais.",
    imageUrl: PORTFOLIO_IMAGES.plate1,
    photographer: "Paolo Roversi Studio",
    stylist: "Carine Roitfeld Associates",
    artDirection: "Studio Saint-Honoré",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "plate-02",
    plateNumber: "Plate 02",
    title: "Noir Été",
    subtitle: "Sunlit Raw Portrait",
    category: "editorial",
    categoryLabel: "Editorial Feature",
    publication: "L'Officiel Paris",
    issue: "August Issue",
    location: "Cap d'Antibes",
    year: "2024",
    description: "Natural golden hour sun capture emphasizing bone structure, radiant skin tone, and organic elegance.",
    imageUrl: PORTFOLIO_IMAGES.plate2,
    photographer: "Txema Yeste",
    stylist: "Emmanuelle Alt",
    aspectRatio: "aspect-[9/16]"
  },
  {
    id: "plate-03",
    plateNumber: "Plate 03",
    title: "Vision Optique",
    subtitle: "Couture Eyewear Spec",
    category: "beauty",
    categoryLabel: "Accessory & Beauty",
    publication: "Harper's Bazaar",
    issue: "Spring Preview",
    location: "Milan",
    year: "2024",
    description: "Precision macro eyewear study with gold wire frames contrasting against deep espresso complexion and sculpted jawline.",
    imageUrl: PORTFOLIO_IMAGES.plate3,
    photographer: "Luigi & Iango",
    stylist: "Anna Dello Russo Studio",
    aspectRatio: "aspect-[2/3]"
  },
  {
    id: "plate-04",
    plateNumber: "Plate 04",
    title: "Beauté Éclat — Golden Glow Highlight",
    subtitle: "Global Ambassador Campaign • Spring/Summer",
    category: "beauty",
    categoryLabel: "Beauty Global Exclusive",
    publication: "Art Direction • Studio Saint-Honoré",
    issue: "2024 Retrospective",
    location: "Paris",
    year: "2024",
    description: "Multinational luxury cosmetics campaign featuring dual-brush application technique, bronze illumination, and glassy lip treatment.",
    imageUrl: PORTFOLIO_IMAGES.plate4,
    photographer: "Mert & Marcus",
    stylist: "Pat McGrath Labs Collective",
    artDirection: "Studio Saint-Honoré",
    aspectRatio: "aspect-[4/5]"
  }
];

export const RUNWAY_CREDITS: RunwayCredit[] = [
  {
    id: "rc-1",
    year: "2025 Couture",
    seasonCategory: "Spring/Summer 2025",
    labelBadge: "Opening Look",
    designer: "Schiaparelli Haute Couture",
    venue: "Paris Fashion Week • Grand Palais Éphémère",
    details: "Look 01 • Custom Pleated Noir Duchess Taffeta Architectural Bodice",
    lookNumber: "Look 01",
    photographer: "Giovanni Giannoni",
    notes: "Opened the showcase under artistic director Daniel Roseberry; statuesque pacing with zero soundtrack.",
    imagePreview: PORTFOLIO_IMAGES.plate1
  },
  {
    id: "rc-2",
    year: "2024 Campaign",
    seasonCategory: "Fall/Winter 2024",
    labelBadge: "Global Contract",
    designer: "Yves Saint Laurent Beauté",
    venue: "Global Ambassador Billboard & Moving Image",
    details: "Worldwide Rollout across Paris, New York, Tokyo, Milan flagship boutiques",
    lookNumber: "Campaign Lead",
    photographer: "Txema Yeste",
    notes: "Face of the iconic 'Ombre Couture' chromatic collection.",
    imagePreview: PORTFOLIO_IMAGES.plate4
  },
  {
    id: "rc-3",
    year: "2024 Runway",
    seasonCategory: "Resort 2024",
    labelBadge: "Lead Lookbook",
    designer: "Balmain Resort Collection",
    venue: "Photographed in Cap d'Antibes • Private Villa Eilenroc",
    details: "Lead Model Runway & Archival Lookbook • Structured Gold-Embroidered Velvet",
    lookNumber: "Look 18 & 24",
    photographer: "Olivier Rousteing Atelier",
    notes: "Editorial feature shot during Cannes Film Week.",
    imagePreview: PORTFOLIO_IMAGES.plate2
  },
  {
    id: "rc-4",
    year: "2023 Editorial",
    seasonCategory: "Winter 2023",
    labelBadge: "Special Feature",
    designer: "Mugler Architecture",
    venue: "Print & Digital Monograph • Photographed by Txema Yeste",
    details: "Corsetry and chrome metal-accented evening sheath silhouettes",
    lookNumber: "Editorial Monograph",
    photographer: "Txema Yeste",
    notes: "16-page exclusive in Paris collectors' hardbound edition.",
    imagePreview: PORTFOLIO_IMAGES.plate3
  },
  {
    id: "rc-5",
    year: "2023 Couture",
    seasonCategory: "Fall 2023",
    labelBadge: "Runway Finale",
    designer: "Alaïa Sculptural Geometry",
    venue: "Rue de Moussy • Paris Atelier",
    details: "Moulage draping in seamless knit and oiled calfskin",
    lookNumber: "Look 32 Finale",
    photographer: "Pietert Hugo Studio",
    notes: "Closing look for Pieter Mulier's monumental winter salon presentation."
  }
];

export const AGENCIES: AgencyContact[] = [
  {
    name: "IMG Models Paris",
    city: "Paris, France",
    division: "Women Division",
    board: "Direct Board",
    agent: "Hélène de Courcelles",
    email: "helene.c@imgmodels.com",
    phone: "+33 1 42 68 00 00"
  },
  {
    name: "Elite Worldwide",
    city: "New York & Milan",
    division: "High Fashion Board",
    board: "High Board",
    agent: "Matteo Bellini",
    email: "matteo.b@elitemodel.com",
    phone: "+1 212 529 9700"
  }
];

export const POLAROIDS: PolaroidItem[] = [
  {
    id: "pol-1",
    label: "Raw Frontal Digital",
    specs: "Zero Makeup · Natural Studio Key Light",
    date: "January 2025",
    imageUrl: PORTFOLIO_IMAGES.hero
  },
  {
    id: "pol-2",
    label: "Left Profile & Jawline",
    specs: "Hair Pulled Slick Back · 180cm Proportion",
    date: "January 2025",
    imageUrl: PORTFOLIO_IMAGES.plate2
  },
  {
    id: "pol-3",
    label: "Full Length Silhouette",
    specs: "Classic Black Bodysuit · Neutral Stance",
    date: "January 2025",
    imageUrl: PORTFOLIO_IMAGES.plate1
  },
  {
    id: "pol-4",
    label: "3/4 High Contrast Close-Up",
    specs: "Eye & Lip Detail · Dark Amber Iris",
    date: "January 2025",
    imageUrl: PORTFOLIO_IMAGES.plate3
  }
];
