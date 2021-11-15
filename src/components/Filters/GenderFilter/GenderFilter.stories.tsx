import { GenderFilter } from "./index"
import { action } from "@storybook/addon-actions"

export default {
  title: "Components/Filters/GenderFilter",
  component: GenderFilter,
}

export const NoGenderSelected = () => (
  <GenderFilter onClick={action("Gender Selector Clicked")} />
)

export const MaleSelected = () => (
  <GenderFilter
    selectedGender={"Males"}
    onClick={action("Gender Selector Clicked")}
  />
)

export const FemaleSelected = () => (
  <GenderFilter
    selectedGender={"Females"}
    onClick={action("Gender Selector Clicked")}
  />
)
