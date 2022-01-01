import React from "react";
import {
  Box,
  HStack,
  StackDivider,
  VStack,
  Flex,
  Text,
} from "@chakra-ui/react";
import { ReactComponent as Logo } from "../../images/svg/strawberry.svg";

export const Home = () => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray" />}
      spacing={4}
      align="stretch"
    >
      <Flex bg="yellow" justify={"center"}>
        <HomeBanner />
      </Flex>
      <Box bg="tomato">2</Box>
      <Box bg="pink">3</Box>
    </VStack>
  );
};

const HomeBanner = () => {
  return (
    <HStack spacing="16px">
      <Logo height={50} width={50} />
      <Text fontSize="6xl">(6xl) In love with React & Next</Text>
    </HStack>
  );
};
