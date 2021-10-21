import * as React from "react"
import { Breadcrumbs } from "../../components/Breadcrumb"

export default ({ pageContext }) => {
  const { food, rdi, breadcrumbs } = pageContext
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
        <h1>{food.name}</h1>
        <pre style={{ height: 600, width: "auto" }}>
          {JSON.stringify(food, null, 2)}
        </pre>
      </div>
      <div>
        <h1>RDI</h1>
        <pre style={{ height: 600, width: "auto" }}>
          {JSON.stringify(rdi, null, 2)}
        </pre>
      </div>
    </div>
  )
}
