import React, { RefObject, useEffect, useState } from "react"
import { Flex } from "@chakra-ui/react"
import { TotalFilter } from "../TotalFilter"
import { GenderFilter } from "../GenderFilter"
import { AgeFilter } from "../AgeFilter"
import { NutrientFilter } from "../NutrientFilter"
import { FocusableElement } from "@chakra-ui/utils"
import { FilterModal } from "../FilterModal"
import { Age, Gender, Nutrient } from "../../../shared/types"

export interface TableFiltersProps {
  allNutrients: Nutrient[]
  allAges: Age[]
  selectedNutrients: Nutrient[]
  selectedGender: Gender
  selectedAge: Age
  onDone: (changes: UserSelectionProps) => void
}

export type UserSelectionProps = Pick<
  TableFiltersProps,
  "selectedNutrients" | "selectedAge" | "selectedGender"
>

export const TableFilters = ({
  allAges,
  allNutrients,
  selectedNutrients,
  selectedGender,
  selectedAge,
  onDone,
}: TableFiltersProps) => {
  const totalFiltersRef = React.useRef<HTMLDivElement>(null)
  const genderRef = React.useRef<HTMLDivElement>(null)
  const ageRef = React.useRef<HTMLDivElement>(null)
  const nutrientsRef = React.useRef<HTMLInputElement>(null)
  const [focusRef, setFocusRef] = useState<
    RefObject<HTMLDivElement | FocusableElement> | undefined
  >(undefined)

  const [totalFiltersApplied, setTotalFiltersApplied] = useState<number>(3)
  const handleClick = (ref: RefObject<HTMLDivElement>) => setFocusRef(ref)
  const handleDone = (userSelectedChanges: UserSelectionProps) => {
    setFocusRef(undefined)
    onDone(userSelectedChanges)
  }

  useEffect(() => {
    /**
     * 3 because Age, Gender, and Serving filters will always be applied
     * A user may change them, but they will still apply. Only Nutrients
     * are something (as far as we know) that a user may or may not want to apply
     */
    const totalFiltersApplied = 3 + (selectedNutrients.length > 1 ? 1 : 0)
    setTotalFiltersApplied(totalFiltersApplied)
  }, [selectedNutrients])

  return (
    <>
      <Flex gridGap={4} bg={"white"} py={4} px={4} grow={1}>
        <TotalFilter
          applied={totalFiltersApplied}
          onClick={() => handleClick(totalFiltersRef)}
        />
        <NutrientFilter
          selectedNutrients={selectedNutrients.map(n => n.name)}
          onClick={() => handleClick(nutrientsRef)}
        />
        <GenderFilter
          selectedGender={selectedGender}
          onClick={() => handleClick(genderRef)}
        />
        <AgeFilter
          startAge={selectedAge.start}
          endAge={selectedAge.end}
          ageUnit={"year"}
          onClick={() => handleClick(ageRef)}
        />
      </Flex>
      <FilterModal
        allAges={allAges}
        selectedAge={selectedAge}
        allNutrients={allNutrients}
        selectedNutrients={selectedNutrients}
        selectedGender={selectedGender}
        isOpen={focusRef !== undefined}
        onClose={() => setFocusRef(undefined)}
        onDone={handleDone}
        totalFiltersRef={totalFiltersRef}
        genderRef={genderRef}
        ageRef={ageRef}
        nutrientRef={nutrientsRef}
        focusRef={focusRef}
      />
    </>
  )
}
