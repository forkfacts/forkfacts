/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const data = require('./src/data/foundation_food_nutrition_facts.json')

exports.createPages = ({actions}) => {
  const { createPage } = actions
  const template = path.resolve('./src/templates/FoundationFoodNutritionFacts.tsx')
  data.forEach(food => {
    console.log(food)
    const pagePath = food["fdcId"].toString()
    createPage({
      path: pagePath,
      component: template,
      context: {
        food
      }
    })
  })
}