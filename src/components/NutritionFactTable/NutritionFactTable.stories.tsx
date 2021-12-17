import { NutritionFactTable } from "./index"
import { FoundationFood, NutrientRdi } from "../../shared/types"
import React from "react"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

export default {
  title: "Components/Nutrition Fact Table",
  component: NutritionFactTable,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
}

const food: FoundationFood = {
  fdcId: 323294,
  name: "Nuts, almonds, dry roasted, with salt added",
  category: "Nut and Seed Products",
  nutrients: [
    { name: "Carbohydrate, by difference", amount: 16.2, unit: "G" },
    { name: "Total fat (NLEA)", amount: 53.4, unit: "G" },
    { name: "Thiamin", amount: 0.079, unit: "MG" },
    { name: "Fatty acids, total polyunsaturated", amount: 14.5, unit: "G" },
    { name: "MUFA 22:1 c", amount: 0.001, unit: "G" },
    { name: "Vitamin B-6", amount: 0.075, unit: "MG" },
    { name: "Zinc, Zn", amount: 2.8, unit: "MG" },
    { name: "Choline, free", amount: 4.3, unit: "MG" },
    { name: "Fatty acids, total trans-dienoic", amount: 0.016, unit: "G" },
    { name: "PUFA 18:3 n-6 c,c,c", amount: 0.002, unit: "G" },
    { name: "Fatty acids, total trans", amount: 0.032, unit: "G" },
    { name: "SFA 4:0", amount: 0.001, unit: "G" },
    { name: "Fatty acids, total monounsaturated", amount: 34.2, unit: "G" },
    { name: "PUFA 18:3 c", amount: 0.052, unit: "G" },
    { name: "SFA 17:0", amount: 0.028, unit: "G" },
    { name: "SFA 16:0", amount: 3.54, unit: "G" },
    { name: "SFA 20:0", amount: 0.059, unit: "G" },
    { name: "Tocotrienol, alpha", amount: 0.28, unit: "MG" },
    { name: "Sodium, Na", amount: 256, unit: "MG" },
    { name: "Fatty acids, total saturated", amount: 4.56, unit: "G" },
    { name: "Folate, total", amount: 35, unit: "UG" },
    { name: "Pantothenic acid", amount: 0.237, unit: "MG" },
    { name: "Niacin", amount: 3.1, unit: "MG" },
    { name: "Manganese, Mn", amount: 2.02, unit: "MG" },
    { name: "Fatty acids, total trans-monoenoic", amount: 0.016, unit: "G" },
    { name: "Energy", amount: 620, unit: "KCAL" },
    { name: "TFA 18:1 t", amount: 0.016, unit: "G" },
    { name: "Sugars, Total NLEA", amount: 4.17, unit: "G" },
    { name: "Vitamin A, RAE", amount: 2, unit: "UG" },
    { name: "SFA 14:0", amount: 0.027, unit: "G" },
    { name: "Fiber, total dietary", amount: 11, unit: "G" },
    { name: "Vitamin E (alpha-tocopherol)", amount: 19, unit: "MG" },
    { name: "TFA 18:2 t not further defined", amount: 0.016, unit: "G" },
    { name: "PUFA 18:3 n-3 c,c,c (ALA)", amount: 0.05, unit: "G" },
    { name: "SFA 22:0", amount: 0.042, unit: "G" },
    { name: "Lutein + zeaxanthin", amount: 25, unit: "UG" },
    { name: "MUFA 20:1 c", amount: 0.076, unit: "G" },
    { name: "MUFA 17:1 c", amount: 0.061, unit: "G" },
    { name: "Water", amount: 2.2, unit: "G" },
    { name: "Copper, Cu", amount: 0.87, unit: "MG" },
    { name: "Sucrose", amount: 4.17, unit: "G" },
    { name: "Tocopherol, beta", amount: 0.18, unit: "MG" },
    { name: "Phosphorus, P", amount: 456, unit: "MG" },
    { name: "MUFA 18:1 c", amount: 33.8, unit: "G" },
    { name: "Ash", amount: 3.47, unit: "G" },
    { name: "Total lipid (fat)", amount: 57.8, unit: "G" },
    { name: "Magnesium, Mg", amount: 258, unit: "MG" },
    { name: "PUFA 20:4", amount: 0.005, unit: "G" },
    { name: "PUFA 2:4 c", amount: 0.005, unit: "G" },
    { name: "Tocopherol, gamma", amount: 0.92, unit: "MG" },
    { name: "Choline, from phosphocholine", amount: 56.1, unit: "MG" },
    { name: "MUFA 17:1", amount: 0.061, unit: "G" },
    { name: "Riboflavin", amount: 1.57, unit: "MG" },
    { name: "Potassium, K", amount: 684, unit: "MG" },
    { name: "PUFA 18:2 n-6 c,c", amount: 14.5, unit: "G" },
    { name: "PUFA 18:2 c", amount: 14.5, unit: "G" },
    { name: "SFA 24:0", amount: 0.024, unit: "G" },
    { name: "Choline, from glycerophosphocholine", amount: 0.4, unit: "MG" },
    { name: "MUFA 16:1 c", amount: 0.259, unit: "G" },
    { name: "Nitrogen", amount: 3.94, unit: "G" },
    { name: "PUFA 2:5 n-3 (EPA)", amount: 0.002, unit: "G" },
    { name: "Iron, Fe", amount: 3.17, unit: "MG" },
    { name: "Cryptoxanthin, beta", amount: 9, unit: "UG" },
    { name: "Protein", amount: 20.4, unit: "G" },
    { name: "MUFA 22:1 n-9", amount: 0.001, unit: "G" },
    { name: "MUFA 24:1 c", amount: 0.001, unit: "G" },
    { name: "Calcium, Ca", amount: 273, unit: "MG" },
    { name: "SFA 18:0", amount: 0.828, unit: "G" },
    { name: "Carotene, beta", amount: 17, unit: "UG" },
    { name: "Choline, total", amount: 60.8, unit: "MG" },
    { name: "SFA 15:0", amount: 0.008, unit: "G" },
    { name: "PUFA 18:2 CLAs", amount: 0.006, unit: "G" },
    { name: "PUFA 2:5 c", amount: 0.002, unit: "G" },
    { name: "Energy", amount: 2590, unit: "kJ" },
  ],
}

