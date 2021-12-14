import {
  FoundationFood,
  Nutrient,
  NutrientRdi,
  RDI,
  UsdaToRdiUnitMapping,
} from "./types"

const mappings: UsdaToRdiUnitMapping[] = require("../data/usda_rdi_nutrient_mapping.json")
export const mappingsByNutrient: Map<string, UsdaToRdiUnitMapping> =
  mappings.reduce((acc, mapping) => {
    acc.set(mapping.usdaNutrientName, mapping)
    return acc
  }, new Map<string, UsdaToRdiUnitMapping>())

export const getNutrientRdiPercent = (
  nutrient: Nutrient,
  rdi: RDI
): number | undefined => {
  // rdi value of < 0 means that there is no data provided by NIH
  if (!mappingsByNutrient.has(nutrient.name) || rdi.amount < 0) return undefined

  const multiplier = mappingsByNutrient.get(
    nutrient.name
  ).usdaToRdiUnitMultiplier
  const rdiPercent = ((nutrient.amount * multiplier) / rdi.amount) * 100

  console.log(
    nutrient.name,
    rdi.nutrient,
    rdi.applicableFor,
    rdi.ageStart,
    nutrient.amount,
    multiplier,
    rdi.amount,
    rdiPercent
  )

  return rdiPercent
}

/*
 Given a food, return the NutrientDailyValues
 Not all Nutrients will have daily values as per data provided by NIH,
 so we need to keep that into account here
 */
export const generateRdiForFood = (
  food: FoundationFood,
  rdis: RDI[]
): NutrientRdi[] => {
  return food.nutrients
    .map(nutrient => {
      const mappedRdi = mappingsByNutrient.get(nutrient.name)

      if (!mappedRdi) return { nutrient }

      const nutrientRdisForGenderAge = rdis.filter(
        rdi => rdi.nutrient === mappedRdi.rdiNutrientName
      )
      return nutrientRdisForGenderAge.map(rdi => {
        const percentDaily = getNutrientRdiPercent(nutrient, rdi)
        return { nutrient, rdi, percentDaily }
      })
    })
    .flat()
}
