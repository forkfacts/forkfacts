import { Box, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const GenderFilterOptions = () => {
  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold">
        Gender
      </Text>
      <RadioGroup defaultValue="1" mt={6}>
        <Stack spacing={3}>
          <Radio value="1">Female</Radio>
          <Radio value="2">Male</Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
};
