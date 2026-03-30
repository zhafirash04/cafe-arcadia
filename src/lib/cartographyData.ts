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
    // Realistic landmass shape - rugged highland peninsula with fjords and mountain ridges
    path: `M575,248 
      L582,242 L588,238 L595,240 L600,235 L608,232 L618,230 L628,228 L638,232 L645,228 
      L652,234 L658,230 L666,236 L672,240 L678,244 L684,250 L688,258 L692,268 
      L696,278 L694,288 L698,296 L696,306 L700,314 L696,324 L692,332 
      L686,340 L688,348 L682,356 L674,364 L668,372 L660,378 L652,382 L644,386 
      L636,384 L628,388 L620,386 L612,382 L606,378 L598,374 L590,368 
      L584,360 L578,352 L572,344 L568,334 L564,324 L560,314 L556,304 
      L558,294 L554,284 L558,274 L562,264 L568,256 L575,248 Z
      M598,265 L602,262 L606,268 L602,274 L598,270 Z
      M654,292 L660,288 L666,294 L662,300 L656,298 Z`,
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
    // Mountainous kingdom shape - vertical mountain range with valleys and peaks
    path: `M195,232 
      L205,226 L212,228 L218,222 L226,224 L234,220 L242,226 L248,222 L256,228 
      L262,236 L268,232 L272,240 L276,248 L280,256 L284,266 L286,276 
      L290,286 L288,296 L292,306 L290,316 L294,326 L290,336 L286,346 
      L280,354 L274,362 L268,368 L260,372 L252,376 L244,378 L236,374 
      L228,378 L220,374 L212,368 L206,360 L200,352 L194,344 L188,334 
      L184,324 L180,314 L178,304 L176,294 L174,284 L178,274 
      L176,264 L180,254 L186,244 L192,236 L195,232 Z
      M208,258 L214,254 L218,260 L214,266 L208,262 Z
      M248,298 L254,294 L258,300 L254,306 L248,302 Z`,
  },
  {
    id: "ember_isles",
    fantasyName: "The Ember Isles of the Far East",
    realOrigin: "Indonesia (Java & Sumatra)",
    position: { x: 970, y: 400 },
    brew: "Mystic's Essence",
    brewPath: "/codex#mystics-essence",
    elevation: "1,500m — volcanic archipelago",
    climate: "Humid, volcanic ash soil, equatorial heat",
    harvestSeason: "The Dry Wind Season (Jul–Sep)",
    tasteProfile: "Cedar, dark earth, low acidity, full body",
    lore: `The Ember Isles were formed by fire and have never forgotten it. The soil here is the memory of eruptions — dense, mineral, unconventional. Beans grown in volcanic earth carry a depth that defies easy description. Mystic's Essence was named not for its maker, but for the island itself. Some flavors cannot be engineered. They must simply be discovered.`,
    color: "#1a4a2e",
    hoverColor: "#276640",
    // Volcanic archipelago - multiple islands with volcanic craters and irregular coastlines
    path: `M920,350 
      L928,346 L936,342 L944,340 L952,338 L960,340 L968,336 L976,340 L984,338 
      L990,344 L996,350 L1000,358 L1004,366 L1006,376 L1008,386 
      L1010,396 L1006,406 L1008,416 L1004,424 L998,432 L992,438 
      L984,444 L976,448 L968,452 L960,454 L952,456 L944,454 L936,458 
      L928,454 L920,448 L914,442 L908,434 L904,424 L902,414 
      L900,404 L898,394 L900,384 L904,374 L908,364 L914,356 L920,350 Z
      M940,372 L946,368 L952,374 L948,380 L942,376 Z
      M974,398 L980,394 L986,400 L982,406 L976,402 Z
      M952,420 L958,416 L964,422 L960,428 L954,424 Z
      M1040,380 L1048,374 L1056,378 L1060,386 L1058,396 L1052,404 L1044,408 L1036,404 L1032,396 L1036,386 L1040,380 Z
      M1070,420 L1076,416 L1084,420 L1088,428 L1084,436 L1076,440 L1068,436 L1064,428 L1070,420 Z`,
  },
  {
    id: "verdant_plateau",
    fantasyName: "The Verdant Plateau of the South",
    realOrigin: "Brazil",
    position: { x: 300, y: 460 },
    brew: "Elven Morning Mist",
    brewPath: "/codex#elven-morning",
    elevation: "900–1,100m — vast rolling highlands",
    climate: "Dry winters, warm summers, cerrado savanna",
    harvestSeason: "The Great Harvest (May–Sep)",
    tasteProfile: "Milk chocolate, nutty, mild sweetness",
    lore: `No realm produces more than the Verdant Plateau, and yet it has never once been arrogant about it. There is a generosity to this land — a willingness to give that manifests in every mild, approachable cup it yields. The elves chose this origin for their morning ritual because it asks nothing difficult of you before the day has properly begun.`,
    color: "#2d5a1b",
    hoverColor: "#3d7a25",
    // Vast continental shape - large landmass with river deltas and coastal features
    path: `M238,390 
      L248,384 L258,380 L268,378 L280,374 L292,376 L304,372 L316,376 L328,374 
      L340,380 L352,378 L362,384 L372,390 L380,398 L386,408 L390,418 
      L392,430 L396,442 L392,454 L388,466 L384,476 L376,486 L368,494 
      L358,502 L348,508 L336,514 L324,518 L312,520 L300,518 L288,522 
      L276,518 L264,514 L252,508 L242,500 L232,492 L224,482 L218,472 
      L214,460 L212,448 L210,436 L214,424 L216,412 L222,402 L230,394 L238,390 Z
      M270,420 L278,414 L286,420 L282,428 L274,426 Z
      M324,448 L332,442 L340,448 L336,456 L328,454 Z
      M296,480 L304,474 L312,480 L308,488 L300,486 Z`,
  },
  {
    id: "silver_coast",
    fantasyName: "The Silver Coast of the West",
    realOrigin: "Guatemala",
    position: { x: 130, y: 260 },
    brew: "Void Essence",
    brewPath: "/codex#void-essence",
    elevation: "1,500–1,800m — near ancient volcanic lakes",
    climate: "Rainy season alternates with dry highland winds",
    harvestSeason: "The Twilight Harvest (Jan–Apr)",
    tasteProfile: "Brown sugar, apple, subtle smoke",
    lore: `The Silver Coast sits where two ancient weather systems collide — the warm breath of the ocean and the cold descent of the mountain winds. That conflict produces something extraordinary: a bean with more personality per gram than almost any other in the known realms. Void Essence was built around it. The darkness in the cup is not emptiness — it is complexity, compressed.`,
    color: "#3a3a6e",
    hoverColor: "#4e4e9a",
    // Coastal peninsula with volcanic lakes and bays - crescent moon shape with inlets
    path: `M108,228 
      L116,222 L124,218 L134,216 L144,214 L154,218 L162,214 L170,220 
      L178,226 L184,234 L188,244 L190,254 L188,264 L192,274 
      L188,284 L184,294 L180,302 L174,310 L168,316 L160,320 
      L152,326 L144,328 L136,326 L128,322 L120,318 L112,312 
      L106,304 L100,296 L96,286 L94,276 L96,266 L92,256 
      L96,246 L102,236 L108,228 Z
      M132,254 L138,248 L146,252 L144,260 L136,260 Z
      M152,284 L158,278 L166,282 L164,290 L156,290 Z`,
  },
  {
    id: "jade_mountains",
    fantasyName: "The Jade Mountains of the Orient",
    realOrigin: "Yemen & Ethiopia (Heirloom varieties)",
    position: { x: 750, y: 240 },
    brew: "Elf's Morning",
    brewPath: "/codex#elfs-morning",
    elevation: "2,500m — among the highest in the realm",
    climate: "Arid, ancient terraced farms, minimal rainfall",
    harvestSeason: "The Ancient Harvest (Nov–Feb)",
    tasteProfile: "Floral, blueberry, wine-like, ethereal",
    lore: `Coffee itself was born somewhere in these mountains. The oldest varieties still grow here, largely unchanged for a thousand years, tended by families who have never written down their methods because no writing could contain them. Elf's Morning is Arcadia's most delicate expression — and the one we are most careful not to disturb. Some things are best left close to what they always were.`,
    color: "#1e5e4a",
    hoverColor: "#2a8066",
    // Ancient terraced mountains - dragon spine shaped mountain range with terraces
    path: `M710,175 
      L720,170 L730,168 L740,170 L750,166 L762,170 L772,168 L782,174 
      L790,182 L798,188 L804,198 L808,208 L810,220 L806,232 
      L810,242 L806,254 L800,264 L794,272 L786,280 L778,286 
      L770,292 L760,296 L750,298 L740,296 L730,300 L720,296 
      L710,290 L702,282 L694,274 L688,264 L684,254 L682,242 
      L686,230 L682,218 L686,206 L692,196 L700,186 L710,175 Z
      M732,208 L740,202 L748,208 L744,216 L736,214 Z
      M764,238 L772,232 L780,238 L776,246 L768,244 Z
      M728,260 L736,254 L744,260 L740,268 L732,266 Z`,
  },
  {
    id: "crimson_steppes",
    fantasyName: "The Crimson Steppes of the North",
    realOrigin: "Kenya",
    position: { x: 660, y: 420 },
    brew: "Cloud Walker",
    brewPath: "/codex#cloud-walker",
    elevation: "1,700–2,200m — equatorial highlands",
    climate: "Dual rainy seasons, deep red volcanic soil",
    harvestSeason: "The Red Earth Season (Oct–Dec, Jun–Aug)",
    tasteProfile: "Blackcurrant, tomato, bright citrus acidity",
    lore: `The red soil of the Crimson Steppes is unlike anything else in the realm — iron-rich, ancient, almost aggressively fertile. Beans grown here are not subtle. They announce themselves. Cloud Walker earns its name not from lightness, but from the way it seems to lift you — a brightness so pronounced it feels like elevation. The steppes demand attention. This cup delivers it.`,
    color: "#7a1a1a",
    hoverColor: "#a82424",
    // Vast steppes with rift valleys - great rift shape with volcanic formations
    path: `M620,365 
      L630,358 L640,354 L652,350 L664,348 L676,352 L688,348 L698,354 
      L708,362 L716,372 L722,382 L726,394 L728,406 L724,418 
      L728,430 L724,442 L718,452 L710,462 L700,470 L690,476 
      L678,480 L666,482 L654,480 L642,484 L630,480 L620,474 
      L610,466 L602,456 L596,446 L592,434 L590,422 L594,410 
      L590,398 L594,386 L600,376 L610,368 L620,365 Z
      M648,392 L656,386 L664,392 L660,400 L652,398 Z
      M686,424 L694,418 L702,424 L698,432 L690,430 Z
      M658,446 L666,440 L674,446 L670,454 L662,452 Z`,
  },
];
