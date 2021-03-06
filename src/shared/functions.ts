import {
  FoundationOrSrFood,
  Nutrient,
  NutrientRdi,
  RDI,
  UsdaToRdiUnitMapping,
} from "./types";
import fs from "fs";

const ARTIFACT_PATH = ".raw";
const mappings: UsdaToRdiUnitMapping[] = require("../data/usda_rdi_nutrient_mapping.json");
export const mappingsByNutrient: Map<string, UsdaToRdiUnitMapping> =
  mappings.reduce((acc, mapping) => {
    acc.set(mapping.usdaNutrientName, mapping);
    return acc;
  }, new Map<string, UsdaToRdiUnitMapping>());

export const getNutrientRdiPercent = (
  nutrient: Nutrient,
  rdi: RDI
): number | undefined => {
  // rdi value of < 0 means that there is no data provided by NIH
  if (!mappingsByNutrient.has(nutrient.name) || rdi.amount < 0)
    return undefined;

  const multiplier = mappingsByNutrient.get(
    nutrient.name
  ).usdaToRdiUnitMultiplier;
  return ((nutrient.amount * multiplier) / rdi.amount) * 100;

  /*console.log(
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
   */
};

/*
 Given a food, return the NutrientDailyValues
 Not all Nutrients will have daily values as per data provided by NIH,
 so we need to keep that into account here
 */
export const generateRdiForFood = (
  food: FoundationOrSrFood,
  rdis: RDI[]
): NutrientRdi[] => {
  return food.nutrients
    .map(nutrient => {
      const mappedRdi = mappingsByNutrient.get(nutrient.name);

      if (!mappedRdi) return { nutrient };

      const nutrientRdisForGenderAge = rdis.filter(
        rdi => rdi.nutrient === mappedRdi.rdiNutrientName
      );
      return nutrientRdisForGenderAge.map(rdi => {
        const percentDaily = getNutrientRdiPercent(nutrient, rdi);
        return { nutrient, rdi, percentDaily };
      });
    })
    .flat();
};

export const writeJsonToFile = (fileName, jsonData) => {
  if (!fs.existsSync(ARTIFACT_PATH)) fs.mkdirSync(ARTIFACT_PATH);
  fs.writeFile(
    `${ARTIFACT_PATH}/${fileName}`,
    JSON.stringify(jsonData),
    err => {
      if (err) throw err;
      console.log(`Done writing to file ${fileName}`);
    }
  );
};

export const generateSEOTitle = (foodName: string) => {
  const name = foodName.replace(/\s*\([^)]*\)\s*/g, "");
  return `Nutrition facts - ${name}`;
};

export const generateSEOMetaDescription = (
  foodName: string,
  category: string
) => {
  return `Nutrient facts from USDA and NIH with the option to filter by nutrients, age and gender for 100gm of  ${foodName} in ${category} category.`;
};
