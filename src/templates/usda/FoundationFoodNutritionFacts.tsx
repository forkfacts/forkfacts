import * as React from "react"
import { FoundationFood, NutrientDailyValue, RDI } from "../../shared/types"
import { generateDailyValues } from "../../shared/functions"
import { NutritionFactTable } from "../../components/NutritionFactTable"
import Layout from "../../components/Layout"

export default ({ pageContext }) => {
  const { food, rdis, breadcrumbs } = pageContext
  const thisFood = food as FoundationFood
  const allRdis = rdis as RDI[]
  const values: NutrientDailyValue[] = generateDailyValues(thisFood, allRdis)

  return (
    <Layout pageTitle={food.name} breadcrumbs={breadcrumbs}>
      <NutritionFactTable food={thisFood} nutrientDailyValues={values} />
    </Layout>
  )
}
