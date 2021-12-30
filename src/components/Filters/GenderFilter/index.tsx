import React from "react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";
import { Gender } from "../../../shared/types";

interface GenderFilterProps {
  selectedGender?: Gender;
  onClick: () => void;
}

export const GenderFilter = ({
  selectedGender = "Females",
  onClick,
}: GenderFilterProps) => {
  return (
    <Button
      rightIcon={<TriangleDownIcon />}
      variant="outline"
      onClick={onClick}
      size={"sm"}
      colorScheme="black"
      bg={"gray.200"}
    >
      <Text noOfLines={1}>{selectedGender}</Text>
    </Button>
  );
};
