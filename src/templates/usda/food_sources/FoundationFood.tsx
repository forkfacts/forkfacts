import * as React from "react"
import { spaceToDashes } from "../../../generators/utilities/helpers"

interface FoundationFoodType {
  [category: string]: string[]
}

export default ({ pageContext }) => {
  const { foundationFoodWithCategories } = pageContext
  const ffWithCategoriesTyped = foundationFoodWithCategories as FoundationFoodType
  return <div>
    <h1>Foundation Food</h1>
    <p>These are foods which are chemically analyzed. More to come from USDA tables</p>
    {Object.entries(ffWithCategoriesTyped).map(([category, foods], index) => {
      const id = spaceToDashes(category)
      return <section id={id} key={index}>
        <h3>{category}</h3>
        {foods.map((food, idx) => <p key={idx}>{food}</p>)}
      </section>
    })}
  </div>
}