import React from "react"
import { TriangleDownIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/react"

interface TotalFilterProps {
  applied: number
  onClick: () => void
}

export const TotalFilter = ({ applied, onClick }: TotalFilterProps) => {
  return (
    <Button
      leftIcon={<TriangleDownIcon />}
      variant="outline"
      onClick={onClick}
      size={"sm"}
      colorScheme="black"
      bg={"gray.200"}
    >
      {applied}
    </Button>
  )
}
