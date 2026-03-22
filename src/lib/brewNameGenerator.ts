export type BaseId = "espresso" | "cold_brew" | "potion_water";
export type EssenceId =
  | "dragon_breath"
  | "elven_vanilla"
  | "liquid_amber"
  | "shadow_mint"
  | "cursed_caramel";
export type VesselId = "chalice" | "wooden_mug" | "travel_flask";

export const BASE_PRICES: Record<BaseId, number> = {
  espresso: 10,
  cold_brew: 9,
  potion_water: 7,
};

export const VESSEL_PRICES: Record<VesselId, number> = {
  chalice: 4,
  wooden_mug: 2,
  travel_flask: 3,
};

const adjectives: Record<BaseId, string[]> = {
  espresso: ["Cursed", "Infernal", "Shadowed", "Ashen"],
  cold_brew: ["Frozen", "Ancient", "Spectral", "Glacial"],
  potion_water: ["Mystic", "Arcane", "Ethereal", "Veiled"],
};

const essenceWords: Record<EssenceId, string> = {
  dragon_breath: "Flame",
  elven_vanilla: "Bloom",
  liquid_amber: "Gilded",
  shadow_mint: "Veil",
  cursed_caramel: "Hex",
};

const vesselSuffix: Record<VesselId, string> = {
  chalice: "of the Chalice",
  wooden_mug: "of the Oaken Mug",
  travel_flask: "of the Wanderer",
};

/**
 * Generates a fantasy brew name using random selection.
 * Formula: The [adj from base] [essence words or "Elixir"] [vessel suffix]
 */
export function generateBrewName(
  baseId: BaseId,
  essenceIds: EssenceId[],
  vesselId: VesselId
): string {
  const adjectiveList = adjectives[baseId];
  const randomAdj =
    adjectiveList[Math.floor(Math.random() * adjectiveList.length)];

  const essencePart =
    essenceIds.length > 0
      ? essenceIds.map((id) => essenceWords[id]).join(" ")
      : "Elixir";

  const suffix = vesselSuffix[vesselId];

  return `The ${randomAdj} ${essencePart} ${suffix}`;
}
