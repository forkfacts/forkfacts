import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import {
  TableFilters,
  TableFiltersProps,
  UserSelectionProps,
} from "../Filters/TableFilters";
import { FactTable, FactTableRow } from "../FactTable";
import { Age, FoundationOrSrFood, NutrientRdi } from "../../shared/types";
import { allAges as allAgesData } from "../../shared/data";

type NutritionFactTableProps = {
  food: FoundationOrSrFood;
  allAges?: Age[];
  nutrientRdis: NutrientRdi[];
};

type NutritionFactTableState = Omit<
  TableFiltersProps,
  "allNutrients" | "onDone"
> &
  Omit<NutritionFactTableProps, "nutrientRdis">;

export const NutritionFactTable = ({
  food,
  allAges = allAgesData,
  nutrientRdis,
}: NutritionFactTableProps) => {
  const [state, setState] = useState<NutritionFactTableState>({
    food,
    allAges,
    selectedGender: "Females",
    // todo: change, make it configurable
    selectedAge: allAges.filter(age => age.start === 31)[0],
    // no nutrients selected by user initially, show all nutrients
    selectedNutrients: [],
  });

  const [rows, setRows] = useState<FactTableRow[]>([]);

  const onDone = (selection: UserSelectionProps) => {
    setState(prevState => ({
      ...prevState,
      selectedGender: selection.selectedGender,
      selectedAge: selection.selectedAge,
      selectedNutrients: selection.selectedNutrients,
    }));
  };

  useEffect(() => {
    const gender = state.selectedGender;
    const age = state.selectedAge;

    const nutrients =
      state.selectedNutrients.length < 1
        ? food.nutrients
        : state.selectedNutrients;

    // todo: move this logic in ts file so that we can write tests
    const nutrientsWithRdis = nutrients.map((nutrient, index) => {
      const nutrientWithRdi = nutrientRdis.filter(
        nutrientRdi =>
          nutrientRdi.nutrient.name === nutrient.name &&
          nutrientRdi.nutrient.unit === nutrient.unit &&
          age.start === nutrientRdi?.rdi?.ageStart &&
          age.end === nutrientRdi?.rdi?.ageEnd &&
          age.ageUnit === nutrientRdi?.rdi.ageUnit &&
          gender.toLowerCase() === nutrientRdi?.rdi.applicableFor
      )[0];

      const getPercentDaily = () => {
        /* a nutrient may not have an associated RDI */
        if (!nutrientWithRdi || !nutrientWithRdi.rdi) return undefined;
        return nutrientWithRdi.percentDaily;
      };

      const factTableRow: FactTableRow = {
        id: index,
        nutrient: nutrient.name,
        amount: nutrient.amount,
        amountUnit: nutrient.unit.toLowerCase(),
        dailyValue: getPercentDaily(),
        rdiAmount: nutrientWithRdi?.rdi?.amount,
        rdiUnit: nutrientWithRdi?.rdi?.nutrientUnit,
      };
      return factTableRow;
    });
    setRows(nutrientsWithRdis);
  }, [state.selectedAge, state.selectedGender, state.selectedNutrients]);

  if (
    !(state.food && state.allAges && state.selectedAge && state.selectedGender)
  )
    return null;

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
  );
};
