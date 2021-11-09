import { Nutrient, RDI, UsdaToRdiUnitMapping } from "./types"

const mappings: UsdaToRdiUnitMapping[] = require("../data/usda_rdi_nutrient_mapping.json")
export const mappingsByNutrient: Map<string, UsdaToRdiUnitMapping> =
  mappings.reduce((acc, mapping) => {
    acc.set(mapping.usdaNutrientName, mapping)
    return acc
  }, new Map<string, UsdaToRdiUnitMapping>())

export const getDailyPercentValue = (
  nutrient: Nutrient,
  rdi: RDI
): number | undefined => {
  // rdi value of < 0 means that there is no data provided by NIH
  if (!mappingsByNutrient.has(nutrient.name) || rdi.amount < 0) return undefined

  const multiplier = mappingsByNutrient.get(
    nutrient.name
  ).usdaToRdiUnitMultiplier

  /*console.log(
    nutrient.name,
    rdi.nutrient,
    nutrient.amount,
    multiplier,
    rdi.amount,
    ((nutrient.amount * multiplier) / rdi.amount) * 100
  )*/

  return ((nutrient.amount * multiplier) / rdi.amount) * 100
}