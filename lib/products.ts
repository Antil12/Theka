import { Product } from "../types";

export const products: Product[] = [
  // 4 Whiskeys
  {
    id: "theka-single-malt-15",
    name: "THEKA Single Malt 15 Year",
    type: "whiskey",
    image:
      "https://images.unsplash.com/photo-1746422029200-51af8d27a0da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2luZ2xlJTIwTWFsdCUyMDEyJTIwWWVhcnxlbnwwfHwwfHx8MA%3D%3D",
    shortDescription:
      "Aged in Oloroso sherry casks. Deep, complex, unforgettable.",
    description:
      "Our signature 15-year expression represents the true spirit of THEKA. Rested exclusively in hand-selected Oloroso sherry casks, this whiskey develops a profound depth of character that balances the rugged nature of our spirit with elegant refinement.",
    price: 4800,
    alcoholPercentage: 43,
    tastingNotes: {
      nose: "Dried fruits, vanilla, toasted oak with a whisper of smoke",
      palate: "Rich sherry sweetness, dark chocolate, warming spice",
      finish: "Long, lingering warmth with hints of leather and clove",
    },
    rating: 4.9,
    featured: true,
    year: 2011,
    badge: "SIGNATURE",
  },
  {
    id: "theka-reserve-18",
    name: "THEKA Reserve 18 Year",
    type: "whiskey",
    image:
      "https://images.unsplash.com/photo-1618513033174-cfe319656ea6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpc2tleSUyMFJlc2VydmUlMjAxOCUyMFllYXJ8ZW58MHx8MHx8fDA%3D",
    shortDescription:
      "A rare expression of time and patience. Limited allocations.",
    description:
      "The 18 Year Reserve is the pinnacle of our whiskey portfolio. Only our finest casks are selected for this extended maturation, resulting in a spirit of unparalleled complexity and smoothness. A true connoisseur's choice.",
    price: 12500,
    alcoholPercentage: 46,
    tastingNotes: {
      nose: "Old leather, polished mahogany, baked apple and cinnamon",
      palate: "Intense dark chocolate, roasted espresso, fig compote",
      finish: "Exceptionally long, with fading wood smoke and dry oak",
    },
    rating: 5.0,
    featured: true,
    year: 2005,
    badge: "LIMITED EDITION",
  },
  {
    id: "theka-peat-master",
    name: "THEKA The Peat Master",
    type: "whiskey",
    image:
      "https://images.unsplash.com/photo-1595505467869-8cb257b13be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdoaXNrZXl8ZW58MHx8MHx8fDA%3D",
    shortDescription: "Bold, smoky, and uncompromisingly intense.",
    description:
      "For those who walk the bolder path. The Peat Master takes our traditional spirit and subjects it to heavy peating, creating a whiskey that commands attention. Not for the faint of heart, but deeply rewarding for the adventurous palate.",
    price: 5200,
    alcoholPercentage: 48,
    tastingNotes: {
      nose: "Campfire embers, iodine, sea spray and toasted vanilla",
      palate: "Explosive peat smoke, black pepper, salted caramel",
      finish: "Dry, ashy, with returning waves of sweet barley",
    },
    rating: 4.7,
    featured: false,
    year: 2015,
  },
  {
    id: "theka-double-cask",
    name: "THEKA Double Cask Edition",
    type: "whiskey",
    image:
      "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdoaXNrZXl8ZW58MHx8MHx8fDA%3D",
    shortDescription: "A harmonious marriage of American and European oak.",
    description:
      "By aging the same spirit in two distinct cask types, we've created a whiskey of perfect balance. The American oak brings sweet vanilla and bright citrus, while the European oak provides depth, spice, and dried fruit notes.",
    price: 4200,
    alcoholPercentage: 40,
    tastingNotes: {
      nose: "Vanilla pod, fresh green apple, honeycomb",
      palate: "Toffee, sweet spices, ripe orchard fruits",
      finish: "Medium length, sweet and softly warming",
    },
    rating: 4.6,
    featured: false,
    year: 2018,
  },

  // 2 Vodkas
  {
    id: "theka-pure-vodka",
    name: "THEKA Pure Crystal Vodka",
    type: "vodka",
    image:
      "https://images.unsplash.com/photo-1539606494565-02e568638d91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dm9ka2F8ZW58MHx8MHx8fDA%3D",
    shortDescription:
      "Triple-distilled, charcoal-filtered for absolute clarity.",
    description:
      "Clarity in its truest form. Our pure vodka is distilled through a proprietary copper still process and passing through activated charcoal. The result is a profoundly smooth spirit that stands elegantly alone or elevates any cocktail.",
    price: 2800,
    alcoholPercentage: 40,
    tastingNotes: {
      nose: "Clean, mineral, faint hint of sweet grain",
      palate: "Exceptionally velvety, vanilla cream, white pepper",
      finish: "Crisp, clean, with a lingering delicate warmth",
    },
    rating: 4.8,
    featured: true,
    year: 2016,
  },
  {
    id: "theka-citrus-vodka",
    name: "THEKA Citrus Infusion",
    type: "vodka",
    image:
      "https://images.unsplash.com/photo-1550985543-f47f38aeee65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dm9ka2F8ZW58MHx8MHx8fDA%3D",
    shortDescription: "Vibrant and zesty, infused with hand-peeled botanicals.",
    description:
      "We take our award-winning Pure Crystal Vodka and rest it with fresh, hand-peeled Amalfi lemons and bitter orange. No artificial extracts, just the pure, bright essence of exceptional citrus capturing the Mediterranean sun.",
    price: 3200,
    alcoholPercentage: 38,
    tastingNotes: {
      nose: "Bright lemon zest, orange blossom, subtle coriander",
      palate: "Fresh citrus oil, slight sweetness, crisp acidity",
      finish: "Refreshing, zesty with a hint of white pepper",
    },
    rating: 4.5,
    featured: false,
    year: 2019,
  },

  // 2 Wines
  {
    id: "theka-grand-reserve-red",
    name: "THEKA Grand Reserve Cabernet",
    type: "wine",
    image:
      "https://images.unsplash.com/photo-1610631787813-9eeb1a2386cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2luZSUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
    shortDescription: "A bold, structured red with excellent aging potential.",
    description:
      "Sourced from high-altitude vineyards where the grapes struggle, developing thick skins and intense concentration. Aged 24 months in French oak, this is a wine of architecture and grace, built for the defining moments of life.",
    price: 5500,
    alcoholPercentage: 14.5,
    tastingNotes: {
      nose: "Blackcurrant, cedar box, violets and crushed graphite",
      palate: "Dense black fruit, polished tannins, baking spices",
      finish: "Endless, commanding, yet exquisitely balanced",
    },
    rating: 4.9,
    featured: true,
    year: 2015,
    badge: "98 POINTS",
  },
  {
    id: "theka-estate-blanc",
    name: "THEKA Estate Sauvignon Blanc",
    type: "wine",
    image:
      "https://images.unsplash.com/photo-1592845148519-b0d41df97ac2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbmUlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
    shortDescription: "Crisp, elegant, and vividly expressive.",
    description:
      "Harvested under the light of the moon to preserve vital acidity, our Sauvignon Blanc is a study in precision. Fermented in stainless steel to capture the purity of the fruit, it offers a laser-focused expression of the terroir.",
    price: 3400,
    alcoholPercentage: 13.0,
    tastingNotes: {
      nose: "Passionfruit, lime leaf, wet stone and white flowers",
      palate: "Electric acidity, citrus core, subtle tropical notes",
      finish: "Mouth-watering, saline, intensely refreshing",
    },
    rating: 4.6,
    featured: false,
    year: 2022,
  },

  // 2 Rums
  {
    id: "theka-dark-rum",
    name: "THEKA Black Pearl Reserve",
    type: "rum",
    image:
      "https://images.unsplash.com/photo-1613140506142-277c6241b858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVtJTIwYm90dGxlfGVufDB8fDB8fHww",
    shortDescription: "Rich, molasses-forward dark rum aged 8 years.",
    description:
      "True to traditional methods, the Black Pearl Reserve is born from pure molasses and aged in heavily charred oak barrels in a tropical climate. This accelerated aging creates a deeply complex rum that is magnificent neat or over a single large cube.",
    price: 3800,
    alcoholPercentage: 40,
    tastingNotes: {
      nose: "Dark treacle, roasted coffee, burnt sugar, banana bread",
      palate: "Thick and viscous, sticky toffee, dark chocolate, clove",
      finish: "Warm, sweet, with lasting notes of oak and vanilla",
    },
    rating: 4.8,
    featured: false,
    year: 2014,
  },
  {
    id: "theka-spiced-rum",
    name: "THEKA Merchant Spiced",
    type: "rum",
    image:
      "https://images.unsplash.com/photo-1746422029276-171b6e764f99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJ1bSUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
    shortDescription: "Infused with exotic spices from the old trade routes.",
    description:
      "We've sourced the finest botanicals from historic spice routes: Madagascar vanilla, Ceylon cinnamon, and Indonesian nutmeg. These are macerated in our gold rum to create a spirit that is unforgettably aromatic and vibrant.",
    price: 3000,
    alcoholPercentage: 37.5,
    tastingNotes: {
      nose: "Cinnamon stick, vanilla bean, orange peel, allspice",
      palate: "Sweet spice, baked apple, ginger, caramel",
      finish: "Spicy and warming, fading to sweet vanilla",
    },
    rating: 4.4,
    featured: false,
    year: 2020,
  },

  // 2 Gins
  {
    id: "theka-london-dry",
    name: "THEKA Botanical London Dry",
    type: "gin",
    image:
      "https://images.unsplash.com/photo-1571488207231-42641b018e0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2luJTIwYm90dGxlfGVufDB8fDB8fHww",
    shortDescription: "A classic reborn. Juniper-forward with 12 botanicals.",
    description:
      "Our homage to the great gins of London. We use precisely 12 botanicals, steeped for 24 hours before distillation. Juniper leads, but it's supported by a complex choir of citrus, spice, and earthy roots.",
    price: 3500,
    alcoholPercentage: 42,
    tastingNotes: {
      nose: "Piney juniper, coriander seed, angelica, lemon zest",
      palate: "Crisp and dry, robust juniper, subtle black pepper",
      finish: "Clean, bracing, with a lingering citrus brightness",
    },
    rating: 4.7,
    featured: false,
    year: 2017,
  },
  {
    id: "theka-pink-gin",
    name: "THEKA Rose & Hibiscus",
    type: "gin",
    image:
      "https://images.unsplash.com/photo-1542895324-076f3fb6c2cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpbiUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
    shortDescription:
      "A delicate, floral expression infused with rare botanicals.",
    description:
      "Post-distillation, this gin is naturally infused with hibiscus petals and Damask rose, lending it a striking natural blush and a hauntingly beautiful floral character. Perfect for a transcendent summer spritz.",
    price: 3800,
    alcoholPercentage: 40,
    tastingNotes: {
      nose: "Fresh rose petals, subtle red berry, soft juniper",
      palate: "Floral sweetness, Turkish delight, pink grapefruit",
      finish: "Elegant, soft, fading to delicate floral notes",
    },
    rating: 4.6,
    featured: false,
    year: 2021,
    badge: "NEW",
  },
];
