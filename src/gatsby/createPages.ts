import { GatsbyNode } from "gatsby";
import { FoundationOrSrFood } from "../shared/types";

const {
  generateNutritionFactTables,
  generateFFAndSRPage,
} = require("../generators/usda/foundation_sr_food");

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  generateNutritionFactTables({ createPageFunction: createPage });

  const { data } = await graphql(`
    query {
      allFoundationFoodNutritionFactsJson {
        nodes {
          name
          category
        }
      }
      allSrLegacyFoodNutritionFactsJson {
        nodes {
          name
          category
        }
      }
    }
  `);

  let foundationFoods: FoundationOrSrFood[] = (data as any)[
    "allFoundationFoodNutritionFactsJson"
  ]["nodes"];
  let srFoods: FoundationOrSrFood[] = (data as any)[
    "allSrLegacyFoodNutritionFactsJson"
  ]["nodes"];

  let foodWithCategories = [...foundationFoods, ...srFoods].map(
    (element: { name: string; category: string }) => ({ ...element })
  );
  generateFFAndSRPage({
    createPageFunction: createPage,
    data: foodWithCategories,
  });
};
