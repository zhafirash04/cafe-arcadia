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
    path: "M590,270 L600,255 L625,250 L650,260 L665,280 L660,310 L650,340 L635,360 L615,365 L595,355 L580,335 L578,310 Z",
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
    path: "M195,260 L215,248 L240,250 L255,265 L260,285 L255,310 L245,330 L225,340 L205,335 L190,318 L185,295 L188,275 Z",
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
    path: "M910,370 L940,358 L970,360 L995,375 L1005,398 L1000,425 L985,445 L960,450 L935,440 L915,420 L905,398 Z",
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
    path: "M235,405 L270,390 L315,392 L345,408 L355,435 L350,465 L335,488 L305,498 L270,495 L245,480 L228,458 L225,432 Z",
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
    path: "M138,255 L158,244 L178,248 L188,262 L190,280 L185,298 L172,308 L155,310 L140,300 L130,282 L130,265 Z",
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
    path: "M670,220 L695,210 L722,215 L740,232 L745,258 L738,280 L720,295 L698,298 L678,288 L664,268 L662,245 Z",
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
    path: "M630,355 L655,342 L680,345 L698,360 L702,385 L695,410 L678,425 L655,428 L634,418 L620,400 L618,375 Z",
  },
];
