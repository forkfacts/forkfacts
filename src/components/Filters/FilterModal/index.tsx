import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react"
import React, { ReactText, useState } from "react"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { GenderFilterOptions } from "./GenderFilterOptions"
import { AgeFilterOptions } from "./AgeFilterOptions"
import { NutrientFilterOptions } from "./NutrientFilterOptions"
import { FocusableElement } from "@chakra-ui/utils"
import { AgeProps, UserSelectionProps } from "../TableFilters"

interface FilterModalProps {
  allAges: AgeProps[]
  allNutrients: string[]
  selectedNutrients: string[]
  selectedGender: "Female" | "Male"
  selectedAge: AgeProps
  isOpen: boolean
  onClose: () => void
  onDone: (changes: UserSelectionProps) => void
  totalFiltersRef: React.RefObject<HTMLDivElement>
  genderRef: React.RefObject<HTMLDivElement>
  ageRef: React.RefObject<HTMLDivElement>
  nutrientRef: React.RefObject<HTMLInputElement>
  focusRef:
    | React.RefObject<HTMLDivElement | HTMLInputElement | FocusableElement>
    | undefined
}

export const FilterModal = ({
  allAges,
  allNutrients,
  selectedNutrients,
  selectedGender,
  selectedAge,
  isOpen,
  onClose,
  onDone,
  totalFiltersRef,
  genderRef,
  ageRef,
  nutrientRef,
  focusRef,
}: FilterModalProps) => {
  const [userSelected, setUserSelected] = useState<UserSelectionProps>({
    selectedAge,
    selectedGender,
    selectedNutrients,
  })
  const onNutrientsChange = (values: ReactText[]) => {
    setUserSelected(prevState => ({
      ...prevState,
      selectedNutrients: values as string[],
    }))
  }
  const onGenderChange = (selectedGender: "Female" | "Male") => {
    setUserSelected(prevState => ({
      ...prevState,
      selectedGender,
    }))
  }
  const onAgeChange = (age: AgeProps) => {
    setUserSelected(prevState => ({
      ...prevState,
      selectedAge: age,
    }))
  }

  return (
    <Box ref={totalFiltersRef}>
      <Modal
        onClose={onClose}
        size={"full"}
        isOpen={isOpen}
        returnFocusOnClose={true}
        initialFocusRef={focusRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex alignItems="center">
              <IconButton
                bg={"white"}
                size={"lg"}
                fontSize="24px"
                aria-label="Table Filters"
                icon={<ArrowBackIcon />}
                onClick={onClose}
              />
              <Flex width="100%" justify="center">
                <Text>Filters</Text>
              </Flex>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <NutrientFilterOptions
              allNutrients={allNutrients}
              selectedNutrients={userSelected.selectedNutrients}
              onChange={onNutrientsChange}
              focusRef={nutrientRef}
            />
            <Divider my={4} />
            <Box ref={ageRef} tabIndex={-1}>
              <AgeFilterOptions
                allAges={allAges}
                selectedAge={userSelected.selectedAge}
                onChange={onAgeChange}
              />
            </Box>
            <Divider my={4} />
            <Box ref={genderRef} tabIndex={-1}>
              <GenderFilterOptions
                selectedGender={userSelected.selectedGender}
                onChange={onGenderChange}
              />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              bg="black"
              color="white"
              variant="solid"
              onClick={() => onDone(userSelected)}
            >
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
