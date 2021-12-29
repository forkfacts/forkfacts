import { GatsbyNode } from "gatsby"
import { FoundationOrSrFood } from "../shared/types"

const {
  generateNutritionFactTables,
  generateFoundationFoodPage,
} = require("../generators/usda/foundation_food")

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions

  generateNutritionFactTables({ createPageFunction: createPage })

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
  let dataElements: FoundationOrSrFood[] = (data as any)[
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
