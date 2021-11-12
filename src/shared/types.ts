export interface FoundationFood {
  fdcId: number
  name: string
  category: string
  // todo: can we make units typed? How many different units we may have?
  nutrients: Nutrient[]
}

export interface Nutrient {
  name: string
  amount: number
  unit: string
}

export interface RDI {
  // todo: handle other gender later
  applicableFor: "males" | "females"
  //| "infants"
  //| "children"
  // | "males"
  // | "females"
  //| "pregnancy"
  //| "lactation"
  ageStart: number
  ageEnd?: number
  ageUnit: "month" | "year"
  importTable: "Elements" | "Vitamins"
  nutrient: string
  amount: number
  // todo: can we make units typed? How many different units we may have?
  nutrientUnit: string
}

export interface UsdaToRdiUnitMapping {
  // todo: can we make units typed? How many different units we may have?
  id: number
  usdaNutrientId: number
  usdaNutrientName: string
  usdaNutrientUnit: string
  rdiNutrientName: string
  rdiNutrientUnit: string
  rdiNutrientTable: string
  usdaToRdiUnitMultiplier: number
}

export type Gender = "Females" | "Males"
export interface Age {
  index: number // todo: revisit this field
  start: number
  end?: number
  ageUnit: "month" | "year"
}

export interface NutrientDailyValue {
  nutrient: Nutrient
  rdi?: RDI
  percentDaily?: number
}
