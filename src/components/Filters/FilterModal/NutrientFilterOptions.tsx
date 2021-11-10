import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react"
import React, { ReactText, useState } from "react"
import { CgSearch } from "react-icons/cg"
import { Nutrient } from "../../../shared/types"

interface NutrientFilterOptionsProps {
  allNutrients: Nutrient[]
  selectedNutrients: Nutrient[]
  onChange: (selectedNutrients: ReactText[]) => void
  focusRef: React.MutableRefObject<HTMLInputElement | undefined>
}

export const NutrientFilterOptions = ({
  allNutrients,
  selectedNutrients,
  onChange,
  focusRef,
}: NutrientFilterOptionsProps) => {
  const [searchResults, setSearchResults] = useState<Nutrient[]>(allNutrients)
  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const filtered = allNutrients.filter(nutrient =>
      nutrient.name.includes(e.currentTarget.value)
    )
    setSearchResults(filtered)
  }
  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold">
        Nutrients
      </Text>
      <Box mt={6}>
        <Flex direction={"column"} width={"inherit"}>
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
          <Text fontSize={"xs"} color="gray.500" mt={2}>
            {searchResults.length} Nutrients
          </Text>
        </Flex>
      </Box>
      <Box mt={6}>
        <CheckboxGroup
          defaultValue={selectedNutrients.map(n => n.name)}
          onChange={onChange}
        >
          <Stack>
            {searchResults.map((nutrient, index) => (
              <Checkbox key={index} value={nutrient.name}>
                {nutrient.name}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </Box>
    </Box>
  )
}
