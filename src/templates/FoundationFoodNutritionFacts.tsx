import * as React from "react"
import { graphql } from "gatsby"

export default ({ pageContext }) => {
  const { food } = pageContext
  return <>
    <h1>{food.name}</h1>
    <pre>{JSON.stringify(food, null, 2)}</pre>
  </>
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