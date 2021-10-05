const path = require("path")
const ff_nutrition_facts = require("../../../src/data/foundation_food_nutrition_facts.json")
const rdi = require("../../../src/data/rdi.json")

interface NutritionFactFnType {
  path: string
  component: string
  context: {}
}

interface FoundationFoodType {
  fdcId: number,
  name: string,
  category: string,
  nutrients: [{ name: string, amount: number, unit: "G" | "MG" | "UG" }]
}

type CreatePageFnProps = {
  createPageFunction: (fnType: NutritionFactFnType) => void
}

const generateFoundationFoodNutritionFactTables = ({ createPageFunction }: CreatePageFnProps) => {
  const template = path.resolve("./src/templates/usda/FoundationFoodNutritionFacts.tsx")
  ff_nutrition_facts.forEach((food: FoundationFoodType) => {
    const pagePath = food["name"].toString().replace(/[^\w]+/g, "-")
    createPageFunction({
      path: pagePath,
      component: template,
      context: {
        food,
        rdi,
        breadcrumbs: ["All Foods", "USDA", "Foundation Food", food["category"], food["name"]]
      }
    })
  })
}


type FoundationFoodPageProps = CreatePageFnProps & { data: [{ name: string, category: string }] }
const generateFoundationFoodPage = ({ createPageFunction, data }: FoundationFoodPageProps) => {
  const template = path.resolve("./src/templates/usda/food_sources/FoundationFood.tsx")
  const foundationFoodWithCategories = data.reduce((acc, node) => {
    const foods = acc.has(node.category) ? [...(acc.get(node.category) as string[]), node.name] : [node.name]
    acc.set(node.category, foods)
    return acc
  }, new Map<string, string[]>())
  createPageFunction({
    path: "foundation-foods",
    component: template,
    context: { foundationFoodWithCategories: Object.fromEntries(foundationFoodWithCategories) }
  })
}

module.exports = {
  generateFoundationFoodNutritionFactTables,
  generateFoundationFoodPage
}