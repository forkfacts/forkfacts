import React from "react"
import { TriangleDownIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/react"
import { Gender } from "../../../shared/types"

interface GenderFilterProps {
  selectedGender?: Gender
  onClick: () => void
}

export const GenderFilter = ({
  selectedGender = "Female",
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
      {selectedGender}
    </Button>
  )
}
