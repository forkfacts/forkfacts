import { spaceToDashes } from "./helpers";
import { Breadcrumb } from "../../shared/types";

//todo : URLs must change to correct locations
export const HOME: Breadcrumb = {
  displayName: "Home",
  url: "/",
};

export const FOODS: Breadcrumb = {
  displayName: "Foods",
  url: "/foods",
};

export const createBreadcrumb = (
  parentBreadcrumb: Breadcrumb,
  name: string
) => {
  return {
    displayName: name,
    url: `${parentBreadcrumb.url}/#${spaceToDashes(name)}`,
  };
};
