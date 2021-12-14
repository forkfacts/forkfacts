import * as React from "react"
import { FoundationFood, NutrientRdi, RDI } from "../../shared/types"
import { generateRdiForFood } from "../../shared/functions"
import { NutritionFactTable } from "../../components/NutritionFactTable"
import Layout from "../../components/Layout"

export default ({ pageContext }) => {
  const { food, rdis, breadcrumbs } = pageContext
  const thisFood = food as FoundationFood
  const allRdis = rdis as RDI[]
  const nutrientRdis: NutrientRdi[] = generateRdiForFood(thisFood, allRdis)

  return (
    <Layout pageTitle={food.name} breadcrumbs={breadcrumbs}>
      <NutritionFactTable food={thisFood} nutrientRdis={nutrientRdis} />
    </Layout>
  )
}
