export interface Region {
  id: string;
  fantasyName: string;
  realOrigin: string;
  position: { x: number; y: number };
  brew: string;
  brewPath: string;
  elevation: string;
  climate: string;
  harvestSeason: string;
  tasteProfile: string;
  lore: string;
  color: string;
  hoverColor: string;
  path: string;
}

export interface MapState {
  hoveredRegion: string | null;
  selectedRegion: string | null;
  zoom: number;
  translateX: number;
  translateY: number;
}

export const regions: Region[] = [
  {
    id: "kefa_highlands",
    fantasyName: "The Ancient Highlands of Kefa",
    realOrigin: "Ethiopia",
    position: { x: 620, y: 320 },
    brew: "Dragon's Breath",
    brewPath: "/codex#dragons-breath",
    elevation: "2,200m above the realm's floor",
    climate: "Mist-covered highlands, volcanic soil",
    harvestSeason: "The Season of Long Rains (Oct–Dec)",
    tasteProfile: "Dark chocolate, smoky earth, wild berry",
    lore: `Long before maps were drawn, the monks of Kefa discovered that the cherries growing wild on their misty slopes carried a fire within them. They called it 'the gift of the mountain gods' — a warmth that sustained them through the coldest highland nights. Arcadia's Dragon's Breath is the direct descendant of that ancient discovery. Nothing has been added. Nothing needed to be.`,
    color: "#8b2500",
    hoverColor: "#c43500",
    path: "M582,268 C588,250 604,240 626,240 C646,240 660,252 668,270 C676,288 676,310 668,330 C660,348 646,362 626,368 C606,374 588,366 578,348 C568,330 568,308 576,290 C578,282 580,278 582,268 Z",
  },
  {
    id: "cloud_kingdoms",
    fantasyName: "The Cloud Kingdoms of the Andes",
    realOrigin: "Colombia",
    position: { x: 220, y: 300 },
    brew: "Golden Knight",
    brewPath: "/codex#golden-knight",
    elevation: "1,800m — where clouds rest at midday",
    climate: "Temperate, rich rainfall, mineral-dense soil",
    harvestSeason: "The Twin Harvests (Mar–Jun, Sep–Dec)",
    tasteProfile: "Honey, toasted almond, caramel warmth",
    lore: `The Cloud Kingdoms are governed by an ancient pact between the sun and the rain — neither dominates, both serve. This balance is not coincidence; it is the character of the land itself. The beans grown here inherit that equilibrium. Golden Knight does not shout. It does not need to. It simply endures — cup after cup, season after season.`,
    color: "#7a6200",
    hoverColor: "#b08e00",
    path: "M186,264 C194,246 212,238 234,240 C256,242 272,256 278,276 C284,296 278,320 264,336 C250,352 228,358 208,350 C188,342 178,322 178,302 C178,284 180,278 186,264 Z",
  },
  {
    id: "ember_isles",
    fantasyName: "The Ember Isles of the Far East",
    realOrigin: "Indonesia (Java & Sumatra)",
    position: { x: 950, y: 400 },
    brew: "Mystic's Essence",
    brewPath: "/codex#mystics-essence",
    elevation: "1,500m — volcanic archipelago",
    climate: "Humid, volcanic ash soil, equatorial heat",
    harvestSeason: "The Dry Wind Season (Jul–Sep)",
    tasteProfile: "Cedar, dark earth, low acidity, full body",
    lore: `The Ember Isles were formed by fire and have never forgotten it. The soil here is the memory of eruptions — dense, mineral, unconventional. Beans grown in volcanic earth carry a depth that defies easy description. Mystic's Essence was named not for its maker, but for the island itself. Some flavors cannot be engineered. They must simply be discovered.`,
    color: "#1a4a2e",
    hoverColor: "#276640",
    path: "M902,366 C918,346 942,338 968,346 C994,354 1012,376 1014,402 C1016,428 1000,452 974,462 C948,472 920,462 906,438 C892,414 890,388 902,366 Z",
  },
  {
    id: "verdant_plateau",
    fantasyName: "The Verdant Plateau of the South",
    realOrigin: "Brazil",
    position: { x: 280, y: 450 },
    brew: "Elven Morning Mist",
    brewPath: "/codex#elven-morning",
    elevation: "900–1,100m — vast rolling highlands",
    climate: "Dry winters, warm summers, cerrado savanna",
    harvestSeason: "The Great Harvest (May–Sep)",
    tasteProfile: "Milk chocolate, nutty, mild sweetness",
    lore: `No realm produces more than the Verdant Plateau, and yet it has never once been arrogant about it. There is a generosity to this land — a willingness to give that manifests in every mild, approachable cup it yields. The elves chose this origin for their morning ritual because it asks nothing difficult of you before the day has properly begun.`,
    color: "#2d5a1b",
    hoverColor: "#3d7a25",
    path: "M226,403 C240,382 266,372 298,376 C330,380 356,400 364,428 C372,456 360,486 336,500 C312,514 280,514 254,500 C228,486 214,460 214,436 C214,414 216,420 226,403 Z",
  },
  {
    id: "silver_coast",
    fantasyName: "The Silver Coast of the West",
    realOrigin: "Guatemala",
    position: { x: 160, y: 280 },
    brew: "Void Essence",
    brewPath: "/codex#void-essence",
    elevation: "1,500–1,800m — near ancient volcanic lakes",
    climate: "Rainy season alternates with dry highland winds",
    harvestSeason: "The Twilight Harvest (Jan–Apr)",
    tasteProfile: "Brown sugar, apple, subtle smoke",
    lore: `The Silver Coast sits where two ancient weather systems collide — the warm breath of the ocean and the cold descent of the mountain winds. That conflict produces something extraordinary: a bean with more personality per gram than almost any other in the known realms. Void Essence was built around it. The darkness in the cup is not emptiness — it is complexity, compressed.`,
    color: "#3a3a6e",
    hoverColor: "#4e4e9a",
    path: "M130,255 C138,239 156,232 176,236 C196,240 208,258 208,278 C208,298 194,316 176,322 C158,328 138,318 130,302 C122,286 124,268 130,255 Z",
  },
  {
    id: "jade_mountains",
    fantasyName: "The Jade Mountains of the Orient",
    realOrigin: "Yemen & Ethiopia (Heirloom varieties)",
    position: { x: 700, y: 260 },
    brew: "Elf's Morning",
    brewPath: "/codex#elfs-morning",
    elevation: "2,500m — among the highest in the realm",
    climate: "Arid, ancient terraced farms, minimal rainfall",
    harvestSeason: "The Ancient Harvest (Nov–Feb)",
    tasteProfile: "Floral, blueberry, wine-like, ethereal",
    lore: `Coffee itself was born somewhere in these mountains. The oldest varieties still grow here, largely unchanged for a thousand years, tended by families who have never written down their methods because no writing could contain them. Elf's Morning is Arcadia's most delicate expression — and the one we are most careful not to disturb. Some things are best left close to what they always were.`,
    color: "#1e5e4a",
    hoverColor: "#2a8066",
    path: "M664,218 C678,202 700,196 724,202 C748,208 766,228 768,254 C770,280 754,304 728,314 C702,324 676,312 662,294 C648,276 648,250 664,218 Z",
  },
  {
    id: "crimson_steppes",
    fantasyName: "The Crimson Steppes of the North",
    realOrigin: "Kenya",
    position: { x: 660, y: 390 },
    brew: "Cloud Walker",
    brewPath: "/codex#cloud-walker",
    elevation: "1,700–2,200m — equatorial highlands",
    climate: "Dual rainy seasons, deep red volcanic soil",
    harvestSeason: "The Red Earth Season (Oct–Dec, Jun–Aug)",
    tasteProfile: "Blackcurrant, tomato, bright citrus acidity",
    lore: `The red soil of the Crimson Steppes is unlike anything else in the realm — iron-rich, ancient, almost aggressively fertile. Beans grown here are not subtle. They announce themselves. Cloud Walker earns its name not from lightness, but from the way it seems to lift you — a brightness so pronounced it feels like elevation. The steppes demand attention. This cup delivers it.`,
    color: "#7a1a1a",
    hoverColor: "#a82424",
    path: "M622,352 C634,332 658,324 684,332 C710,340 726,364 724,390 C722,416 704,436 678,444 C652,452 626,438 616,414 C606,390 610,368 622,352 Z",
  },
];
