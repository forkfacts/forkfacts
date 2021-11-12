import { spaceToDashes } from "./helpers"

export type BreadcrumbType = {
  displayName: string
  url: string
}

//todo : URLs must change to correct locations

export const HOME: BreadcrumbType = {
  displayName: "Home",
  url: "/",
}
export const USDA: BreadcrumbType = {
  displayName: "USDA",
  // todo: create a basic page explaining the data
  url: "https://fdc.nal.usda.gov/",
}

export const FOUNDATION_FOOD: BreadcrumbType = {
  displayName: "Foundation Food",
  url: "/foundation-foods",
}

export const createBreadcrumb = (
  parentBreadcrumb: BreadcrumbType,
  name: string
) => {
  return {
    displayName: name,
    url: `${parentBreadcrumb.url}/#${spaceToDashes(name)}`,
  }
}
