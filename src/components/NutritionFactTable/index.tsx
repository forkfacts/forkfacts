import React, { useState } from "react"
import { Box } from "@chakra-ui/react"
import {
  TableFilters,
  TableFiltersProps,
  UserSelectionProps,
} from "../Filters/TableFilters"
import { FactTable, FactTableRow } from "../FactTable"
import { Age, FoundationFood } from "../../shared/types"

type NutritionFactTableProps = {
  allAges: Age[]
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
  const getRows: () => FactTableRow[] = () => {
    const nutrients =
      state.selectedNutrients.length < 1
        ? food.nutrients
        : state.selectedNutrients
    return nutrients.map((nutrient, index) => ({
      id: index,
      nutrient: nutrient.name,
      amount: nutrient.amount,
      amountUnit: nutrient.unit.toLowerCase(),
      dailyValue: 0.0, // todo: change next
    }))
  }
  const rows = getRows()

  const onDone = (selection: UserSelectionProps) => {
    setState(prevState => ({
      ...prevState,
      selectedGender: selection.selectedGender,
      selectedAge: selection.selectedAge,
      selectedNutrients: selection.selectedNutrients,
    }))
  }

  if (
    !(state.food && state.allAges && state.selectedAge && state.selectedGender)
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
        onDone={onDone}
      />
      <FactTable rows={rows} />
    </Box>
  )
}
