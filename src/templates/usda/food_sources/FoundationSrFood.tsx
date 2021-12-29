import * as React from "react"
import { spaceToDashes } from "../../../generators/utilities/helpers"
import Layout from "../../../components/Layout"
import { Box, Text } from "@chakra-ui/react"

interface FoundationSrFoodType {
  [category: string]: string[]
}

export default ({ pageContext }) => {
  const { foundationFoodWithCategories, breadcrumbs } = pageContext
  const ffWithCategoriesTyped =
    foundationFoodWithCategories as FoundationSrFoodType
  return (
    <Layout pageTitle={"All Foods"} breadcrumbs={breadcrumbs}>
      <Text mt={4}>Following foods are chemically analyzed by USDA.</Text>
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
