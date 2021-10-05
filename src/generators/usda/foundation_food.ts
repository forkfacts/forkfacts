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

interface foundationFoodNutritionFactTableProps {
  createPageFunction: (fnType: NutritionFactFnType) => void
}

const generateFoundationFoodNutritionFactTables = ({ createPageFunction }: foundationFoodNutritionFactTableProps) => {
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

/*const generateFoundationFoodPage = (createPageFunction, data) => {
  const template = path.resolve("./src/templates/usda/food_sources/FoundationFood.tsx")
  const foundationFoodWithCategories = data.allFoundationFoodNutritionFactsJson.nodes.reduce((acc, node) => {
    const foods = acc.has(node.category) ? [...acc.get(node.category), node.name] : [node.name]
    return acc.set(node.category, foods)
  }, new Map())
  console.log(foundationFoodWithCategories)
  createPageFunction({
    path: "foundation-foods",
    component: template,
    context: { foundationFoodWithCategories: Object.fromEntries(foundationFoodWithCategories) }
  })
}*/

module.exports = {
  generateFoundationFoodNutritionFactTables
  //generateFoundationFoodPage
}