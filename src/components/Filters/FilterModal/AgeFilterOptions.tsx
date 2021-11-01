import { Box, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const AgeFilterOptions = () => {
  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold">
        Age
      </Text>
      <RadioGroup defaultValue="1" mt={6}>
        <Stack spacing={3}>
          <Radio value="1">0 - 6 month</Radio>
          <Radio value="2">7 - 12 month</Radio>
          <Radio value="3">1 - 3 year</Radio>
          <Radio value="4">4 - 8 year</Radio>
          <Radio value="5">9 - 13 year</Radio>
          <Radio value="6">14 - 18 year</Radio>
          <Radio value="7">19 - 30 year</Radio>
          <Radio value="8">31 - 50 year</Radio>
          <Radio value="9">51 - 70 year</Radio>
          <Radio value="10">over 70 year</Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
};
