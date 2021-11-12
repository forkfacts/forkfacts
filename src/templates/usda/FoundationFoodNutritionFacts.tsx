import * as React from "react"
import { Breadcrumbs } from "../../components/Breadcrumb"
import { FoundationFood, NutrientDailyValue, RDI } from "../../shared/types"
import { generateDailyValues } from "../../shared/functions"
import { NutritionFactTable } from "../../components/NutritionFactTable"
import Layout from "../../components/layout"

export default ({ pageContext }) => {
  const { food, rdis, breadcrumbs } = pageContext
  const thisFood = food as FoundationFood
  const allRdis = rdis as RDI[]
  const values: NutrientDailyValue[] = generateDailyValues(thisFood, allRdis)

  return (
    <Layout>
      <Breadcrumbs paths={breadcrumbs} />
      <NutritionFactTable food={thisFood} nutrientDailyValues={values} />
    </Layout>
  )
}