const nutrientDailyValues: NutrientRdi[] = [
  {
    nutrient: {
      name: "MUFA 22:1 c",
      amount: 83.9,
      unit: "G",
    },
    rdi: {
      applicableFor: "females",
      ageStart: 0,
      ageEnd: 6,
      ageUnit: "month",
      importTable: "Vitamins",
      nutrient: "MUFA 22:1 c",
      amount: 0.7,
      nutrientUnit: "L",
    },
    percentDaily: 11.985714285714288,
  },
  {
    nutrient: {
      name: "Total fat (NLEA)",
      amount: 83.9,
      unit: "G",
    },
    rdi: {
      applicableFor: "females",
      ageStart: 6,
      ageEnd: 12,
      ageUnit: "month",
      importTable: "Vitamins",
      nutrient: "Fat",
      amount: 0.8,
      nutrientUnit: "L",
    },
    percentDaily: 10.487499999999999,
  },
  {
    nutrient: {
      name: "Zinc, Zn",
      amount: 83.9,
      unit: "G",
    },
    rdi: {
      applicableFor: "males",
      ageStart: 1,
      ageEnd: 3,
      ageUnit: "year",
      importTable: "Vitamins",
      nutrient: "Zinc",
      amount: 1.3,
      nutrientUnit: "L",
    },
    percentDaily: 6.453846153846154,
  },
  {
    nutrient: {
      name: "Choline, free",
      amount: 83.9,
      unit: "G",
    },
    rdi: {
      applicableFor: "males",
      ageStart: 4,
      ageEnd: 8,
      ageUnit: "year",
      importTable: "Vitamins",
      nutrient: "Choline",
      amount: 1.7,
      nutrientUnit: "L",
    },
    percentDaily: 4.935294117647059,
  },
  {
    nutrient: {
      name: "Sodium, Na",
      amount: 83.9,
      unit: "G",
    },
    rdi: {
      applicableFor: "males",
      ageStart: 9,
      ageEnd: 13,
      ageUnit: "year",
      importTable: "Vitamins",
      nutrient: "Sodium",
      amount: 2.4,
      nutrientUnit: "L",
    },
    percentDaily: 3.4958333333333336,
  },
  {
    nutrient: {
      name: "Folate, total",
      amount: 83.9,
      unit: "G",
    },
    rdi: {
      applicableFor: "males",
      ageStart: 14,
      ageEnd: 18,
      ageUnit: "year",
      importTable: "Vitamins",
      nutrient: "Folate",
      amount: 3.3,
      nutrientUnit: "L",
    },
    percentDaily: 2.5424242424242425,
  },
  {
    nutrient: {
      name: "Manganese, Mn",
      amount: 83.9,
      unit: "G",
    },
    rdi: {
      applicableFor: "males",
      ageStart: 19,
      ageEnd: 30,
      ageUnit: "year",
      importTable: "Vitamins",
      nutrient: "Manganese",
      amount: 3.7,
      nutrientUnit: "L",
    },
    percentDaily: 2.2675675675675673,
  },
  {
    nutrient: {
      name: "Vitamin A, RAE",
      amount: 83.9,
      unit: "G",
    },
    rdi: {
      applicableFor: "males",
      ageStart: 31,
      ageEnd: 50,
      ageUnit: "year",
      importTable: "Vitamins",
      nutrient: "Vitamin A",
      amount: 3.7,
      nutrientUnit: "L",
    },
    percentDaily: 2.2675675675675673,
  },
  {
    nutrient: {
      name: "Copper, Cu",
      amount: 83.9,
      unit: "G",
    },
    rdi: {
      applicableFor: "males",
      ageStart: 51,
      ageEnd: 70,
      ageUnit: "year",
      importTable: "Vitamins",
      nutrient: "Copper",
      amount: 3.7,
      nutrientUnit: "L",
    },
    percentDaily: 2.2675675675675673,
  },
  {
    nutrient: {
      name: "Water",
      amount: 83.9,
      unit: "G",
    },
    rdi: {
      applicableFor: "males",
      ageStart: 70,
      ageEnd: null,
      ageUnit: "year",
      importTable: "Vitamins",
      nutrient: "Total Water",
      amount: 3.7,
      nutrientUnit: "L",
    },
    percentDaily: 2.2675675675675673,
  },
]

export const Table = () => (
  <NutritionFactTable food={food} nutrientRdis={nutrientDailyValues} />
)

export const Mobile = () => (
  <NutritionFactTable food={food} nutrientRdis={nutrientDailyValues} />
)
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
}

export const Tablet = () => (
  <NutritionFactTable food={food} nutrientRdis={nutrientDailyValues} />
)
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
}
