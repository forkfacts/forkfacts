import * as React from "react"
import { graphql } from "gatsby"
import { Breadcrumb } from "../Breadcrumb"

export default ({ pageContext }) => {
  const { food, rdi, breadcrumbs } = pageContext
  return <div style={{
    display: "flex",
    justifyContent: "space-around",
    marginTop: "5%"
  }}>
    <div>
      <div>
        <Breadcrumb paths={breadcrumbs} />
      </div>
      <h1>{food.name}</h1>
      <pre style={{ height: 600, width: "auto" }}>{JSON.stringify(food, null, 2)}</pre>
    </div>
    <div>
      <h1>RDI</h1>
      <pre style={{ height: 600, width: "auto" }}>{JSON.stringify(rdi, null, 2)}</pre>
    </div>
  </div>
}

export const query = graphql`
query MyQuery {
  allFoundationFoodNutritionFactsJson {
    nodes {
        fdcId
        name
        category
        nutrients {
          name
          amount
          unit
      }
    }
  }
}
`