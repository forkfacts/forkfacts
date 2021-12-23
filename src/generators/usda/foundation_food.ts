import {
  HOME,
  createBreadcrumb,
  FOUNDATION_FOOD,
  USDA,
} from "../utilities/breadcrumbs"
import { spaceToDashes } from "../utilities/helpers"
import { FoundationFood, RDI, SearchIndex } from "../../shared/types"

const path = require("path")
const ff_nutrition_facts = require("../../../src/data/foundation_food_nutrition_facts.json")
const rdis: RDI[] = require("../../../src/data/rdi.json")

interface NutritionFactFnType {
  path: string
  component: string
  context: {}
}

type CreatePageFnProps = {
  createPageFunction: (fnType: NutritionFactFnType) => void
}

const generateFoundationFoodNutritionFactTables = ({
  createPageFunction,
}: CreatePageFnProps) => {
  const template = path.resolve(
    "./src/templates/usda/FoundationFoodNutritionFacts.tsx"
  )
  let ffSearchIndex: SearchIndex = []
  ff_nutrition_facts.forEach((food: FoundationFood) => {
    const pagePath = spaceToDashes(food["name"].toString())

    createPageFunction({
      path: pagePath,
      component: template,
      context: {
        food,
        rdis,
        breadcrumbs: [
          HOME,
          // USDA, // todo: enable others when we have data from other data sources
          FOUNDATION_FOOD,
          createBreadcrumb(FOUNDATION_FOOD, food.category),
        ],
      },
    })
    ffSearchIndex.push({
      name: food.name,
      category: food.category,
      url: `/${pagePath}`,
    })
  })
  console.log(
    `Length: ${ffSearchIndex.length}, ${JSON.stringify(ffSearchIndex)}`
  )
}

type FoundationFoodPageProps = CreatePageFnProps & {
  data: [{ name: string; category: string }]
}
const generateFoundationFoodPage = ({
  createPageFunction,
  data,
}: FoundationFoodPageProps) => {
  const template = path.resolve(
    "./src/templates/usda/food_sources/FoundationFood.tsx"
  )
  const foundationFoodWithCategories = data.reduce((acc, node) => {
    const foods = acc.has(node.category)
      ? [...(acc.get(node.category) as string[]), node.name]
      : [node.name]
    acc.set(node.category, foods)
    return acc
  }, new Map<string, string[]>())
  createPageFunction({
    path: "foundation-foods",
    component: template,
    context: {
      foundationFoodWithCategories: Object.fromEntries(
        foundationFoodWithCategories
      ),
      breadcrumbs: [
        HOME,
        // USDA, // todo: enable others when we have data from other data sources
        FOUNDATION_FOOD,
      ],
    },
  })
}

module.exports = {
  generateFoundationFoodNutritionFactTables,
  generateFoundationFoodPage,
}
