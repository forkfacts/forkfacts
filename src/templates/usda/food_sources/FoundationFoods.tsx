import * as React from "react"
export default ({ pageContext }) => {
  const { foundationFoodWithCategories} = pageContext
  return <div>
    <pre>{JSON.stringify(foundationFoodWithCategories, null, 2)}</pre>
  </div>
}