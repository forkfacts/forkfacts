import { NutrientFilter } from "./index"
import { action } from "@storybook/addon-actions"

export default {
  title: "Components/Filters/NutrientFilter",
  component: NutrientFilter,
}

export const NoSelectedNutrients = () => (
  <NutrientFilter
    selectedNutrients={[]}
    onClick={action("Nutrient Selector Clicked")}
  />
)

export const OneSelectedNutrient = () => (
  <NutrientFilter
    selectedNutrients={["Calcium"]}
    onClick={action("Nutrient Selector Clicked")}
  />
)

export const MultipleSelectedNutrients = () => (
  <NutrientFilter
    selectedNutrients={["Magnesium", "Calcium", "Copper"]}
    onClick={action("Nutrient Selector Clicked")}
  />
)
