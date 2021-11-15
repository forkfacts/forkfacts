import { spaceToDashes } from "./helpers"
import { Breadcrumb } from "../../shared/types"

//todo : URLs must change to correct locations
export const HOME: Breadcrumb = {
  displayName: "Home",
  url: "/",
}
export const USDA: Breadcrumb = {
  displayName: "USDA",
  // todo: create a basic page explaining the data
  url: "https://fdc.nal.usda.gov/",
}

export const FOUNDATION_FOOD: Breadcrumb = {
  displayName: "Foundation Food",
  url: "/foundation-foods",
}

export const createBreadcrumb = (
  parentBreadcrumb: Breadcrumb,
  name: string
) => {
  return {
    displayName: name,
    url: `${parentBreadcrumb.url}/#${spaceToDashes(name)}`,
  }
}
