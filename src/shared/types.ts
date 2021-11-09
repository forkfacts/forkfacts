export interface FoundationFood {
  fdcId: number
  name: string
  category: string
  // todo: can we make units typed? How many different units we may have?
  nutrients: [{ name: string; amount: number; unit: string }]
}

export interface RDI {
  applicableFor:
    | "infants"
    | "children"
    | "males"
    | "females"
    | "pregnancy"
    | "lactation"
  ageStart: number
  ageEnd?: number
  ageUnit: "month" | "year"
  importTable: "Elements" | "Vitamins"
  nutrient: string
  amount: number
  // todo: can we make units typed? How many different units we may have?
  nutrientUnit: string
}
