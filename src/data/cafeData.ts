export type Lang = "en" | "fr";

export interface BilingualText {
  en: string;
  fr: string;
}

export type MenuCategory = "espresso" | "signatures" | "tea" | "pastries";

export interface MenuItem {
  id: string;
  category: MenuCategory;
  name: BilingualText;
  notes: BilingualText;
  priceMad: number;
  tags?: ("V" | "GF")[];
  popular?: boolean;
  signature?: boolean;
  origin?: string;
}

export interface CafeLocation {
  id: string;
  name: BilingualText;
  neighborhood: string;
  address: string;
  hours: BilingualText;
  wifiSpeed: string;
  outlets: BilingualText;
  quietSeats: number;
  phone: string;
  mapEmbedUrl: string;
  directionsUrl: string;
  highlight: BilingualText;
}

export interface ProcessStep {
  step: string;
  title: BilingualText;
  description: BilingualText;
}

export interface Testimonial {
  id: string;
  name: string;
  role: BilingualText;
  location: string;
  quote: BilingualText;
}

export interface GalleryItem {
  id: string;
  src: string;
  category: "morning" | "workspace" | "pours";
  alt: BilingualText;
  caption: BilingualText;
}

export const MENU_CATEGORIES: { id: "all" | MenuCategory; label: BilingualText }[] = [
  { id: "all", label: { en: "All", fr: "Tout" } },
  { id: "espresso", label: { en: "Espresso", fr: "Espresso" } },
  { id: "signatures", label: { en: "Signatures & Cold", fr: "Créations & Glacés" } },
  { id: "tea", label: { en: "Mint Tea & Matcha", fr: "Thé & Matcha" } },
  { id: "pastries", label: { en: "Pastries & Study Bites", fr: "Pâtisseries & Encas" } },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "double-espresso",
    category: "espresso",
    name: { en: "Double Espresso", fr: "Double Espresso" },
    notes: { en: "Dark cocoa, roasted hazelnut, clean finish", fr: "Cacao noir, noisette grillée, finale nette" },
    priceMad: 22,
    tags: ["V", "GF"],
    origin: "Colombia Huila",
  },
  {
    id: "cortado",
    category: "espresso",
    name: { en: "House Cortado", fr: "Cortado Maison" },
    notes: { en: "Equal parts espresso and silky microfoam", fr: "Espresso équilibré et micro-mousse soyeuse" },
    priceMad: 26,
    tags: ["GF"],
  },
  {
    id: "flat-white",
    category: "espresso",
    name: { en: "Flat White", fr: "Flat White" },
    notes: { en: "Velvety milk over bright double ristretto", fr: "Lait velouté sur double ristretto vif" },
    priceMad: 30,
    tags: ["GF"],
    popular: true,
  },
  {
    id: "v60-pour-over",
    category: "espresso",
    name: { en: "V60 Single Origin", fr: "V60 Pure Origine" },
    notes: { en: "Bergamot, white peach, floral clarity", fr: "Bergamote, pêche blanche, clarté florale" },
    priceMad: 38,
    tags: ["V", "GF"],
    signature: true,
    origin: "Ethiopia Yirgacheffe",
  },
  {
    id: "orange-blossom-cortado",
    category: "signatures",
    name: { en: "Casablanca Orange Blossom Cortado", fr: "Cortado Fleur d'Oranger" },
    notes: { en: "Maarif citrus zest, raw honey, double shot", fr: "Zeste d'agrume, miel brut, double espresso" },
    priceMad: 34,
    tags: ["GF"],
    popular: true,
    signature: true,
  },
  {
    id: "atlas-cold-brew",
    category: "signatures",
    name: { en: "Atlas Tonic Cold Brew", fr: "Cold Brew Tonic de l'Atlas" },
    notes: { en: "18-hour steep, crisp tonic, rosemary", fr: "Infusion 18h, tonic vif, romarin frais" },
    priceMad: 36,
    tags: ["V", "GF"],
    signature: true,
  },
  {
    id: "saffron-cardamom-latte",
    category: "signatures",
    name: { en: "Saffron Cardamom Latte", fr: "Latte Safran & Cardamome" },
    notes: { en: "Taliouine saffron, crushed pod, oat milk", fr: "Safran de Taliouine, cardamome, lait d'avoine" },
    priceMad: 40,
    tags: ["V", "GF"],
    popular: true,
    signature: true,
  },
  {
    id: "iced-spanish-latte",
    category: "signatures",
    name: { en: "Iced Study Latte", fr: "Latte Glacé Révision" },
    notes: { en: "Chilled espresso, condensed oat, cinnamon", fr: "Espresso glacé, avoine douce, cannelle" },
    priceMad: 36,
    tags: ["V", "GF"],
  },
  {
    id: "uji-matcha-latte",
    category: "tea",
    name: { en: "Ceremonial Uji Matcha", fr: "Matcha Cérémoniel Uji" },
    notes: { en: "Stone-ground umami, oat or almond milk", fr: "Moulu sur pierre, lait d'avoine ou d'amande" },
    priceMad: 38,
    tags: ["V", "GF"],
    popular: true,
  },
  {
    id: "fresh-mint-infusion",
    category: "tea",
    name: { en: "Garden Mint & Verbena Pot", fr: "Théière Menthe & Verveine" },
    notes: { en: "Low-sugar green tea, fresh Casablanca mint", fr: "Thé vert léger, menthe fraîche, verveine" },
    priceMad: 24,
    tags: ["V", "GF"],
  },
  {
    id: "hibiscus-ginger-iced",
    category: "tea",
    name: { en: "Iced Bissap & Ginger", fr: "Infusion Glacée Hibiscus Gingembre" },
    notes: { en: "Ruby hibiscus, pressed ginger, zero caffeine", fr: "Hibiscus rubis, gingembre pressé, sans caféine" },
    priceMad: 30,
    tags: ["V", "GF"],
  },
  {
    id: "cardamom-croissant",
    category: "pastries",
    name: { en: "Warm Cardamom Croissant", fr: "Croissant Tiède Cardamome" },
    notes: { en: "Cultured butter layers, brown-sugar glaze", fr: "Feuilletage pur beurre, glaçage sucre brun" },
    priceMad: 20,
    popular: true,
  },
  {
    id: "almond-amlou-toast",
    category: "pastries",
    name: { en: "Sourdough & Almond Amlou Toast", fr: "Tartine Levain & Amlou Amande" },
    notes: { en: "Toasted country loaf, argan-almond spread", fr: "Pain au levain grillé, amlou amande-argan" },
    priceMad: 34,
    tags: ["V"],
  },
  {
    id: "fig-walnut-banana-bread",
    category: "pastries",
    name: { en: "Fig & Walnut Loaf Slice", fr: "Cake Figues & Noix" },
    notes: { en: "Olive-oil crumb, dried figs, toasted walnuts", fr: "Mie à l'huile d'olive, figues, noix grillées" },
    priceMad: 26,
    tags: ["V"],
  },
  {
    id: "avocado-zaatar-tartine",
    category: "pastries",
    name: { en: "Za'atar Labneh & Avocado Tartine", fr: "Tartine Labneh Zaatar & Avocat" },
    notes: { en: "Whipped labneh, wild thyme, lemon oil", fr: "Labneh fouetté, thym sauvage, huile citron" },
    priceMad: 44,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: { en: "Direct Sourcing", fr: "Récoltes Directes" },
    description: {
      en: "Seasonal single-origin lots from Ethiopia, Colombia, and Brazil—selected for clarity and sweetness.",
      fr: "Lots pure origine d'Éthiopie, Colombie et Brésil—sélectionnés pour leur clarté et douceur.",
    },
  },
  {
    step: "02",
    title: { en: "Small-Batch Roasting", fr: "Torréfaction Artisanale" },
    description: {
      en: "Roasted weekly in small batches to preserve floral aromatics without bitter char.",
      fr: "Torréfié chaque semaine en petits lots pour préserver les arômes sans amertume.",
    },
  },
  {
    step: "03",
    title: { en: "Precision Extraction", fr: "Extraction Précise" },
    description: {
      en: "Weighed to the tenth of a gram, brewed with filtered water balanced for Casablanca.",
      fr: "Pesé au dixième de gramme, extrait avec une eau filtrée calibrée pour Casablanca.",
    },
  },
  {
    step: "04",
    title: { en: "Unhurried Pour", fr: "Service Apaisé" },
    description: {
      en: "Served in warm stoneware at your study table—never rushed, always consistent.",
      fr: "Servi en céramique chaude à votre table de travail—sans hâte, toujours régulier.",
    },
  },
];

