import * as React from "react"
import { Breadcrumbs } from "../../components/Breadcrumb"
import { FoundationFood, RDI } from "../../shared/types"
import {
  getDailyPercentValue,
  mappingsByNutrient,
} from "../../shared/functions"

export default ({ pageContext }) => {
  const { food, rdis, breadcrumbs } = pageContext
  const thisFood = food as FoundationFood
  const thisRdis = rdis as RDI[]
  const generateDailyValues = () => {
    return thisFood.nutrients.map(nutrient => {
      const mappedRdi = mappingsByNutrient.get(nutrient.name)

      if (!mappedRdi) return { nutrient }

      const rdisForNutrient = thisRdis.filter(
        rdi => rdi.nutrient === mappedRdi.rdiNutrientName
      )
      return rdisForNutrient.map(rdi => {
        const percentDaily = getDailyPercentValue(nutrient, rdi)
        return { nutrient, rdi, percentDaily }
      })
    })
  }
  const values = generateDailyValues()

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "5%",
      }}
    >
      <div>
        <div>
          <Breadcrumbs paths={breadcrumbs} />
        </div>
        <h1>{thisFood.name}</h1>
        <pre style={{ height: 600, width: "auto" }}>
          {JSON.stringify(food, null, 2)}
        </pre>
      </div>
      <div>
        <h1>RDI</h1>
        <pre style={{ height: 600, width: "auto" }}>
          {JSON.stringify(thisRdis, null, 2)}
        </pre>
      </div>
      <div>
        <h1>Values</h1>
        <pre style={{ height: 600, width: "auto" }}>
          {JSON.stringify(values, null, 2)}
        </pre>
      </div>
    </div>
  )
}
