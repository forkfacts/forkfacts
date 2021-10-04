/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")
const ff_nutrition_facts = require("./src/data/foundation_food_nutrition_facts.json")
const rdi = require("./src/data/rdi.json")

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const template = path.resolve("./src/templates/FoundationFoodNutritionFacts.tsx")
  ff_nutrition_facts.forEach(food => {
    const pagePath = food["name"].toString().replace(/[^\w]+/g, "_")
    createPage({
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