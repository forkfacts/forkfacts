import { Breadcrumbs } from "./index"
import { BreadcrumbType } from "../../generators/utilities/breadcrumbs"

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumbs,
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
}

export const OneParentLevel = () => {
  const paths: BreadcrumbType[] = [
    { displayName: "USDA", url: "/usda" },
    { displayName: "Avocado" },
  ]
  return <Breadcrumbs paths={paths} />
}
