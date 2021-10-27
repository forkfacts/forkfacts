import React from "react"
import { TriangleDownIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/react"

interface NutrientFilterProps {
  selectedNutrients: string[]
  onClick: () => void
}

export const NutrientFilter = ({
  selectedNutrients,
  onClick,
}: NutrientFilterProps) => {
  const getDisplayText = (items?: string[]) => {
    if (!items || items.length == 0) return "All Nutrients"
    if (items.length === 1) return items[0]
    return `${items[0]} + ${items.length - 1}`
  }

  return (
    <Button
      rightIcon={<TriangleDownIcon />}
      variant="outline"
      onClick={onClick}
      size={"sm"}
      colorScheme="black"
      bg={selectedNutrients.length > 0 ? "gray.200" : "white"}
    >
      {getDisplayText(selectedNutrients)}
    </Button>
  )
}
