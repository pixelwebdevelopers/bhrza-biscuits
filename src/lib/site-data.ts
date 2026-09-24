export interface ProductItem {
  id: string;
  name: string;
  series: string;
  flavor: string;
  tag: string;
  category: "fruity" | "classic" | "choco-nut";
  categoryLabel: string;
  shortDescription: string;
  description: string;
  packSizes: {
    standard: {
      label: string;
      weight: string;
      image: string;
      code: string;
    };
    big: {
      label: string;
      weight: string;
      image: string;
      code: string;
    };
  };
  features: string[];
  ingredients: string;
  pairingNotes: string;
  theme: {
    bgLight: string;
    bgGradient: string;
    accentColor: string;
    textColor: string;
    badgeBg: string;
    badgeText: string;
    glowColor: string;
  };
}

export const bhrzaProducts: ProductItem[] = [
  {
    id: "vanilla",
    name: "Wafo Crunch Vanilla",
    series: "Wafo CRUNCH",
    flavor: "Vanilla",
    tag: "Classic & Creamy",
    category: "classic",
    categoryLabel: "Classic & Cream",
    shortDescription: "Golden crisp wafer sheets layered with fragrant, velvety smooth vanilla cream.",
    description:
      "A timeless crowd-pleaser crafted with light, multi-layered golden wafer biscuits enveloping a rich and silky vanilla cream filling. Crisp on the outside, delightfully melt-in-the-mouth within.",
    packSizes: {
      standard: {
        label: "Standard Pack",
        weight: "Single Snack Pack",
        image: "/products/w1.webp",
        code: "W-01",
      },
      big: {
        label: "Big Family Pack",
        weight: "Value Sharing Pack",
        image: "/products/ww5.webp",
        code: "WW-05",
      },
    },
    features: [
      "Crispy Multi-Layer Wafers",
      "Silky Smooth Vanilla Filling",
      "Extra Crunchy & Creamy",
      "100% Halal Certified",
    ],
    ingredients: "Wheat Flour, Sugar, Vegetable Fat/Oil, Milk Solids, Vanilla Extract & Natural Identical Flavoring, Leavening Agents, Salt.",
    pairingNotes: "Perfect pairing with hot Pakistani cardamom chai, coffee, or as a sweet treat for kids' lunchboxes.",
    theme: {
      bgLight: "#FAF6EC",
      bgGradient: "from-amber-50/90 via-amber-100/40 to-slate-100/80",
      accentColor: "#D97706",
      textColor: "#1E2952",
      badgeBg: "bg-amber-100 text-amber-900 border-amber-300",
      badgeText: "text-amber-900",
      glowColor: "rgba(217, 119, 6, 0.15)",
    },
  },
  {
    id: "chocolate",
    name: "Wafo Crunch Chocolate",
    series: "Wafo CRUNCH",
    flavor: "Chocolate",
    tag: "Decadent Cocoa",
    category: "choco-nut",
    categoryLabel: "Choco & Nutty",
    shortDescription: "Decadent, rich chocolate cream nestled between oven-baked crispy wafer sheets.",
    description:
      "A paradise for chocolate lovers. Golden roasted crispy wafer wafers sandwich a generous helping of deep, velvety cocoa chocolate cream that melts irresistibly on your tongue.",
    packSizes: {
      standard: {
        label: "Standard Pack",
        weight: "Single Snack Pack",
        image: "/products/w8.webp",
        code: "W-08",
      },
      big: {
        label: "Big Family Pack",
        weight: "Value Sharing Pack",
        image: "/products/ww6.webp",
        code: "WW-06",
      },
    },
    features: [
      "Rich Dark Cocoa Blend",
      "Ultra-Crispy Wafer Sheets",
      "Intense Chocolate Aroma",
      "PSQCA Quality Certified",
    ],
    ingredients: "Wheat Flour, Sugar, Cocoa Solids, Hydrogenated Vegetable Oil, Milk Solids, Soya Lecithin, Permitted Flavours, Salt.",
    pairingNotes: "Pairs magnificently with a tall glass of cold milk, cappuccino, or as an indulgent midnight crunch.",
    theme: {
      bgLight: "#F8F4F0",
      bgGradient: "from-stone-100 via-amber-100/30 to-stone-200/50",
      accentColor: "#78350F",
      textColor: "#451A03",
      badgeBg: "bg-amber-900/10 text-amber-950 border-amber-900/20",
      badgeText: "text-amber-950",
      glowColor: "rgba(120, 53, 15, 0.15)",
    },
  },
  {
    id: "strawberry",
    name: "Wafo Crunch Strawberry",
    series: "Wafo CRUNCH",
    flavor: "Strawberry",
    tag: "Fruity Sensation",
    category: "fruity",
    categoryLabel: "Fruity Wafers",
    shortDescription: "Sweet, refreshing strawberry cream layered inside airy, golden crispy wafers.",
    description:
      "Bursting with the vibrant taste of ripe garden strawberries, this wafer snack delivers a playful balance of fruity sweetness and crunchy, oven-fresh wafer texture that children and families adore.",
    packSizes: {
      standard: {
        label: "Standard Pack",
        weight: "Single Snack Pack",
        image: "/products/w3.webp",
        code: "W-03",
      },
      big: {
        label: "Big Family Pack",
        weight: "Value Sharing Pack",
        image: "/products/ww2.webp",
        code: "WW-02",
      },
    },
    features: [
      "Natural Strawberry Flavor Notes",
      "Delicate Golden Wafer Lattice",
      "Smooth Pink Cream Center",
      "100% Halal Verified",
    ],
    ingredients: "Wheat Flour, Sugar, Vegetable Shortening, Milk Solids, Strawberry Flavor Extract, Permitted Food Colors (E127/E129), Salt.",
    pairingNotes: "Excellent snack for children's tea parties, family picnics, and fruity afternoon dessert toppings.",
    theme: {
      bgLight: "#FFF1F2",
      bgGradient: "from-rose-50/90 via-pink-100/40 to-rose-100/70",
      accentColor: "#E11D48",
      textColor: "#881337",
      badgeBg: "bg-rose-100 text-rose-900 border-rose-300",
      badgeText: "text-rose-900",
      glowColor: "rgba(225, 29, 72, 0.15)",
    },
  },
  {
    id: "hazelnut",
    name: "Wafo Crunch Hazelnut",
    series: "Wafo CRUNCH",
    flavor: "Hazelnut",
    tag: "Nutty & Gourmet",
    category: "choco-nut",
    categoryLabel: "Choco & Nutty",
    shortDescription: "Roasted hazelnut cream infused through layers of light, crunchy wafer perfection.",
    description:
      "An upscale, nutty treat featuring the distinctive aroma of toasted hazelnuts combined with delicate wafer crispness and luscious cocoa-hazelnut cream.",
    packSizes: {
      standard: {
        label: "Standard Pack",
        weight: "Single Snack Pack",
        image: "/products/w7.webp",
        code: "W-07",
      },
      big: {
        label: "Big Family Pack",
        weight: "Value Sharing Pack",
        image: "/products/ww8.webp",
        code: "WW-08",
      },
    },
    features: [
      "Roasted Hazelnut Aroma",
      "Gourmet Nutty Cream Filling",
      "Crisp Delicate Crunch",
      "Pure Wholesome Ingredients",
    ],
    ingredients: "Wheat Flour, Sugar, Vegetable Fats, Roasted Hazelnut Paste & Flavours, Cocoa Powder, Milk Solids, Emulsifiers, Salt.",
    pairingNotes: "Wonderful with evening green tea, espresso, or shared during festive family gatherings.",
    theme: {
      bgLight: "#FAF6E9",
      bgGradient: "from-amber-50 via-yellow-100/30 to-amber-100/60",
      accentColor: "#B45309",
      textColor: "#78350F",
      badgeBg: "bg-amber-100 text-amber-900 border-amber-400",
      badgeText: "text-amber-900",
      glowColor: "rgba(180, 83, 9, 0.16)",
    },
  },
  {
    id: "orange",
    name: "Wafo Crunch Orange",
    series: "Wafo CRUNCH",
    flavor: "Orange",
    tag: "Zesty Citrus",
    category: "fruity",
    categoryLabel: "Fruity Wafers",
    shortDescription: "Sun-ripened orange citrus cream enveloped in light and crispy wafer layers.",
    description:
      "Bright, zesty, and energizing! The uplifting aroma of fresh citrus orange meets rich velvety cream and crispy golden wafers for a refreshing snack any time of the day.",
    packSizes: {
      standard: {
        label: "Standard Pack",
        weight: "Single Snack Pack",
        image: "/products/w4.webp",
        code: "W-04",
      },
      big: {
        label: "Big Family Pack",
        weight: "Value Sharing Pack",
        image: "/products/ww1.webp",
        code: "WW-01",
      },
    },
    features: [
      "Tangy Citrus Sweetness",
      "Double Layered Orange Cream",
      "Crunchy Wafer Structure",
      "Oven-Baked Freshness",
    ],
    ingredients: "Wheat Flour, Sugar, Vegetable Shortening, Orange Fruit Flavours & Essence, Milk Solids, Citric Acid, Beta-Carotene Color, Salt.",
    pairingNotes: "A zesty companion to afternoon chai breaks and an invigorating pick-me-up on sunny days.",
    theme: {
      bgLight: "#FFF7ED",
      bgGradient: "from-orange-50 via-amber-100/40 to-orange-100/70",
      accentColor: "#EA580C",
      textColor: "#9A3412",
      badgeBg: "bg-orange-100 text-orange-900 border-orange-300",
      badgeText: "text-orange-900",
      glowColor: "rgba(234, 88, 12, 0.16)",
    },
  },
  {
    id: "banana",
    name: "Wafo Crunch Banana",
    series: "Wafo CRUNCH",
    flavor: "Banana",
    tag: "Sweet & Mellow",
    category: "fruity",
    categoryLabel: "Fruity Wafers",
    shortDescription: "Naturally sweet, creamy banana filling nestled in crunchy, airy wafer sheets.",
    description:
      "A beloved favorite among children and adults alike. Infused with smooth, comforting banana cream that complements the crisp snap of fresh wafer layers in every single bite.",
    packSizes: {
      standard: {
        label: "Standard Pack",
        weight: "Single Snack Pack",
        image: "/products/w5.webp",
        code: "W-05",
      },
      big: {
        label: "Big Family Pack",
        weight: "Value Sharing Pack",
        image: "/products/ww3.webp",
        code: "WW-03",
      },
    },
    features: [
      "Comforting Banana Cream",
      "Golden Crisp Multi-Layers",
      "Kid-Friendly Snack Choice",
      "Halal & Standards Approved",
    ],
    ingredients: "Wheat Flour, Sugar, Refined Vegetable Oils, Milk Powder, Natural Identical Banana Flavors, Turmeric Extract Color, Salt.",
    pairingNotes: "Loved by school children and families, perfect alongside fresh milk or fruit smoothies.",
    theme: {
      bgLight: "#F0FDF4",
      bgGradient: "from-emerald-50 via-yellow-50/50 to-green-100/60",
      accentColor: "#16A34A",
      textColor: "#14532D",
      badgeBg: "bg-emerald-100 text-emerald-900 border-emerald-300",
      badgeText: "text-emerald-900",
      glowColor: "rgba(22, 163, 74, 0.15)",
    },
  },
  {
    id: "coconut",
    name: "Wafo Crunch Coconut",
    series: "Wafo CRUNCH",
    flavor: "Coconut",
    tag: "Tropical Delight",
    category: "classic",
    categoryLabel: "Classic & Cream",
    shortDescription: "Exotic, fragrant coconut cream layered between airy and crunchy golden wafers.",
    description:
      "Transport your tastebuds with the tropical essence of fragrant coconut cream. Light, refreshing, and crafted with delicate wafer sheets for an authentic taste of island sunshine.",
    packSizes: {
      standard: {
        label: "Standard Pack",
        weight: "Single Snack Pack",
        image: "/products/w6.webp",
        code: "W-06",
      },
      big: {
        label: "Big Family Pack",
        weight: "Value Sharing Pack",
        image: "/products/ww7.webp",
        code: "WW-07",
      },
    },
    features: [
      "Fragrant Coconut Cream",
      "Light Airy Wafer Texture",
      "Clean Balanced Sweetness",
      "PSQCA Quality Certified",
    ],
    ingredients: "Wheat Flour, Sugar, Vegetable Fats, Desiccated Coconut Extract & Flavours, Milk Solids, Emulsifiers, Salt.",
    pairingNotes: "Pairs wonderfully with traditional Pakistani doodh patti chai or iced milk drinks.",
    theme: {
      bgLight: "#F0F9FF",
      bgGradient: "from-sky-50 via-cyan-100/40 to-blue-100/60",
      accentColor: "#0284C7",
      textColor: "#0C4A6E",
      badgeBg: "bg-sky-100 text-sky-900 border-sky-300",
      badgeText: "text-sky-900",
      glowColor: "rgba(2, 132, 199, 0.16)",
    },
  },
  {
    id: "tutti-frutti",
    name: "Wafo Crunch Tutti Frutti",
    series: "Wafo CRUNCH",
    flavor: "Tutti Frutti",
    tag: "Fruity Blast",
    category: "fruity",
    categoryLabel: "Fruity Wafers",
    shortDescription: "An exciting symphony of mixed fruit flavours and velvety pink cream in crisp wafers.",
    description:
      "A joyful, multi-fruit celebration in every crunchy bite. Packed with colorful tutti-frutti notes and smooth cream, it delivers a fun, festive snacking experience for every gathering.",
    packSizes: {
      standard: {
        label: "Standard Pack",
        weight: "Single Snack Pack",
        image: "/products/w2.webp",
        code: "W-02",
      },
      big: {
        label: "Big Family Pack",
        weight: "Value Sharing Pack",
        image: "/products/ww4.webp",
        code: "WW-04",
      },
    },
    features: [
      "Multi-Fruit Symphony",
      "Fun & Festive Snacking",
      "Irresistible Crunchy Layers",
      "100% Halal Verified",
    ],
    ingredients: "Wheat Flour, Sugar, Vegetable Oil, Milk Solids, Mixed Fruit Flavours, Natural & Nature Identical Essences, Permitted Colors, Salt.",
    pairingNotes: "Great for celebration platters, birthday treat bags, and everyday tea-time fun.",
    theme: {
      bgLight: "#FDF2F8",
      bgGradient: "from-pink-50 via-fuchsia-100/40 to-pink-100/70",
      accentColor: "#DB2777",
      textColor: "#831843",
      badgeBg: "bg-pink-100 text-pink-900 border-pink-300",
      badgeText: "text-pink-900",
      glowColor: "rgba(219, 39, 119, 0.16)",
    },
  },
];

// Backward-compatible alias for existing imports
export const demoProducts = bhrzaProducts;

export const qualityItems = [
  {
    code: "حلال",
    title: "100% Halal Certified",
    text: "All BHRZA products are prepared strictly under Halal compliance with certified food-grade ingredients.",
  },
  {
    code: "PS",
    title: "PSQCA Standards",
    text: "Manufactured in compliance with Pakistan Standards and Quality Control Authority guidelines.",
  },
  {
    code: "♻",
    title: "Recyclable Packaging",
    text: "Packaged using food-safe, recyclable moisture-barrier materials to maintain oven freshness.",
  },
  {
    code: "☀",
    title: "Care & Storage",
    text: "Protect from Heat & Sunlight · دھوپ اور گرمی سے بچائیں to preserve optimal crispness and flavor.",
  },
] as const;

