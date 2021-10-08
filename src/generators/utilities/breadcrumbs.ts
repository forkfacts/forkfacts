import { spaceToDashes } from "./helpers"

export type BreadcrumbType = {
  displayName: string,
  url?: string
}

//todo : URLs must change to correct locations

export const ALL_FOODS: BreadcrumbType = {
  displayName: "All Foods",
  url: "https://google.com"
}
export const USDA: BreadcrumbType = {
  displayName: "USDA",
  url: "https://fdc.nal.usda.gov/"
}

export const FOUNDATION_FOOD: BreadcrumbType = {
  displayName: "Foundation Food",
  url: "/foundation-foods"
}

export const createBreadcrumb = (parentBreadcrumb: BreadcrumbType, name: string) => {
  return {
    displayName: name,
    url: `${parentBreadcrumb.url}/#${spaceToDashes(name)}`
  }
}

export const createLeafBreadcrumb = (name: string) => {
  return {
    displayName: name,
    url: undefined
  }
}