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
      default: "gray300",
    },
  },
}

export const DesktopNoNutrientSelected = () => <TableFilters />
