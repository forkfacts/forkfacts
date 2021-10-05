/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")
const ff_nutrition_facts = require("./src/data/foundation_food_nutrition_facts.json")
const rdi = require("./src/data/rdi.json")

exports.createPages = async ({ actions, graphql }) => {
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

  const { data } = await graphql(`
  query {
    allFoundationFoodNutritionFactsJson {
      nodes {
        name
        category
      }
    }
   }`)
  //const foundationalFoodWithCategories = data.allFoundationFoodNutritionFactsJson.nodes.map(node => ({name: node.name, category: node.category}))
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