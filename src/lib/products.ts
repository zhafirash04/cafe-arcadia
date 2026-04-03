// Centralized product data for Café Arcadia
// Used by Codex catalog and individual product pages

export interface Product {
  id: string;
  name: string;
  origin: string;
  description: string;
  price: number;
  priceDisplay: string;
  strength: number;
  level: "Light" | "Medium" | "Dark" | "Dragon-Fire";
  category: "roast" | "elixir" | "cold-brew" | "seasonal";
  badge?: string;
  image: string;
  lore?: string;
  brewingTip?: string;
  tasteNotes?: string[];
}

export const products: Product[] = [
  // ═══════════ LEGENDARY ROASTS ═══════════
  {
    id: "dragons-breath",
    name: "Dragon's Breath",
    origin: "Northern Volcanic Peaks",
    description: "Smoky, intense, with notes of dark chocolate and ash. A brew for the bold who dare to wield fire.",
    price: 18,
    priceDisplay: "18 GP",
    strength: 4,
    level: "Dark",
    category: "roast",
    badge: "Seal of Potency",
    image: "/images/dark-roast.png",
    lore: "Legend speaks of a dragon that once guarded the volcanic peaks where these beans are grown. The farmers say the soil is still warm from the beast's ancient fire, and that warmth seeps into every bean harvested under the smoky skies.",
    brewingTip: "Best enjoyed as a pour-over or espresso. Let it cool slightly to unlock the subtle chocolate undertones beneath the smoky exterior.",
    tasteNotes: ["Dark Chocolate", "Smoky Ash", "Molasses", "Black Pepper"],
  },
  {
    id: "golden-knight",
    name: "Golden Knight",
    origin: "Eastern Honey Meadows",
    description: "A balanced medium roast with hints of honey and toasted almond. Smooth as enchanted silk armor.",
    price: 22,
    priceDisplay: "22 GP",
    strength: 2,
    level: "Medium",
    category: "roast",
    badge: "Guild Favorite",
    image: "/images/latte-art.png",
    lore: "The Golden Knight was the personal blend of Sir Aldric the Gilded, a legendary protector of the realm. He claimed a cup each morning gave him the clarity to lead his soldiers through any battle. The recipe has been guarded by Arcadia ever since.",
    brewingTip: "Perfect for lattes and cappuccinos. The honey notes pair beautifully with steamed milk, creating a silky, comforting cup.",
    tasteNotes: ["Honey", "Toasted Almond", "Caramel", "Vanilla"],
  },
  {
    id: "elfs-morning",
    name: "Elf's Morning",
    origin: "Ancient Forest Canopy",
    description: "Bright, floral, and impossibly light. A delicate bloom of citrus and chamomile whispers.",
    price: 20,
    priceDisplay: "20 GP",
    strength: 1,
    level: "Light",
    category: "roast",
    badge: "Rare Find",
    image: "/images/espresso-shot.png",
    lore: "High in the forest canopy, where sunlight filters through emerald leaves, the elves tend to the most delicate coffee plants in existence. They harvest only at dawn, when the morning dew still clings to each cherry, preserving its ethereal lightness.",
    brewingTip: "Use a gentle pour-over method with water just off the boil. This roast reveals its floral complexity when given time to breathe.",
    tasteNotes: ["Citrus Blossom", "Chamomile", "White Tea", "Bergamot"],
  },

  // ═══════════ ELIXIRS OF VITALITY ═══════════
  {
    id: "mystic-green",
    name: "Mystic Green",
    origin: "Fairie Meadow Dark Forest",
    description: "Ceremonial matcha infused with mint herbs, cleansing the soul in a single sip.",
    price: 15,
    priceDisplay: "15 GP",
    strength: 2,
    level: "Light",
    category: "elixir",
    image: "/images/espresso-shot.png",
    lore: "The fairies of the Dark Forest have long used this blend in their cleansing rituals. The mint is said to clear the mind of dark thoughts, while the matcha grounds the spirit to the present moment.",
    brewingTip: "Whisk vigorously with a bamboo chasen until frothy. Serve in a wide bowl to appreciate the vibrant green color.",
    tasteNotes: ["Fresh Mint", "Grassy Matcha", "Sweet Dew", "Vegetal"],
  },
  {
    id: "healers-chamomile",
    name: "Healer's Chamomile",
    origin: "Moonlit Monastery Cliffs",
    description: "White chamomile blossom dried under the moonlight, calming all restless wanderers.",
    price: 14,
    priceDisplay: "14 GP",
    strength: 1,
    level: "Light",
    category: "elixir",
    image: "/images/espresso-shot.png",
    lore: "The monks of the Moonlit Monastery harvest chamomile only during the full moon, believing the lunar light imbues each blossom with restorative properties. Many a weary traveler has found peace in this gentle brew.",
    brewingTip: "Steep in water below boiling for 5-7 minutes. Best enjoyed before rest, when the day's burdens need lifting.",
    tasteNotes: ["White Flowers", "Apple", "Honey", "Lavender"],
  },
  {
    id: "royal-grey",
    name: "Royal Grey",
    origin: "Violet Citrus Silk Mountains",
    description: "High peak leaves with floral tones picked by elder monks in perfect stillness.",
    price: 16,
    priceDisplay: "16 GP",
    strength: 3,
    level: "Medium",
    category: "elixir",
    image: "/images/espresso-shot.png",
    lore: "Only the most patient monks are entrusted with harvesting the leaves for Royal Grey. They climb to the highest peaks in silence, picking each leaf with meditative precision. The bergamot oil is pressed by hand, one fruit at a time.",
    brewingTip: "Steep for 3-4 minutes in freshly boiled water. Add a splash of milk for a traditional experience, or enjoy pure to taste the citrus complexity.",
    tasteNotes: ["Bergamot", "Violet", "Black Tea", "Citrus Oil"],
  },

  // ═══════════ COLD BREWS ═══════════
  {
    id: "void-essence",
    name: "Void Essence",
    origin: "Prime Midnight Dark Pool",
    description: "Steeped for 48 hours in absolute darkness. A recipe only alchemists dare brew.",
    price: 25,
    priceDisplay: "25 GP",
    strength: 5,
    level: "Dragon-Fire",
    category: "cold-brew",
    badge: "Master Alchemist",
    image: "/images/dark-roast.png",
    lore: "The Void Essence is brewed in underground chambers where no light has touched for centuries. The alchemists who tend to it work by touch alone, believing that even candlelight would disturb the brew's meditative darkness.",
    brewingTip: "Serve over a single large ice sphere. The slow melt will gradually soften the intensity, revealing deeper flavors as you drink.",
    tasteNotes: ["Midnight Cocoa", "Black Cherry", "Charred Oak", "Obsidian"],
  },
  {
    id: "cloud-walker",
    name: "Cloud Walker",
    origin: "Eastern Spring Hills",
    description: "Infused with nitrogen gas creating a cascading, creamy texture layered in still water.",
    price: 20,
    priceDisplay: "20 GP",
    strength: 3,
    level: "Medium",
    category: "cold-brew",
    image: "/images/latte-art.png",
    lore: "The Cloud Walker was discovered by accident when a brewmaster left cold brew near an alchemist's nitrogen experiment. The result was a creamy cascade that seemed to defy gravity, earning its celestial name.",
    brewingTip: "Best consumed fresh from the tap. Watch the cascade settle before your first sip — the visual experience is part of the magic.",
    tasteNotes: ["Cream", "Cocoa Butter", "Toasted Marshmallow", "Silk"],
  },
  {
    id: "travelers-flask",
    name: "Traveler's Flask",
    origin: "Amber Energy Bar Glass",
    description: "Has served cold brew travelers for ages. Known for its subtle honey notes and clarity.",
    price: 22,
    priceDisplay: "22 GP",
    strength: 4,
    level: "Dark",
    category: "cold-brew",
    image: "/images/espresso-shot.png",
    lore: "Every adventurer knows the Traveler's Flask — a cold brew concentrate designed to sustain long journeys. One flask mixed with spring water provides enough clarity and energy to cross any terrain.",
    brewingTip: "Dilute 1:2 with cold water or milk. Carry it on your journey and mix when you need a burst of clarity.",
    tasteNotes: ["Wild Honey", "Amber", "Brown Sugar", "Trail Spice"],
  },

  // ═══════════ SEASONAL ═══════════
  {
    id: "winters-solstice",
    name: "Winter's Solstice",
    origin: "Frozen Northern Territories",
    description: "Spiced black cold chocolate, clove and orange zest.",
    price: 24,
    priceDisplay: "24 GP",
    strength: 3,
    level: "Dark",
    category: "seasonal",
    badge: "Limited Edition",
    image: "/images/dark-roast.png",
    lore: "Created to celebrate the longest night, Winter's Solstice is a warming embrace against the cold. The spices are sourced from the furthest reaches of the realm, combined only during the winter months.",
    brewingTip: "Warm gently and serve in a pre-heated mug. The spices bloom beautifully when slightly heated.",
    tasteNotes: ["Clove", "Orange Zest", "Dark Chocolate", "Cinnamon"],
  },
  {
    id: "fae-blossom",
    name: "Fae Blossom",
    origin: "Enchanted Spring Gardens",
    description: "Light mint infused with cherry blossom details.",
    price: 22,
    priceDisplay: "22 GP",
    strength: 1,
    level: "Light",
    category: "seasonal",
    badge: "Spring Limited",
    image: "/images/latte-art.png",
    lore: "When the cherry blossoms bloom in the Enchanted Gardens, the fairies celebrate with this delicate infusion. Each petal is hand-picked at the peak of bloom, preserving its fleeting beauty in liquid form.",
    brewingTip: "Serve chilled with a single cherry blossom floating on top. Best enjoyed outdoors during springtime.",
    tasteNotes: ["Cherry Blossom", "Fresh Mint", "Rose Water", "Light Honey"],
  },
  {
    id: "desert-mirage",
    name: "Desert Mirage",
    origin: "Sandstone Oasis Territories",
    description: "Mediterranean honey and saffron lemon and stone fruit notes.",
    price: 25,
    priceDisplay: "25 GP",
    strength: 2,
    level: "Medium",
    category: "seasonal",
    badge: "Summer Limited",
    image: "/images/espresso-shot.png",
    lore: "The Desert Mirage appears when you least expect it — a shimmering oasis of flavor in an otherwise harsh world. Saffron from distant dunes meets citrus from coastal groves in this improbable union.",
    brewingTip: "Serve over ice with a twist of lemon peel. The saffron unfolds slowly, revealing new dimensions with each sip.",
    tasteNotes: ["Saffron", "Lemon", "Apricot", "Wild Honey"],
  },
  {
    id: "harvest-moon",
    name: "Harvest Moon",
    origin: "Western Autumn Valleys",
    description: "Pumpkin spice decaf with a dash of maple and cardamom.",
    price: 23,
    priceDisplay: "23 GP",
    strength: 2,
    level: "Medium",
    category: "seasonal",
    badge: "Autumn Limited",
    image: "/images/latte-art.png",
    lore: "Brewed only during the harvest season, when the moon hangs low and orange over the valleys. The pumpkin is roasted over applewood fires, then combined with spices gathered from the last warm days of autumn.",
    brewingTip: "Perfect as an evening drink. The decaf nature and warming spices make it ideal for cozy autumn nights.",
    tasteNotes: ["Pumpkin", "Maple", "Cardamom", "Warm Spice"],
  },
];

// Helper functions
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsByLevel(level: Product["level"]): Product[] {
  return products.filter((p) => p.level === level);
}

export function getAllProductIds(): string[] {
  return products.map((p) => p.id);
}
