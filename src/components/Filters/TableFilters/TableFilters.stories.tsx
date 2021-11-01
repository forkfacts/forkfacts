import { TableFilters } from "./index"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

export default {
  title: "Components/Filters/TableFilters",
  component: TableFilters,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    backgrounds: {
      default: "gray100",
    },
  },
}

/**
 * https://fdc.nal.usda.gov/fdc-app.html#/food-details/171706/nutrients
 * Run following on developer console.
 * ```
 * let a = Array.from(document.querySelectorAll('span[name="finalFoodNutrientName"]'))
 * let nutrients = a.map(span => span.textContent)
 * copy(nutrients)
 * ```
 */
const nutrients = [
  "Water",
  "Energy",
  "Energy",
  "Protein",
  "Total lipid (fat)",
  "Ash",
  "Carbohydrate, by difference",
  "Fiber, total dietary",
  "Sugars, total including NLEA",
  "Sucrose",
  "Glucose",
  "Fructose",
  "Lactose",
  "Maltose",
  "Galactose",
  "Starch",
  "Calcium, Ca",
  "Iron, Fe",
  "Magnesium, Mg",
  "Phosphorus, P",
  "Potassium, K",
  "Sodium, Na",
  "Zinc, Zn",
  "Copper, Cu",
  "Manganese, Mn",
  "Selenium, Se",
  "Vitamin C, total ascorbic acid",
  "Thiamin",
  "Riboflavin",
  "Niacin",
  "Pantothenic acid",
  "Vitamin B-6",
  "Folate, total",
  "Folic acid",
  "Folate, food",
  "Folate, DFE",
  "Choline, total",
  "Betaine",
  "Vitamin B-12",
  "Vitamin A, RAE",
  "Retinol",
  "Carotene, beta",
  "Carotene, alpha",
  "Cryptoxanthin, beta",
  "Vitamin A, IU",
  "Lycopene",
  "Lutein + zeaxanthin",
  "Vitamin E (alpha-tocopherol)",
  "Tocopherol, beta",
  "Tocopherol, gamma",
  "Tocopherol, delta",
  "Tocotrienol, alpha",
  "Tocotrienol, beta",
  "Tocotrienol, gamma",
  "Tocotrienol, delta",
  "Vitamin D (D2 + D3), International Units",
  "Vitamin D (D2 + D3)",
  "Vitamin K (phylloquinone)",
  "Vitamin K (Dihydrophylloquinone)",
  "Fatty acids, total saturated",
  "SFA 8:0",
  "SFA 10:0",
  "SFA 12:0",
  "SFA 14:0",
  "SFA 15:0",
  "SFA 16:0",
  "SFA 17:0",
  "SFA 18:0",
  "SFA 20:0",
  "SFA 22:0",
  "SFA 24:0",
  "Fatty acids, total monounsaturated",
  "MUFA 14:1",
  "MUFA 15:1",
  "MUFA 16:1",
  "MUFA 17:1",
  "MUFA 18:1",
  "MUFA 20:1",
  "MUFA 22:1",
  "Fatty acids, total polyunsaturated",
  "PUFA 18:2",
  "PUFA 18:3",
  "PUFA 18:3 n-3 c,c,c (ALA)",
  "PUFA 18:3 n-6 c,c,c",
  "PUFA 18:4",
  "PUFA 20:2 n-6 c,c",
  "PUFA 20:3",
  "PUFA 20:4",
  "PUFA 2:5 n-3 (EPA)",
  "PUFA 22:5 n-3 (DPA)",
  "PUFA 22:6 n-3 (DHA)",
  "Fatty acids, total trans",
  "Cholesterol",
  "Stigmasterol",
  "Campesterol",
  "Beta-sitosterol",
  "Tryptophan",
  "Threonine",
  "Isoleucine",
  "Leucine",
  "Lysine",
  "Methionine",
  "Cystine",
  "Phenylalanine",
  "Tyrosine",
  "Valine",
  "Arginine",
  "Histidine",
  "Alanine",
  "Aspartic acid",
  "Glutamic acid",
  "Glycine",
  "Proline",
  "Serine",
]

const getRandomlySelectedNutrients = (howMany: number) =>
  nutrients
    .slice(0) // https://stackoverflow.com/a/9592758/379235
    .sort(() => 0.5 - Math.random()) // https://stackoverflow.com/a/38571132/379235
    .slice(0, howMany)

export const DesktopNoNutrientSelected = () => (
  <TableFilters
    allNutrients={nutrients}
    selectedNutrients={getRandomlySelectedNutrients(50)}
    selectedGender={"Male"}
    selectedAge={{ start: 70 }}
  />
)