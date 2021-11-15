import * as React from "react"
import { spaceToDashes } from "../../../generators/utilities/helpers"
import Layout from "../../../components/Layout"
import { Box, Text } from "@chakra-ui/react"

interface FoundationFoodType {
  [category: string]: string[]
}

export default ({ pageContext }) => {
  const { foundationFoodWithCategories, breadcrumbs } = pageContext
  const ffWithCategoriesTyped =
    foundationFoodWithCategories as FoundationFoodType
  return (
    <Layout pageTitle={"Foundation Food"} breadcrumbs={breadcrumbs}>
      <Text mt={4}>
        These are foods which are chemically analyzed. More to come from USDA
        tables
      </Text>
      <Box mt={4}>
        {Object.entries(ffWithCategoriesTyped).map(
          ([category, foods], index) => {
            const id = spaceToDashes(category)
            return (
              <Box my={5}>
                <section id={id} key={index}>
                  <Text fontSize={"xl"} fontWeight={"semibold"} py={2}>
                    {category}
                  </Text>
                  {foods.map((food, idx) => (
                    <Box key={idx} py={1}>
                      <a
                        href={`/${spaceToDashes(food)}`}
                        style={{ textDecoration: "underline" }}
                      >
                        {food}
                      </a>
                    </Box>
                  ))}
                </section>
              </Box>
            )
          }
        )}
      </Box>
    </Layout>
  )
}
