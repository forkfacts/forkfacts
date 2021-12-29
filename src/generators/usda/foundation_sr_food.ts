import { HOME, createBreadcrumb, FOODS } from "../utilities/breadcrumbs"
import { spaceToDashes } from "../utilities/helpers"
import { FoundationOrSrFood, RDI, SearchIndex } from "../../shared/types"
import { writeJsonToFile } from "../../shared/functions"

const path = require("path")
const ff_nutrition_facts = require("../../../src/data/foundation_food_nutrition_facts.json")
const sr_legacy_nutrition_facts = require("../../../src/data/sr_legacy_food_nutrition_facts.json")
const rdis: RDI[] = require("../../../src/data/rdi.json")

interface NutritionFactFnType {
  path: string
  component: string
  context: {}
}

type CreatePageFnProps = {
  createPageFunction: (fnType: NutritionFactFnType) => void
}

const generateNutritionFactTables = ({
  createPageFunction,
}: CreatePageFnProps) => {
  createFoodPages({
    createPageFunction,
    foods: ff_nutrition_facts,
    indexFileName: "ff_search_index",
  })
  createFoodPages({
    createPageFunction,
    foods: sr_legacy_nutrition_facts,
    indexFileName: "sr_search_index",
  })
}

type FoundationFoodPageProps = CreatePageFnProps & {
  data: [{ name: string; category: string }]
}
const generateFFAndSRPage = ({
  createPageFunction,
  data,
}: FoundationFoodPageProps) => {
  const template = path.resolve(
    "./src/templates/usda/food_sources/FoundationSrFood.tsx"
  )
  const foundationFoodWithCategories = data.reduce((acc, node) => {
    const foods = acc.has(node.category)
      ? [...(acc.get(node.category) as string[]), node.name]
      : [node.name]
    acc.set(node.category, foods)
    return acc
  }, new Map<string, string[]>())
  createPageFunction({
    path: FOODS.url,
    component: template,
    context: {
      foundationFoodWithCategories: Object.fromEntries(
        foundationFoodWithCategories
      ),
      breadcrumbs: [HOME, FOODS],
    },
  })
}

type FoodPageType = CreatePageFnProps & {
  foods: FoundationOrSrFood[]
  indexFileName: string
}

const createFoodPages = ({
  createPageFunction,
  foods,
  indexFileName,
}: FoodPageType) => {
  let ffSearchIndex: SearchIndex = []
  const template = path.resolve(
    "./src/templates/usda/FoundationFoodNutritionFacts.tsx"
  )
  foods.forEach((food: FoundationOrSrFood) => {
    const pagePath = spaceToDashes(food["name"].toString())

    createPageFunction({
      path: pagePath,
      component: template,
      context: {
        food,
        rdis,
        breadcrumbs: [HOME, FOODS, createBreadcrumb(FOODS, food.category)],
      },
    })
    ffSearchIndex.push({
      name: food.name,
      category: food.category,
      url: `/${pagePath}`,
    })
  })
  writeJsonToFile(`${indexFileName}.json`, ffSearchIndex)
}

module.exports = {
  generateNutritionFactTables,
  generateFFAndSRPage,
}
