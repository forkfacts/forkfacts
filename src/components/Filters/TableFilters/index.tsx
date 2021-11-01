import React, { RefObject, useState } from "react"
import { Flex } from "@chakra-ui/react"
import { TotalFilter } from "../TotalFilter"
import { GenderFilter } from "../GenderFilter"
import { AgeFilter } from "../AgeFilter"
import { NutrientFilter } from "../NutrientFilter"
import { FocusableElement } from "@chakra-ui/utils"
import { FilterModal } from "../FilterModal"

interface TableFiltersProps {
  allNutrients: string[]
  selectedNutrients: string[]
  selectedGender: "Female" | "Male"
  selectedAge: { start: number; end?: number }
  onDone: (changes: UserSelectionProps) => void
}

export type UserSelectionProps = Pick<
  TableFiltersProps,
  "selectedNutrients" | "selectedAge" | "selectedGender"
>

export const TableFilters = ({
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

  const handleClick = (ref: RefObject<HTMLDivElement>) => setFocusRef(ref)
  const handleDone = (userSelectedChanges: UserSelectionProps) => {
    setFocusRef(undefined)
    onDone(userSelectedChanges)
  }

  return (
    <>
      <Flex gridGap={4} bg={"white"} py={4} px={4} grow={1}>
        <TotalFilter applied={4} onClick={() => handleClick(totalFiltersRef)} />
        <NutrientFilter
          selectedNutrients={selectedNutrients}
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
        allNutrients={allNutrients}
        selectedNutrients={selectedNutrients}
        selectedAge={selectedAge}
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
