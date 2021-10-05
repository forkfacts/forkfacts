import * as React from "react"

interface FoundationFoodType {
  [category: string]: string[]
}

export default ({ pageContext }) => {
  const { foundationFoodWithCategories } = pageContext
  const ffWithCategoriesTyped = foundationFoodWithCategories as FoundationFoodType
  console.log(ffWithCategoriesTyped)
  return <div>
    <h1>Foundation Food</h1>
    <p>These are foods which are chemically analyzed. More to come from USDA tables</p>
    {Object.entries(ffWithCategoriesTyped).map(([category, foods], index) => {
      return <section id={category} key={index}>
        <h3>{category}</h3>
        {foods.map(food => <p>{food}</p>)}
      </section>
    })}
  </div>
}