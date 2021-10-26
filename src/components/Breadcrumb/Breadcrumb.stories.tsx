import { Breadcrumbs } from "./index"
import { BreadcrumbType } from "../../generators/utilities/breadcrumbs"

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumbs,
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
