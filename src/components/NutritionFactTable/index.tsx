import React from "react"
import { Box } from "@chakra-ui/react"
import { TableFilters, TableFiltersProps } from "../Filters/TableFilters"
import { FactTable, FactTableRow } from "../FactTable"
import { FoundationFood } from "../../shared/types"

type NutritionFactTableProps = Omit<TableFiltersProps, "allNutrients"> & {
  food: FoundationFood
}

export const NutritionFactTable = ({
  selectedNutrients,
  selectedAge,
  onDone,
  allAges,
  selectedGender,
  food,
}: NutritionFactTableProps) => {
  const allNutrients = food.nutrients.map(n => n.name)
  const rows: FactTableRow[] = food.nutrients.map((nutrient, index) => ({
    id: index,
    nutrient: nutrient.name,
    amount: nutrient.amount,
    amountUnit: nutrient.unit.toLowerCase(),
    dailyValue: 0.0, // todo: change next
  }))
  return (
    <Box>
      <TableFilters
        allNutrients={allNutrients}
        allAges={allAges}
        selectedNutrients={selectedNutrients}
        selectedGender={selectedGender}
        selectedAge={selectedAge}
        onDone={onDone}
      />
      <FactTable rows={rows} />
    </Box>
  )
}
