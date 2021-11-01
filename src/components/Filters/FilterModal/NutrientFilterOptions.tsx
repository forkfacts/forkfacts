import {
  Box,
  Checkbox,
  CheckboxGroup,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react"
import React, { ReactText, useState } from "react"
import { CgSearch } from "react-icons/cg"

interface NutrientFilterOptionsProps {
  allNutrients: string[]
  selectedNutrients: string[]
  onChange: (selectedNutrients: ReactText[]) => void
  focusRef: React.MutableRefObject<HTMLInputElement | undefined>
}

export const NutrientFilterOptions = ({
  allNutrients,
  selectedNutrients,
  onChange,
  focusRef,
}: NutrientFilterOptionsProps) => {
  const [searchResults, setSearchResults] = useState<string[]>(allNutrients)
  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const filtered = allNutrients.filter(nutrient =>
      nutrient.includes(e.currentTarget.value)
    )
    setSearchResults(filtered)
  }
  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold">
        Nutrients
      </Text>
      <Box mt={6}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={CgSearch} color="gray.500" />}
          />
          <Input
            type="text"
            placeholder="Search Nutrients"
            ref={focusRef}
            onChange={onInputChange}
          />
        </InputGroup>
      </Box>
      <Box mt={6}>
        <CheckboxGroup defaultValue={selectedNutrients} onChange={onChange}>
          <Stack>
            {searchResults.map(nutrient => (
              <Checkbox value={nutrient}>{nutrient}</Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </Box>
    </Box>
  )
}
