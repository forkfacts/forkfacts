import React, { useEffect, useState } from "react"
import { Box } from "@chakra-ui/react"
import {
  TableFilters,
  TableFiltersProps,
  UserSelectionProps,
} from "../Filters/TableFilters"
import { FactTable, FactTableRow } from "../FactTable"
import { Age, FoundationFood, NutrientDailyValue } from "../../shared/types"
import { allAges as allAgesData } from "../../shared/data"

type NutritionFactTableProps = {
  food: FoundationFood
  allAges?: Age[]
  nutrientDailyValues: NutrientDailyValue[]
}

type NutritionFactTableState = Omit<
  TableFiltersProps,
  "allNutrients" | "onDone"
> &
  Omit<NutritionFactTableProps, "nutrientDailyValues">

export const NutritionFactTable = ({
  food,
  allAges = allAgesData,
  nutrientDailyValues,
}: NutritionFactTableProps) => {
  const [state, setState] = useState<NutritionFactTableState>({
    food,
    allAges,
    selectedGender: "Females",
    // todo: change, make it configurable
    selectedAge: allAges.filter(age => age.start === 31)[0],
    // no nutrients selected by user initially, show all nutrients
    selectedNutrients: [],
  })
  const [nutrientDailyValuesSelected, setNutrientDailyValuesSelected] =
    useState<NutrientDailyValue[]>(nutrientDailyValues)
  const [rows, setRows] = useState<FactTableRow[]>([])

  const onDone = (selection: UserSelectionProps) => {
    setState(prevState => ({
      ...prevState,
      selectedGender: selection.selectedGender,
      selectedAge: selection.selectedAge,
      selectedNutrients: selection.selectedNutrients,
    }))
  }

  useEffect(() => {
    const gender = state.selectedGender
    const age = state.selectedAge
    // todo: move this logic in ts file so that we can write tests
    const rdisForGenderAge = nutrientDailyValues.filter(value => {
      /**
       * If the nutrient does not have associated RDI,
       * we do not include it in selected result
       */
      if (!value.rdi) return false
      const ageMatches =
        value.rdi.ageStart === age.start &&
        value.rdi.ageEnd === age.end &&
        value.rdi.ageUnit === age.ageUnit
      // todo: make gender types same as Gender for RDI as well? remove lowercase comparison
      const genderMatches = value.rdi.applicableFor === gender.toLowerCase()
      return ageMatches && genderMatches
    })
    setNutrientDailyValuesSelected(rdisForGenderAge)
  }, [state.selectedGender, state.selectedAge])

  useEffect(() => {
    // todo: move this logic in ts file so that we can write tests
    const nutrients =
      state.selectedNutrients.length < 1
        ? food.nutrients
        : state.selectedNutrients
    const nutrientsWithDailyValues = nutrients.map((nutrient, index) => {
      const nutrientWithDailyValue = nutrientDailyValues.filter(
        value =>
          value.nutrient.name === nutrient.name &&
          value.nutrient.unit === nutrient.unit
      )[0]
      return {
        id: index,
        nutrient: nutrient.name,
        amount: nutrient.amount,
        amountUnit: nutrient.unit.toLowerCase(),
        dailyValue: nutrientWithDailyValue?.percentDaily,
      }
    })
    setRows(nutrientsWithDailyValues)
  }, [state.selectedNutrients, nutrientDailyValuesSelected])

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
      <FactTable
        rows={rows}
        nutrientsFilterApplied={state.selectedNutrients.length > 0}
      />
    </Box>
  )
}
