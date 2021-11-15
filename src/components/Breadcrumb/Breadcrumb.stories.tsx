import { Breadcrumbs } from "./index"
import { Breadcrumb } from "../../shared/types"

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumbs,
}

export const Trail = () => {
  const paths: Breadcrumb[] = [
    { displayName: "USDA", url: "/#" },
    {
      displayName: "Legumes and Legume Products",
      url: "/#",
    },
  ]
  return <Breadcrumbs paths={paths} />
}
