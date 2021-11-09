import * as React from "react"
import { Breadcrumbs } from "../../components/Breadcrumb"
import { FoundationFood, RDI } from "../../shared/types"

export default ({ pageContext }) => {
  const { food, rdi, breadcrumbs } = pageContext
  const thisFood = food as FoundationFood
  const thisRdi = rdi as RDI

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
          {JSON.stringify(thisRdi, null, 2)}
        </pre>
      </div>
    </div>
  )
}
