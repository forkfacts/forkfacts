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
    Text
} from "@chakra-ui/react";
import React from "react";
import {ArrowBackIcon} from "@chakra-ui/icons";
import {GenderFilterOptions} from "./GenderFilterOptions";
import {AgeFilterOptions} from "./AgeFilterOptions";
import {NutrientFilterOptions} from "./NutrientFilterOptions";
import {FocusableElement} from "@chakra-ui/utils"

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
    totalFiltersRef: React.RefObject<HTMLDivElement>;
    genderRef: React.RefObject<HTMLDivElement>;
    ageRef: React.RefObject<HTMLDivElement>;
    nutrientRef: React.RefObject<HTMLDivElement>;
    focusRef: React.RefObject<HTMLDivElement | FocusableElement> | undefined;
}

export const FilterModal = (props: FilterModalProps) => {
    return (
        <Modal
            onClose={props.onClose}
            size={"full"}
            isOpen={props.isOpen}
            scrollBehavior={"inside"}
            returnFocusOnClose={true}
            initialFocusRef={props.focusRef}
        >
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>
                    <Flex alignItems="center">
                        <IconButton
                            bg={"white"}
                            size={"lg"}
                            fontSize="24px"
                            aria-label="Table Filters"
                            icon={<ArrowBackIcon/>}
                            onClick={props.onClose}
                        />
                        <Flex width="100%" justify="center">
                            <Text>Filters</Text>
                        </Flex>
                    </Flex>
                </ModalHeader>
                <ModalBody>
                    <Box>
                        <Box ref={props.nutrientRef} tabIndex={-1}>
                            <NutrientFilterOptions/>
                        </Box>
                        <Divider my={4}/>
                        <Box ref={props.ageRef} tabIndex={-1}>
                            <AgeFilterOptions/>
                        </Box>
                        <Divider my={4}/>
                        <Box ref={props.genderRef} tabIndex={-1}>
                            <GenderFilterOptions/>
                        </Box>
                    </Box>
                </ModalBody>
                <ModalFooter>
                    <Button bg="black" color="white" variant="solid" onClick={props.onClose}>
                        Done
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}


/*export const FilterModal = forwardRef((props: FilterModalProps, ref: ForwardedRef<HTMLDivElement | FocusableElement>) => {
    return (
        <Modal
            onClose={props.onClose}
            size={"full"}
            isOpen={props.isOpen}
            scrollBehavior={"inside"}
            returnFocusOnClose={true}
            initialFocusRef={ref}
        >
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>
                    <Flex alignItems="center">
                        <IconButton
                            bg={"white"}
                            size={"lg"}
                            fontSize="24px"
                            aria-label="Table Filters"
                            icon={<ArrowBackIcon/>}
                            onClick={props.onClose}
                        />
                        <Flex width="100%" justify="center">
                            <Text>Filters</Text>
                        </Flex>
                    </Flex>
                </ModalHeader>
                <ModalBody>
                    <Box>
                        <Box ref={props.genderRef} tabIndex={-1}>
                            <GenderFilterOptions/>
                        </Box>
                        <Divider my={4}/>
                        <Box ref={props.ageRef} tabIndex={-1}>
                            <AgeFilterOptions/>
                        </Box>
                        <Divider my={4}/>
                        <Box ref={props.nutrientRef} tabIndex={-1}>
                            <NutrientFilterOptions/>
                        </Box>
                    </Box>
                </ModalBody>
                <ModalFooter>
                    <Button bg="black" color="white" variant="solid" onClick={props.onClose}>
                        Done
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
})*/