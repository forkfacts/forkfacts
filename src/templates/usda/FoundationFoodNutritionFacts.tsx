import * as React from "react"
import { Breadcrumbs } from "../../components/Breadcrumb"
import { FoundationFood, NutrientDailyValue, RDI } from "../../shared/types"
import { generateDailyValues } from "../../shared/functions"
import { NutritionFactTable } from "../../components/NutritionFactTable"
import Layout from "../../components/layout"
import { Box, Text } from "@chakra-ui/react"

export default ({ pageContext }) => {
  const { food, rdis, breadcrumbs } = pageContext
  const thisFood = food as FoundationFood
  const allRdis = rdis as RDI[]
  const values: NutrientDailyValue[] = generateDailyValues(thisFood, allRdis)

  return (
    <Layout>
      <Box gridGap={6} mt={6}>
        <Breadcrumbs paths={breadcrumbs} />
        <Text my={6} fontSize={"2xl"} fontWeight={"bold"}>
          {food.name}
        </Text>
        <NutritionFactTable food={thisFood} nutrientDailyValues={values} />
      </Box>
    </Layout>
  )
}
