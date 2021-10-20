import { Breadcrumb } from "./index"
import { BreadcrumbType } from "../../generators/utilities/breadcrumbs"

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
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
  return <Breadcrumb paths={paths} />
}
