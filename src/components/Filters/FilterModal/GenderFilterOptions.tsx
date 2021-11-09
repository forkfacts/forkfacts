import { Box, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react"
import React from "react"
import { Gender } from "../../../shared/types"

interface GenderFilterOptionsProps {
  selectedGender: Gender
  onChange: (selectGender: string) => void
}

export const GenderFilterOptions = ({
  selectedGender,
  onChange,
}: GenderFilterOptionsProps) => {
  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold">
        Gender
      </Text>
      <RadioGroup defaultValue={selectedGender} mt={6} onChange={onChange}>
        <Stack spacing={3}>
          <Radio value="Female">Female</Radio>
          <Radio value="Male">Male</Radio>
        </Stack>
      </RadioGroup>
    </Box>
  )
}
