import React from "react"
import { Flex } from "@chakra-ui/react"
import { TotalFilter } from "../TotalFilter"
import { GenderFilter } from "../GenderFilter"
import { AgeFilter } from "../AgeFilter"
import { NutrientFilter } from "../NutrientFilter"

/*interface TableFiltersProps {
  selectedNutrients: string[]
}*/
export const TableFilters = () => {
  return (
    <Flex gridGap={4} bg={"white"} py={4} px={4} grow={1}>
      <TotalFilter applied={4} onClick={() => {}} />
      <GenderFilter onClick={() => {}} />
      <AgeFilter
        startAge={31}
        endAge={50}
        ageUnit={"year"}
        onClick={() => {}}
      />
      <NutrientFilter selectedNutrients={[]} onClick={() => {}} />
    </Flex>
  )
}
