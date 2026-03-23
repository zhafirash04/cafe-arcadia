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
  hoveredId: string | null;
  selectedId: string | null;
  scale: number;
  translateX: number;
  translateY: number;
}

export interface ChroniclePanelState {
  isOpen: boolean;
  region: Region | null;
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
    lore: "Long before maps were drawn, the monks of Kefa discovered that the cherries growing wild on their misty slopes carried a fire within them. They called it 'the gift of the mountain gods' — a warmth that sustained them through the coldest highland nights. Arcadia's Dragon's Breath is the direct descendant of that ancient discovery. Nothing has been added. Nothing needed to be.",
    color: "#8b2500",
    hoverColor: "#c43500",
    path: "M590,280 C598,268 612,262 628,265 C644,268 658,275 665,288 C672,301 670,316 662,328 C654,340 640,346 624,344 C608,342 594,334 588,321 C582,308 582,292 590,280 Z",
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
    lore: "The Cloud Kingdoms are governed by an ancient pact between the sun and the rain — neither dominates, both serve. This balance is not coincidence; it is the character of the land itself. The beans grown here inherit that equilibrium. Golden Knight does not shout. It does not need to. It simply endures — cup after cup, season after season.",
    color: "#7a6200",
    hoverColor: "#b08e00",
    path: "M190,270 C202,256 218,250 236,252 C254,254 268,264 274,278 C280,292 276,308 266,318 C256,328 240,332 224,328 C208,324 196,312 190,298 C184,284 178,284 190,270 Z",
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
    lore: "The Ember Isles were formed by fire and have never forgotten it. The soil here is the memory of eruptions — dense, mineral, unconventional. Beans grown in volcanic earth carry a depth that defies easy description. Mystic's Essence was named not for its maker, but for the island itself. Some flavors cannot be engineered. They must simply be discovered.",
    color: "#1a4a2e",
    hoverColor: "#276640",
    path: "M910,370 C926,356 948,352 966,358 C984,364 996,378 998,394 C1000,410 992,426 978,434 C964,442 944,440 928,430 C912,420 900,404 900,388 C900,374 896,384 910,370 Z M940,440 C950,434 964,434 972,442 C980,450 978,462 968,468 C958,474 944,470 938,460 C932,450 930,446 940,440 Z",
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
    lore: "No realm produces more than the Verdant Plateau, and yet it has never once been arrogant about it. There is a generosity to this land — a willingness to give that manifests in every mild, approachable cup it yields. The elves chose this origin for their morning ritual because it asks nothing difficult of you before the day has properly begun.",
    color: "#2d5a1b",
    hoverColor: "#3d7a25",
    path: "M210,410 C228,394 252,386 280,388 C308,390 334,402 348,420 C362,438 362,460 348,476 C334,492 308,498 280,494 C252,490 228,476 214,458 C200,440 192,426 210,410 Z",
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
    lore: "The Silver Coast sits where two ancient weather systems collide — the warm breath of the ocean and the cold descent of the mountain winds. That conflict produces something extraordinary: a bean with more personality per gram than almost any other in the known realms. Void Essence was built around it. The darkness in the cup is not emptiness — it is complexity, compressed.",
    color: "#3a3a6e",
    hoverColor: "#4e4e9a",
    path: "M134,258 C144,248 158,244 172,246 C186,248 196,256 200,266 C204,276 200,288 192,296 C184,304 172,306 160,302 C148,298 138,288 134,276 C130,264 124,268 134,258 Z",
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
    lore: "Coffee itself was born somewhere in these mountains. The oldest varieties still grow here, largely unchanged for a thousand years, tended by families who have never written down their methods because no writing could contain them. Elf's Morning is Arcadia's most delicate expression — and the one we are most careful not to disturb. Some things are best left close to what they always were.",
    color: "#1e5e4a",
    hoverColor: "#2a8066",
    path: "M672,232 C682,220 698,214 714,218 C730,222 742,234 744,248 C746,262 738,274 724,280 C710,286 694,282 682,272 C670,262 662,250 672,232 Z",
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
    lore: "The red soil of the Crimson Steppes is unlike anything else in the realm — iron-rich, ancient, almost aggressively fertile. Beans grown here are not subtle. They announce themselves. Cloud Walker earns its name not from lightness, but from the way it seems to lift you — a brightness so pronounced it feels like elevation. The steppes demand attention. This cup delivers it.",
    color: "#7a1a1a",
    hoverColor: "#a82424",
    path: "M630,362 C642,350 658,344 674,348 C690,352 700,364 700,378 C700,392 690,404 674,408 C658,412 642,406 632,394 C622,382 618,374 630,362 Z",
  },
];
