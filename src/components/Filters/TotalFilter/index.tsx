import React from "react";
import { Button, Icon, Text } from "@chakra-ui/react";
import { RiEqualizerFill } from "react-icons/ri";

interface TotalFilterProps {
  applied: number;
  onClick: () => void;
}

export const TotalFilter = ({ applied, onClick }: TotalFilterProps) => {
  return (
    <Button
      leftIcon={<Icon as={RiEqualizerFill} />}
      variant="outline"
      onClick={onClick}
      size={"sm"}
      colorScheme="black"
      bg={"gray.200"}
    >
      <Text noOfLines={1}>{applied}</Text>
    </Button>
  );
};
