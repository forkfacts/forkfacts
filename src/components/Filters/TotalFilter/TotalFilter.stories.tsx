import { TotalFilter } from "./index"
import { action } from "@storybook/addon-actions"

export default {
  title: "Components/Filters/TotalFilter",
  component: TotalFilter,
}

export const TotalAppliedFilter = () => (
  <TotalFilter applied={3} onClick={action("Total Selector Clicked")} />
)
