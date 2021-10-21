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

export const Trail = () => {
  const paths: BreadcrumbType[] = [
    { displayName: "USDA", url: "/#" },
    {
      displayName: "Legumes and Legume Products",
      url: "/#",
    },
  ]
  return <Breadcrumbs paths={paths} />
}