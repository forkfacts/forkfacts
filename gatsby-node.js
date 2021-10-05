/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const { generateFoundationFoodNutritionFactTables } = require("./src/generators/usda/foundation_food")

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
  const foundationFoodWithCategories = data.allFoundationFoodNutritionFactsJson.nodes.reduce((acc, node) => {
    const foods = acc.has(node.category) ? [...acc.get(node.category), node.name]: [node.name]
    return acc.set(node.category, foods)
  }, new Map())
  console.log(foundationFoodWithCategories)
  createPage({
    path: 'foundation-foods',
    component: require.resolve(`./src/templates/usda/food_sources/FoundationFoods.tsx`),
    context: { foundationFoodWithCategories: Object.fromEntries(foundationFoodWithCategories)},
  })
}