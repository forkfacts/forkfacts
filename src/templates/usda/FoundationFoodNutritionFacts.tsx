import * as React from "react"
import { Breadcrumbs } from "../../components/Breadcrumb"
import { FoundationFood, NutrientDailyValue, RDI } from "../../shared/types"
import { generateDailyValues } from "../../shared/functions"

export default ({ pageContext }) => {
  const { food, rdis, breadcrumbs } = pageContext
  const thisFood = food as FoundationFood
  const allRdis = rdis as RDI[]
  const values: NutrientDailyValue[] = generateDailyValues(thisFood, allRdis)

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
          {JSON.stringify(allRdis, null, 2)}
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
