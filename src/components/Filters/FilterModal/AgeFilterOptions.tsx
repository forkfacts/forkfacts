import { Box, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react"
import React from "react"
import { AgeProps } from "../TableFilters"

interface AgeFilterOptionsProps {
  allAges: AgeProps[]
  selectedAge: AgeProps
  onChange: (age: AgeProps) => void
}

export const AgeFilterOptions = ({
  allAges,
  selectedAge,
  onChange,
}: AgeFilterOptionsProps) => {
  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold">
        Age
      </Text>
      <RadioGroup
        onChange={selectedIndex => {
          const selectedAge = allAges.filter(
            age => age.index === parseInt(selectedIndex)
          )[0]
          onChange(selectedAge)
        }}
        value={selectedAge.index}
        mt={6}
      >
        <Stack spacing={3}>
          {allAges.map(age => (
            <Radio key={age.index} value={age.index}>
              {age.start} - {age.end} {age.ageUnit}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </Box>
  )
}
