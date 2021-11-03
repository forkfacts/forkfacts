import React from "react"
import { TriangleDownIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/react"

interface AgeFilterProps {
  startAge: number
  endAge?: number
  ageUnit: "month" | "year"
  onClick: () => void
}

export const AgeFilter = ({
  startAge,
  endAge,
  ageUnit,
  onClick,
}: AgeFilterProps) => {
  const displayText = endAge
    ? `${startAge} - ${endAge} ${ageUnit}`
    : `${startAge} ${ageUnit} and above`
  return (
    <Button
      rightIcon={<TriangleDownIcon />}
      variant="outline"
      onClick={onClick}
      size={"sm"}
      colorScheme="black"
      bg={"gray.200"}
    >
      {displayText}
    </Button>
  )
}
