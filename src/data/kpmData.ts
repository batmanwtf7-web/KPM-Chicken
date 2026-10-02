/**
 * KPM FRIED CHICKEN — CENTRAL BRAND & FRANCHISE DATA CONFIGURATION
 * 
 * Primary Source of Truth: Official KPM Franchise PDF.
 * Modify this file to update contacts, inclusions, pricing, or locations.
 */

// Image assets imported for Vite bundling
import kpmLogoImg from '../assets/images/kpm_official_logo_v2_1790932373783.jpg';
import kpmCartShowcaseImg from '../assets/images/kpm_cart_showcase_1790930892182.jpg';
import kpmHeroChickenImg from '../assets/images/kpm_hero_fried_chicken_1790930910821.jpg';
import kpmEquipmentImg from '../assets/images/kpm_equipment_setup_1790930926530.jpg';
import kpmNightCartImg from '../assets/images/kpm_cart_night_ambiance_1790930951990.jpg';

export interface PackageInclusionItem {
  id: number;
  itemNumber: number;
  name: string;
  quantity: string;
  category: 'cart' | 'cooking' | 'preparation' | 'cooling' | 'customer' | 'branding';
  categoryLabel: string;
  description: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'Fried Chicken' | 'Burgers' | 'Sandwiches' | 'Momos' | 'Sides' | 'Combos' | 'Beverages';
  description: string;
  priceNote: string;
  isPopular?: boolean;
  isSignature?: boolean;
}

