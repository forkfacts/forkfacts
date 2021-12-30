import React from "react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

interface ServingFilterProps {
  amount: number;
  // todo: this could be types further based on different values in database
  unit: string;
  onClick: () => void;
}

export const ServingFilter = ({
  amount,
  unit,
  onClick,
}: ServingFilterProps) => {
  return (
    <Button
      rightIcon={<TriangleDownIcon />}
      variant="outline"
      onClick={onClick}
      size={"sm"}
      colorScheme="black"
      bg={"gray.200"}
    >
      {amount} {unit}
    </Button>
  );
};
