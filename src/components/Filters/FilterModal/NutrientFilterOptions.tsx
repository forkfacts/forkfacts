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
import React from "react"
import { CgSearch } from "react-icons/cg"

interface NutrientFilterOptionsProps {
  allNutrients: string[]
  selectedNutrients: string[]
  focusRef: React.MutableRefObject<HTMLInputElement | undefined>
}

export const NutrientFilterOptions = ({
  allNutrients,
  selectedNutrients,
  focusRef,
}: NutrientFilterOptionsProps) => {
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
          <Input type="text" placeholder="Search Nutrients" ref={focusRef} />
        </InputGroup>
      </Box>
      <Box mt={6}>
        <CheckboxGroup defaultValue={selectedNutrients}>
          <Stack>
            {allNutrients.map(nutrient => (
              <Checkbox value={nutrient}>{nutrient}</Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </Box>
    </Box>
  )
}
