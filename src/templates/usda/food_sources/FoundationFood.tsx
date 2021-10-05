import * as React from "react"
export default ({ pageContext }) => {
  const { foundationFoodWithCategories} = pageContext
  return <div>
    <h1>Foundation Food</h1>
    <p>These are foods which are chemically analyzed. More to come from USDA tables</p>
    <pre>{JSON.stringify(foundationFoodWithCategories, null, 2)}</pre>
  </div>
}