import {Box, Checkbox, CheckboxGroup, Icon, Input, InputGroup, InputLeftElement, Stack, Text} from "@chakra-ui/react";
import React from "react";
import {CgSearch} from "react-icons/cg";

interface NutrientFilterOptionsProps {
    ref: React.MutableRefObject<HTMLDivElement | undefined>;
}

export const NutrientFilterOptions = () => {
    return (
        <Box>
            <Text fontSize="lg" fontWeight="bold">
                Nutrients
            </Text>
            <Box mt={6}>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Icon as={CgSearch} color="gray.500"/>}
                    />
                    <Input type="text" placeholder="Search Nutrients"/>
                </InputGroup>
            </Box>
            <Box mt={6}>
                <CheckboxGroup defaultValue={["Calcium"]}>
                    <Stack>
                        <Checkbox value="Choline">Choline</Checkbox>
                        <Checkbox value="Magnesium">Magnesium</Checkbox>
                        <Checkbox value="Calcium">Calcium</Checkbox>
                        <Checkbox value="Protein">Protein</Checkbox>
                        <Checkbox value="Iron">Iron</Checkbox>
                        <Checkbox value="Copper">Copper</Checkbox>
                        <Checkbox value="Riboflavin">Riboflavin</Checkbox>
                        <Checkbox value="Vitamin D">Vitamin D</Checkbox>
                        <Checkbox value="SFA 15:0">SFA 15:0</Checkbox>
                        <Checkbox value="Cholesterol">Cholesterol</Checkbox>
                        <Checkbox value="Vitamin A">Vitamin A</Checkbox>
                        <Checkbox value="Vitamin B-12">Vitamin B-12</Checkbox>

                        <Checkbox value="Choline">Choline</Checkbox>
                        <Checkbox value="Magnesium">Magnesium</Checkbox>
                        <Checkbox value="Calcium">Calcium</Checkbox>
                        <Checkbox value="Protein">Protein</Checkbox>
                        <Checkbox value="Iron">Iron</Checkbox>
                        <Checkbox value="Copper">Copper</Checkbox>
                        <Checkbox value="Riboflavin">Riboflavin</Checkbox>
                        <Checkbox value="Vitamin D">Vitamin D</Checkbox>
                        <Checkbox value="SFA 15:0">SFA 15:0</Checkbox>
                        <Checkbox value="Cholesterol">Cholesterol</Checkbox>
                        <Checkbox value="Vitamin A">Vitamin A</Checkbox>
                        <Checkbox value="Vitamin B-12">Vitamin B-12</Checkbox>

                        <Checkbox value="Choline">Choline</Checkbox>
                        <Checkbox value="Magnesium">Magnesium</Checkbox>
                        <Checkbox value="Calcium">Calcium</Checkbox>
                        <Checkbox value="Protein">Protein</Checkbox>
                        <Checkbox value="Iron">Iron</Checkbox>
                        <Checkbox value="Copper">Copper</Checkbox>
                        <Checkbox value="Riboflavin">Riboflavin</Checkbox>
                        <Checkbox value="Vitamin D">Vitamin D</Checkbox>
                        <Checkbox value="SFA 15:0">SFA 15:0</Checkbox>
                        <Checkbox value="Cholesterol">Cholesterol</Checkbox>
                        <Checkbox value="Vitamin A">Vitamin A</Checkbox>
                        <Checkbox value="Vitamin B-12">Vitamin B-12</Checkbox>

                        <Checkbox value="Choline">Choline</Checkbox>
                        <Checkbox value="Magnesium">Magnesium</Checkbox>
                        <Checkbox value="Calcium">Calcium</Checkbox>
                        <Checkbox value="Protein">Protein</Checkbox>
                        <Checkbox value="Iron">Iron</Checkbox>
                        <Checkbox value="Copper">Copper</Checkbox>
                        <Checkbox value="Riboflavin">Riboflavin</Checkbox>
                        <Checkbox value="Vitamin D">Vitamin D</Checkbox>
                        <Checkbox value="SFA 15:0">SFA 15:0</Checkbox>
                        <Checkbox value="Cholesterol">Cholesterol</Checkbox>
                        <Checkbox value="Vitamin A">Vitamin A</Checkbox>
                        <Checkbox value="Vitamin B-12">Vitamin B-12</Checkbox>

                        <Checkbox value="Choline">Choline</Checkbox>
                        <Checkbox value="Magnesium">Magnesium</Checkbox>
                        <Checkbox value="Calcium">Calcium</Checkbox>
                        <Checkbox value="Protein">Protein</Checkbox>
                        <Checkbox value="Iron">Iron</Checkbox>
                        <Checkbox value="Copper">Copper</Checkbox>
                        <Checkbox value="Riboflavin">Riboflavin</Checkbox>
                        <Checkbox value="Vitamin D">Vitamin D</Checkbox>
                        <Checkbox value="SFA 15:0">SFA 15:0</Checkbox>
                        <Checkbox value="Cholesterol">Cholesterol</Checkbox>
                        <Checkbox value="Vitamin A">Vitamin A</Checkbox>
                        <Checkbox value="Vitamin B-12">Vitamin B-12</Checkbox>
                    </Stack>
                </CheckboxGroup>
            </Box>
        </Box>
    );
};