export const KPM_DATA = {
  // Brand Identity
  brandName: "KPM Fried Chicken",
  brandSubtitle: "8 × 4 Premium Cart Franchise",
  officialMascotTagline: "Fierce Flavor · Pure Crispiness · Modern Royalty",
  
  // Contacts & Links
  phone: "6369998326",
  phoneFormatted: "+91 63699 98326",
  phoneUrl: "tel:+916369998326",
  
  whatsapp: "6369998326",
  whatsappUrl: "https://wa.me/916369998326?text=Hi%20KPM%20Fried%20Chicken%2C%20I%20am%20interested%20in%20the%208%C3%974%20Premium%20Cart%20Franchise%20Package.%20Please%20share%20details.",
  
  instagram: "kpm_fried_chicken",
  instagramUrl: "https://instagram.com/kpm_fried_chicken",
  
  // Email address placeholder as specified: Email has not been provided yet
  email: "",
  emailPlaceholder: "Email address coming soon",
  
  // Official Location
  location: "Komarapalayam, Salem Main Road, Old Saravana Theatre Front",
  locationFullAddress: "KPM Fried Chicken, Auto Consulting, Salem Main Rd, JKK Nattraja Nagar, Kammavarpalayam, Komarapalayam, Tamil Nadu 638183",
  locationDirectionsUrl: "https://maps.app.goo.gl/Gt9cnFybxVXNBdHN8?g_st=aw",
  mapEmbedUrl: "https://maps.google.com/maps?q=KPM+Fried+Chicken,+Salem+Main+Rd,+Komarapalayam,+Tamil+Nadu+638183&t=&z=16&ie=UTF8&iwloc=&output=embed",
  
  // Franchise Investment Pricing
  // As per instructions: The supplied PDF DOES NOT state the franchise cost.
  // DO NOT make up a price.
  franchiseInvestment: "Enquire for current pricing",
  franchiseInvestmentNote: "Contact KPM management for current package pricing and location eligibility.",
  
  // Images
  images: {
    logo: kpmLogoImg,
    cartHero: kpmCartShowcaseImg,
    heroChicken: kpmHeroChickenImg,
    equipmentSetup: kpmEquipmentImg,
    nightAmbiance: kpmNightCartImg,
  },

  // 4 Official Franchise Highlights (Directly from Page 3 of PDF)
  benefits: [
    {
      id: "no-royalty",
      title: "NO ROYALTY",
      description: "No royalty • Keep your business earnings with you",
      icon: "BadgePercent",
      highlight: "100% Earnings Retained",
    },
    {
      id: "lifetime-support",
      title: "LIFETIME BRAND SUPPORT",
      description: "Ongoing KPM Fried Chicken brand support",
      icon: "LifeBuoy",
      highlight: "Continuous Guidance",
    },
    {
      id: "unique-masala",
      title: "OWN UNIQUE MASALA",
      description: "KPM Fried Chicken's own unique masala",
      icon: "Flame",
      highlight: "Secret Proprietary Blend",
    },
    {
      id: "manpower-support",
      title: "1ST DAY MANPOWER SUPPORT",
      description: "Opening-day manpower support to help you launch smoothly",
      icon: "Users2",
      highlight: "On-Site Launch Team",
    },
  ],

  // 18 Official Franchise Package Inclusions (Directly from Pages 1 & 2 of PDF)
  // Exact quantities, unedited.
  packageInclusions: [
    {
      id: 1,
      itemNumber: 1,
      name: "Premium 8 × 4 Cart",
      quantity: "1",
      category: "cart",
      categoryLabel: "The Cart",
      description: "Heavy-duty custom mobile food cart with durable yellow-black finish, service counters, wheels, and overhead weather canopy.",
    },
    {
      id: 2,
      itemNumber: 2,
      name: "Full Light Setup + Logo Board + Lollipop Board",
      quantity: "1 Set",
      category: "cart",
      categoryLabel: "The Cart",
      description: "Complete LED illumination setup, illuminated KPM primary circular logo board, and high-visibility roadside lollipop signage.",
    },
    {
      id: 3,
      itemNumber: 3,
      name: "16 Litre Gas Deep Fryer",
      quantity: "1",
      category: "cooking",
      categoryLabel: "Cooking Equipment",
      description: "High-capacity commercial gas deep fryer with precision temperature management for high-volume chicken frying batches.",
    },
    {
      id: 4,
      itemNumber: 4,
      name: "8 Litre Gas Deep Fryer",
      quantity: "1",
      category: "cooking",
      categoryLabel: "Cooking Equipment",
      description: "Dedicated auxiliary gas deep fryer for fries, nuggets, strips, and specialty appetizers.",
    },
    {
      id: 5,
      itemNumber: 5,
      name: "Breading SS Vessel",
      quantity: "1",
      category: "preparation",
      categoryLabel: "Preparation",
      description: "Food-grade stainless steel breading tub designed for uniform flour coating and signature crunch texture.",
    },
    {
      id: 6,
      itemNumber: 6,
      name: "Large Size Wooden Cutting Board",
      quantity: "2",
      category: "preparation",
      categoryLabel: "Preparation",
      description: "High-density heavy-duty commercial wooden preparation boards for safe and hygienic cutting.",
    },
    {
      id: 7,
      itemNumber: 7,
      name: "Water Dipper SS Vessel with Basket",
      quantity: "1",
      category: "preparation",
      categoryLabel: "Preparation",
      description: "Stainless steel water dipper with stainless mesh dipping basket for proper breading hydration and battering.",
    },
    {
      id: 8,
      itemNumber: 8,
      name: "Momos Steamer",
      quantity: "1",
      category: "cooking",
      categoryLabel: "Cooking Equipment",
      description: "Multi-tier commercial momos steamer for fast, consistent steam preparation.",
    },
    {
      id: 9,
      itemNumber: 9,
      name: "Premium Sandwich Toaster Machine",
      quantity: "1",
      category: "cooking",
      categoryLabel: "Cooking Equipment",
      description: "Heavy-duty commercial sandwich griller/toaster for rapid toast cycles and golden melt.",
    },
    {
      id: 10,
      itemNumber: 10,
      name: "35 Litre Cooling Maintain Box",
      quantity: "2",
      category: "cooling",
      categoryLabel: "Storage & Cooling",
      description: "Insulated 35-litre thermal cooling boxes designed for safe marinated meat and perishable cold chain storage.",
    },
    {
      id: 11,
      itemNumber: 11,
      name: "Ice Gel Pad",
      quantity: "5",
      category: "cooling",
      categoryLabel: "Storage & Cooling",
      description: "Reusable industrial refrigerant gel packs for sustained sub-zero temperatures throughout operating hours.",
    },
    {
      id: 12,
      itemNumber: 12,
      name: "Strong SS Tray",
      quantity: "2",
      category: "preparation",
      categoryLabel: "Preparation",
      description: "Heavy-gauge stainless steel holding and resting trays for freshly fried batches and ingredients.",
    },
    {
      id: 13,
      itemNumber: 13,
      name: "Dining Table",
      quantity: "1",
      category: "customer",
      categoryLabel: "Customer Area",
      description: "Durable outdoor-rated commercial customer dining table for stall patrons.",
    },
    {
      id: 14,
      itemNumber: 14,
      name: "Chair",
      quantity: "6",
      category: "customer",
      categoryLabel: "Customer Area",
      description: "Set of 6 sturdy commercial dining chairs matching the stall setup.",
    },
    {
      id: 15,
      itemNumber: 15,
      name: "Large Size Dustbin",
      quantity: "1",
      category: "customer",
      categoryLabel: "Customer Area",
      description: "Commercial heavy-duty waste receptacle ensuring clean and sanitary surroundings.",
    },
    {
      id: 16,
      itemNumber: 16,
      name: "Premium Waterproof Menu Card",
      quantity: "3",
      category: "branding",
      categoryLabel: "Branding & Startup",
      description: "Tear-proof, spill-proof laminated premium brand menu cards for customer counters.",
    },
    {
      id: 17,
      itemNumber: 17,
      name: "Startup Fried Chicken Masala",
      quantity: "3 kg",
      category: "branding",
      categoryLabel: "Branding & Startup",
      description: "Official KPM proprietary starter marinade & coating masala blend for initial commercial sales batches.",
    },
    {
      id: 18,
      itemNumber: 18,
      name: "Complete Kitchen Setup",
      quantity: "1 Complete Set",
      category: "branding",
      categoryLabel: "Branding & Startup",
      description: "Complete set of commercial kitchen utensils, tongs, skimmers, strainers, spatulas, and operational tools.",
    },
  ] as PackageInclusionItem[],

  // Visual Category Groupings (as specified in guidelines)
  categories: [
    { id: "all", label: "All 18 Items", count: 18 },
    { id: "cart", label: "The Cart", count: 2 },
    { id: "cooking", label: "Cooking Equipment", count: 4 },
    { id: "preparation", label: "Preparation", count: 4 },
    { id: "cooling", label: "Storage & Cooling", count: 2 },
    { id: "customer", label: "Customer Area", count: 3 },
    { id: "branding", label: "Branding & Startup", count: 3 },
  ],

  // 8x4 Cart Specifications
  cartSpecs: [
    { label: "Footprint", value: "8 Feet × 4 Feet (Compact & Roadside Optimized)" },
    { label: "Format", value: "Heavy-Duty Mobile Stall / Food Cart" },
    { label: "Body Architecture", value: "Industrial Powder-Coated Mild Steel & Stainless Steel" },
    { label: "Theme Palette", value: "Vibrant Yellow, Deep Black, Fire Red & Warm Gold" },
    { label: "Lighting", value: "Integrated LED Canopy Strip + Logo Board + Lollipop Sign" },
    { label: "Mobility", value: "Heavy-duty pneumatic wheels for controlled repositioning" },
    { label: "Counters", value: "Commercial food-grade SS 304 service and frying counters" },
    { label: "Power & Gas", value: "Dual gas cylinder storage provision & electrical distribution box" },
  ],

  // 5-Step Process
  steps: [
    {
      step: "01",
      title: "Franchise Enquiry",
      description: "Submit your interest via the enquiry form or direct WhatsApp with your desired city and phone.",
    },
    {
      step: "02",
      title: "Discuss Your Location",
      description: "Connect with the KPM team to review your high-footfall spot, roadside access, and customer density.",
    },
    {
      step: "03",
      title: "Package & Setup Discussion",
      description: "Review package pricing, the 18 official equipment inclusions, and formalize your partnership agreement.",
    },
    {
      step: "04",
      title: "Prepare Your KPM Cart",
      description: "Your custom 8 × 4 premium cart and complete equipment package are fabricated, tested, and dispatched.",
    },
    {
      step: "05",
      title: "Launch Your KPM",
      description: "Receive on-site 1st day manpower support, proprietary starter masala, and start serving fiery fried chicken!",
    },
  ],

  // Menu structure (as editable placeholders as requested)
  menuCategories: [
    "Fried Chicken",
    "Burgers",
    "Sandwiches",
    "Momos",
    "Sides",
    "Combos",
    "Beverages",
  ] as const,

  sampleMenuItems: [
    {
      id: "m-1",
      name: "KPM Signature Fried Drumstick Platter",
      category: "Fried Chicken",
      description: "Deep fried chicken marinated in KPM's secret fiery masala blend, coated in double crisp breading.",
      priceNote: "Franchise Menu Item",
      isPopular: true,
      isSignature: true,
    },
    {
      id: "m-2",
      name: "KPM Hot & Crispy Wings (6 Pcs)",
      category: "Fried Chicken",
      description: "Golden crispy chicken wings seasoned with signature spice dust and served with garlic mayo dip.",
      priceNote: "Franchise Menu Item",
      isPopular: true,
    },
    {
      id: "m-3",
      name: "Fiery Chicken Zinger Burger",
      category: "Burgers",
      description: "Crispy fried whole chicken breast fillet, fresh iceberg lettuce, and spicy chipotle glaze on toasted sesame bun.",
      priceNote: "Franchise Menu Item",
      isSignature: true,
    },
    {
      id: "m-4",
      name: "Crispy Fried Chicken Club Sandwich",
      category: "Sandwiches",
      description: "Grilled in the commercial sandwich toaster with shredded fried chicken, herbs, and melted cheese.",
      priceNote: "Franchise Menu Item",
      isPopular: true,
    },
    {
      id: "m-5",
      name: "Steamed & Fried Chicken Momos",
      category: "Momos",
      description: "Juicy chicken dumplings prepared fresh in the dedicated momos steamer, served with fiery red chutney.",
      priceNote: "Franchise Menu Item",
      isPopular: true,
    },
    {
      id: "m-6",
      name: "Peri Peri French Fries (SS Fryer Crisped)",
      category: "Sides",
      description: "Batch-fried in the 8L auxiliary fryer, dusted with zesty peri-peri masala shake.",
      priceNote: "Franchise Menu Item",
    },
    {
      id: "m-7",
      name: "KPM Supreme Cart Combo Box",
      category: "Combos",
      description: "2 pcs Crispy Chicken, 3 pcs Wings, Small Fries, and chilled beverage dip combo.",
      priceNote: "Franchise Menu Item",
      isPopular: true,
      isSignature: true,
    },
    {
      id: "m-8",
      name: "Chilled Mojito & Coolers",
      category: "Beverages",
      description: "Refreshing mint-lime and berry coolers, stored chilled with insulated cooling boxes.",
      priceNote: "Franchise Menu Item",
    },
  ] as MenuItem[],

  // Reviews placeholder (clearly marked placeholder as required)
  reviews: [
    {
      id: "rev-1",
      author: "Verified Customer Review (Sample)",
      role: "Customer Feedback · Salem Main Road Stall",
      comment: "Add verified customer review here once gathered from the Komarapalayam outlet.",
      isPlaceholder: true,
    },
    {
      id: "rev-2",
      author: "Franchise Partner Story (Sample)",
      role: "Prospective Franchisee Experience",
      comment: "Add verified franchise partner feedback and launch journey experience here.",
      isPlaceholder: true,
    },
  ],

  // Gallery items
  galleryItems: [
    {
      id: "gal-1",
      title: "8 × 4 Premium Cart Stall Format",
      category: "Cart",
      image: kpmCartShowcaseImg,
      subtitle: "Official yellow & black mobile food cart with LED lighting and signage.",
    },
    {
      id: "gal-2",
      title: "Signature Crispy Fried Chicken Platter",
      category: "Food",
      image: kpmHeroChickenImg,
      subtitle: "Golden crispy fried chicken coated with KPM's proprietary secret masala.",
    },
    {
      id: "gal-3",
      title: "Complete Kitchen & Equipment Setup",
      category: "Equipment",
      image: kpmEquipmentImg,
      subtitle: "16L & 8L fryers, breading vessel, momos steamer, toaster, and cold boxes.",
    },
    {
      id: "gal-4",
      title: "Evening Roadside Street Stall Ambiance",
      category: "Stall",
      image: kpmNightCartImg,
      subtitle: "Vibrant high-footfall street presence with illuminated brand canopy.",
    },
  ],
};