export const LOCATIONS: CafeLocation[] = [
  {
    id: "maarif",
    name: { en: "Maarif Flagship & Roastery", fr: "Flagship & Torréfaction Maarif" },
    neighborhood: "Maarif, Casablanca",
    address: "42 Rue Ibnou Mounir, Maarif, Casablanca 20330",
    hours: { en: "Daily · 07:30 – 22:30", fr: "Tous les jours · 07h30 – 22h30" },
    wifiSpeed: "300 Mbps Fiber",
    outlets: { en: "Power outlet at every seat", fr: "Prise électrique à chaque place" },
    quietSeats: 48,
    phone: "+212 522 48 19 30",
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=-7.6420%2C33.5790%2C-7.6280%2C33.5890&layer=mapnik&marker=33.5840%2C-7.6350",
    directionsUrl: "https://www.openstreetmap.org/?mlat=33.5840&mlon=-7.6350#map=16/33.5840/-7.6350",
    highlight: {
      en: "Upstairs Silent Study Mezzanine + Roastery Bar",
      fr: "Mezzanine calme d'étude à l'étage + Comptoir torréfaction",
    },
  },
  {
    id: "gauthier",
    name: { en: "Gauthier Study Bar", fr: "Comptoir d'Étude Gauthier" },
    neighborhood: "Gauthier, Casablanca",
    address: "18 Boulevard Rachidi, Gauthier, Casablanca 20060",
    hours: { en: "Mon–Sun · 08:00 – 22:00", fr: "Lun–Dim · 08h00 – 22h00" },
    wifiSpeed: "300 Mbps Fiber",
    outlets: { en: "USB-C & EU plugs along all booths", fr: "Prises USB-C & EU sur chaque banquette" },
    quietSeats: 32,
    phone: "+212 522 27 64 12",
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=-7.6320%2C33.5850%2C-7.6180%2C33.5950&layer=mapnik&marker=33.5900%2C-7.6250",
    directionsUrl: "https://www.openstreetmap.org/?mlat=33.5900&mlon=-7.6250#map=16/33.5900/-7.6250",
    highlight: {
      en: "Sunlit Cedarwood Courtyard + Group Booths",
      fr: "Patio en cèdre ensoleillé + Banquettes collaboratives",
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "salma",
    name: "Salma B.",
    role: { en: "Architecture Student, ENA", fr: "Étudiante en Architecture, ENA" },
    location: "Maarif",
    quote: {
      en: "The upstairs mezzanine is the only place in Maarif where I can finish studio plates without fighting for an outlet or loud music.",
      fr: "La mezzanine est le seul endroit au Maarif où je peux boucler mes rendus sans chercher une prise ni subir de musique forte.",
    },
  },
  {
    id: "youssef",
    name: "Youssef K.",
    role: { en: "Remote Product Engineer", fr: "Ingénieur Produit en Télétravail" },
    location: "Gauthier",
    quote: {
      en: "Solid 300 Mbps fiber for standups, and the Orange Blossom Cortado tastes like Casablanca mornings in a cup.",
      fr: "Fibre 300 Mbps stable pour mes réunions, et le Cortado Fleur d'Oranger capture les matins de Casablanca.",
    },
  },
  {
    id: "ines",
    name: "Inès M.",
    role: { en: "Medical Resident", fr: "Interne en Médecine" },
    location: "Maarif",
    quote: {
      en: "Open until 22:30 during exam weeks with calm lighting and genuinely balanced V60 pours—never burnt.",
      fr: "Ouvert jusqu'à 22h30 pendant les partiels avec une lumière douce et un V60 vraiment équilibré, jamais brûlé.",
    },
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/hero-study.svg",
    category: "morning",
    alt: {
      en: "Morning cortado beside an open notebook and laptop on cedarwood",
      fr: "Cortado du matin à côté d'un carnet ouvert et ordinateur sur bois de cèdre",
    },
    caption: {
      en: "08:15 · Morning light on the Maarif study tables",
      fr: "08h15 · Lumière du matin sur les tables d'étude du Maarif",
    },
  },
  {
    id: "g2",
    src: "/images/signature-drinks.svg",
    category: "pours",
    alt: {
      en: "Atlas Cold Brew Tonic, Saffron Latte, and V60 carafe on stone counter",
      fr: "Cold Brew Tonic, Latte Safran et carafe V60 sur comptoir en pierre",
    },
    caption: {
      en: "Signature pours crafted with Taliouine saffron and fresh citrus",
      fr: "Créations maison au safran de Taliouine et agrumes frais",
    },
  },
  {
    id: "g3",
    src: "/images/roasting-craft.svg",
    category: "pours",
    alt: {
      en: "Gooseneck kettle blooming single-origin coffee grounds in ceramic dripper",
      fr: "Verseuse col-de-cygne infusant un café pure origine en porte-filtre céramique",
    },
    caption: {
      en: "Small-batch Ethiopian Yirgacheffe blooming at 93°C",
      fr: "Éthiopie Yirgacheffe en petit lot infusé à 93°C",
    },
  },
  {
    id: "g4",
    src: "/images/cafe-interior.svg",
    category: "workspace",
    alt: {
      en: "Casablanca study house interior with zellige details and brass lamps",
      fr: "Intérieur du café d'étude casablancais avec détails zellige et lampes en laiton",
    },
    caption: {
      en: "Calm cedarwood booths with power outlets and natural light",
      fr: "Banquettes en cèdre calmes avec prises électriques et lumière naturelle",
    },
  },
];

export const UI_COPY = {
  nav: {
    menu: { en: "Menu", fr: "Carte" },
    story: { en: "Story", fr: "Histoire" },
    locations: { en: "Locations", fr: "Adresses" },
    gallery: { en: "Gallery", fr: "Galerie" },
    contact: { en: "Contact", fr: "Contact" },
    order: { en: "Order Ahead", fr: "Commander" },
  },
  hero: {
    eyebrow: { en: "CASABLANCA · MAARIF & GAUTHIER", fr: "CASABLANCA · MAARIF & GAUTHIER" },
    headline: { en: "Brewed for Deep Work.", fr: "Infusé pour vos idées." },
    subhead: {
      en: "Small-batch specialty coffee, 300 Mbps fiber, and quiet cedarwood tables built for Casablanca students and remote builders.",
      fr: "Café de spécialité en petits lots, fibre 300 Mbps et tables calmes en cèdre pensés pour les étudiants et télétravailleurs à Casablanca.",
    },
    primaryCta: { en: "Order Ahead", fr: "Commander à l'avance" },
    secondaryCta: { en: "Explore the Menu", fr: "Voir la carte" },
  },
  highlights: [
    {
      label: { en: "300 Mbps Fiber", fr: "Fibre 300 Mbps" },
      detail: { en: "Reliable low-latency Wi-Fi for calls & uploads", fr: "Wi-Fi stable et rapide pour vos visios et rendus" },
    },
    {
      label: { en: "Power at Every Seat", fr: "Prise à Chaque Place" },
      detail: { en: "EU + USB-C outlets across booths and tables", fr: "Prises EU + USB-C sur toutes les tables" },
    },
    {
      label: { en: "Quiet Study Zone", fr: "Zone Calme d'Étude" },
      detail: { en: "Dedicated low-volume mezzanine upstairs", fr: "Mezzanine silencieuse dédiée à l'étage" },
    },
    {
      label: { en: "Open Late · 07:30–22:30", fr: "Ouvert Tard · 07h30–22h30" },
      detail: { en: "From 8 AM deadlines to evening thesis sprints", fr: "Des matins clairs jusqu'aux révisions du soir" },
    },
  ],
  storyPreview: {
    eyebrow: { en: "OUR STORY", fr: "NOTRE HISTOIRE" },
    title: { en: "Global Harvests. Moroccan Warmth.", fr: "Récoltes d'ailleurs. Accueil d'ici." },
    body: {
      en: "We started locas Caffee in Casablanca with a simple observation: great third-wave espresso rarely came with a comfortable desk, and coworking spaces rarely served honest coffee. Here, direct-trade single origins meet unhurried Moroccan hospitality.",
      fr: "Nous avons fondé locas Caffee à Casablanca partant d'un constat simple : le vrai café de spécialité manquait souvent d'espaces calmes pour travailler, et les coworkings manquaient de bon café. Ici, les récoltes directes rencontrent la chaleur casablancaise.",
    },
    cta: { en: "Read Our Story", fr: "Lire notre histoire" },
  },
  signatures: {
    eyebrow: { en: "HOUSE SIGNATURES", fr: "CRÉATIONS MAISON" },
    title: { en: "Crafted for Focus & Ritual", fr: "Pensés pour le Rythme & le Goût" },
    subtitle: {
      en: "Balanced pours pairing Ethiopian & Colombian beans with Taliouine saffron and Maarif citrus.",
      fr: "Des tasses équilibrées mariant grains d'Éthiopie et de Colombie au safran de Taliouine et agrumes.",
    },
    addBtn: { en: "Add to Order", fr: "Ajouter" },
  },
  menuSection: {
    eyebrow: { en: "DAILY MENU", fr: "LA CARTE DU JOUR" },
    title: { en: "Honest Beans. Zero Guesswork.", fr: "Grains honnêtes. Zéro compromis." },
    dietaryAll: { en: "All Dietary", fr: "Tout" },
    popularBadge: { en: "House Favorite", fr: "Coup de Cœur" },
  },
  processSection: {
    eyebrow: { en: "FROM FARM TO STUDY TABLE", fr: "DU GRAIN À VOTRE TABLE" },
    title: { en: "Four Quiet Steps to a Cleaner Cup", fr: "Quatre Étapes vers une Tasse Nette" },
  },
  gallerySection: {
    eyebrow: { en: "ATMOSPHERE", fr: "ATMOSPHÈRE" },
    title: { en: "Morning Light & Cedarwood", fr: "Lumière Matinale & Bois de Cèdre" },
    cta: { en: "View Full Gallery", fr: "Voir toute la galerie" },
  },
  locationsSection: {
    eyebrow: { en: "CASABLANCA SPACES", fr: "NOS ADRESSES À CASABLANCA" },
    title: { en: "Find Your Table", fr: "Trouver votre table" },
    directions: { en: "Open Map", fr: "Voir la carte" },
    reserveCta: { en: "Reserve a Study Spot", fr: "Réserver une place" },
  },
  testimonialsSection: {
    eyebrow: { en: "COMMUNITY VOICES", fr: "CE QU'ILS EN DISENT" },
    title: { en: "Casablanca’s Living Room for Builders", fr: "Le Repaire Casablancais des Esprits Créatifs" },
  },
  ctaBand: {
    eyebrow: { en: "SKIP THE LINE OR BOOK A DESK", fr: "GAGNEZ DU TEMPS OU RÉSERVEZ" },
    title: { en: "Ready for Your Next Focus Session?", fr: "Prêt pour votre prochaine session ?" },
    body: {
      en: "Pre-order your espresso for counter pickup or reserve a power-equipped study table in Maarif or Gauthier.",
      fr: "Précommandez votre espresso au comptoir ou réservez une table avec prise à Maarif ou Gauthier.",
    },
    primary: { en: "Order Pickup", fr: "Commander à emporter" },
    secondary: { en: "Reserve a Table", fr: "Réserver une table" },
  },
  newsletter: {
    eyebrow: { en: "WEEKLY ROAST NOTES", fr: "LETTRES DE TORRÉFACTION" },
    title: { en: "Fresh harvests & exam-week late hours.", fr: "Nouveaux lots & horaires prolongés d'examens." },
    placeholder: { en: "you@example.com", fr: "vous@exemple.com" },
    button: { en: "Join List", fr: "S'inscrire" },
    success: {
      en: "You're on the list—expect our next roast drop on Friday.",
      fr: "Inscription confirmée—prochaine lettre de torréfaction vendredi.",
    },
    error: {
      en: "Please enter a valid email address.",
      fr: "Veuillez saisir une adresse e-mail valide.",
    },
  },
  footer: {
    tagline: {
      en: "Specialty coffee roastery & calm study house in Casablanca.",
      fr: "Torréfaction de spécialité & espace d'étude calme à Casablanca.",
    },
    explore: { en: "Explore", fr: "Explorer" },
    visit: { en: "Casablanca", fr: "Casablanca" },
    rights: { en: "All rights reserved.", fr: "Tous droits réservés." },
  },
};
