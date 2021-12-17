import { FactTable, FactTableRow } from "./index"
import React from "react"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

export default {
  title: "Components/FactTable",
  component: FactTable,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
}

const rows: FactTableRow[] = [
  { id: 1, nutrient: "Water", amount: 72.3, amountUnit: "g", dailyValue: 2.68 },
  {
    id: 2,
    nutrient: "Energy",
    amount: 167,
    amountUnit: "kcal",
    dailyValue: 0.12,
  },
  {
    id: 3,
    nutrient: "Protein",
    amount: 1.96,
    amountUnit: "g",
    dailyValue: 5.01,
  },
  {
    id: 4,
    nutrient: "Sugars, total including NLEA",
    amount: 0.3,
    amountUnit: "g",
  },
  {
    id: 5,
    nutrient: "Calcium, Ca",
    amount: 1300,
    amountUnit: "mg",
    dailyValue: 7.0,
  },
  {
    id: 6,
    nutrient: "MUFA 22:1 n-9",
    amount: 196,
    amountUnit: "g",
    dailyValue: 15.01,
  },
  {
    id: 7,
    nutrient: "MUFA 24:1 c",
    amount: 2.3,
    amountUnit: "g",
    dailyValue: 0.23,
  },
  {
    id: 8,
    nutrient: "Carotene, beta",
    amount: 300,
    amountUnit: "mg",
    dailyValue: 67.0,
  },
]

export const Desktop = () => <FactTable rows={rows} />

export const Mobile = () => <FactTable rows={rows} />
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
}

export const Tablet = () => <FactTable rows={rows} />
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
}
