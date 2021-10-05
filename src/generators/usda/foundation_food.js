const path = require("path")
const ff_nutrition_facts = require("../../../src/data/foundation_food_nutrition_facts.json")
const rdi = require("../../../src/data/rdi.json")

/*interface foundationFoodNutritionFactTableProps {
  createPageFunction: ({
                         path: string,
                         component: any,
                         context: {}
                       }) => void
}*/

const generateFoundationFoodNutritionFactTables = (createPageFunction) => {
  const template = path.resolve("./src/templates/usda/FoundationFoodNutritionFacts.tsx")
  ff_nutrition_facts.forEach(food => {
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

module.exports = {
  generateFoundationFoodNutritionFactTables
}