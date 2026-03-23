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
    path: "M598,258 C602,244 626,238 638,244 C652,250 662,248 668,260 C676,270 688,282 686,296 C686,312 684,322 680,334 C676,348 670,358 664,366 C654,376 644,382 634,380 C622,380 612,376 604,372 C592,366 576,358 574,348 C570,336 558,326 560,316 C562,306 572,288 572,278 C574,266 590,260 598,258 Z",
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
    path: "M208,246 C214,232 222,232 230,236 C240,238 250,240 252,244 C260,248 268,258 268,270 C268,284 274,294 274,304 C274,320 270,330 264,338 C256,348 248,356 240,358 C228,362 220,358 214,350 C204,344 192,338 192,326 C190,314 184,306 186,296 C188,284 190,274 194,268 C198,260 206,250 208,246 Z",
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
    path: "M930,344 C936,328 950,326 960,332 C972,338 986,340 992,346 C1002,354 1016,362 1016,374 C1018,388 1020,398 1018,406 C1016,422 1010,432 1004,438 C994,448 984,458 974,460 C960,462 950,462 942,456 C928,450 918,442 914,434 C908,422 902,412 904,400 C904,386 906,374 910,366 C916,354 924,346 930,344 Z",
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
    path: "M252,376 C256,362 274,356 286,360 C302,364 312,366 318,372 C330,380 344,390 346,400 C348,412 354,424 354,436 C354,450 350,462 342,472 C330,484 322,496 312,500 C298,506 288,512 278,510 C264,508 254,506 246,498 C234,488 218,480 216,470 C212,456 208,446 210,434 C212,420 218,408 222,400 C228,388 246,378 252,376 Z",
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
    path: "M146,238 C152,224 162,222 168,228 C178,234 188,234 190,238 C198,244 206,254 204,262 C204,274 208,284 208,292 C208,306 202,314 196,318 C186,326 178,332 170,328 C156,326 148,320 146,318 C132,314 122,308 124,298 C122,286 120,276 122,268 C124,256 134,244 146,238 Z",
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
    path: "M676,200 C682,186 700,184 708,190 C720,196 732,196 736,202 C748,210 758,218 758,228 C762,240 766,252 764,262 C762,278 756,288 750,296 C740,308 732,316 722,318 C708,322 700,324 692,322 C676,320 662,316 660,308 C652,296 642,288 644,278 C644,264 644,252 648,244 C656,226 670,204 676,200 Z",
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
    path: "M640,334 C648,320 658,316 666,322 C678,328 688,328 694,334 C706,342 720,350 720,360 C722,374 724,384 722,392 C720,408 714,418 710,424 C700,438 692,448 682,448 C668,450 658,450 652,448 C636,446 626,436 624,428 C616,418 608,408 610,396 C610,382 610,368 616,360 C622,346 634,336 640,334 Z",
  },
];
