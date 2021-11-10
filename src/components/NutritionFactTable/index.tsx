import React, { useState } from "react"
import { Box } from "@chakra-ui/react"
import {
  AgeProps,
  TableFilters,
  TableFiltersProps,
} from "../Filters/TableFilters"
import { FactTable, FactTableRow } from "../FactTable"
import { FoundationFood } from "../../shared/types"

type NutritionFactTableProps = {
  allAges: AgeProps[]
  food: FoundationFood
}

type NutritionFactTableState = Omit<
  TableFiltersProps,
  "allNutrients" | "onDone"
> &
  NutritionFactTableProps

export const NutritionFactTable = ({
  food,
  allAges,
}: NutritionFactTableProps) => {
  const [state, setState] = useState<NutritionFactTableState>({
    food,
    allAges,
    selectedGender: "Female",
    selectedAge: allAges.filter(age => age.start === 31)[0], // todo: change, make it configurable
    selectedNutrients: [], // no nutrients selected by default
  })
  const rows: FactTableRow[] = food.nutrients.map((nutrient, index) => ({
    id: index,
    nutrient: nutrient.name,
    amount: nutrient.amount,
    amountUnit: nutrient.unit.toLowerCase(),
    dailyValue: 0.0, // todo: change next
  }))

  if (
    !(
      state.food &&
      state.allAges &&
      state.selectedAge &&
      state.selectedNutrients &&
      state.selectedGender
    )
  )
    return null

  return (
    <Box>
      <TableFilters
        allNutrients={state.food.nutrients}
        allAges={allAges}
        selectedNutrients={state.selectedNutrients}
        selectedGender={state.selectedGender}
        selectedAge={state.selectedAge}
        onDone={() => {}}
      />
      <FactTable rows={rows} />
    </Box>
  )
}
