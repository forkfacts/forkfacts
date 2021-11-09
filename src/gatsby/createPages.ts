import { GatsbyNode } from "gatsby"
import { FoundationFood } from "../shared/types"

const {
  generateFoundationFoodNutritionFactTables,
  generateFoundationFoodPage,
} = require("../generators/usda/foundation_food")

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions

  generateFoundationFoodNutritionFactTables({ createPageFunction: createPage })

  const { data } = await graphql(`
    query {
      allFoundationFoodNutritionFactsJson {
        nodes {
          name
          category
        }
      }
    }
  `)
  let dataElements: FoundationFood[] = (data as any)[
    "allFoundationFoodNutritionFactsJson"
  ]["nodes"]
  let foodWithCategories = dataElements.map(
    (element: { name: string; category: string }) => ({ ...element })
  )
  generateFoundationFoodPage({
    createPageFunction: createPage,
    data: foodWithCategories,
  })
}
