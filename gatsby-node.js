/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const {
  generateFoundationFoodNutritionFactTables,
  generateFoundationFoodPage
} = require("./src/generators/usda/foundation_food")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  generateFoundationFoodNutritionFactTables(createPage)


  const { data } = await graphql(`
  query {
    allFoundationFoodNutritionFactsJson {
      nodes {
        name
        category
      }
    }
   }`)
  generateFoundationFoodPage(createPage, data)
}