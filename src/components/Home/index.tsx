import React from "react";
import { Box, HStack, VStack, Flex, Text } from "@chakra-ui/react";
import { ReactComponent as Logo } from "../../images/svg/strawberry.svg";
import Search from "../Search";
import { Link } from "gatsby";

export const Home = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Flex justify={"center"}>
        <HomeBanner />
      </Flex>
      <Box py={5}>
        <Search />
      </Box>
      <Flex justify={"center"}>
        <Text fontSize={"sm"}>
          Try:
          <FoodItemsToTry
            text={"Sesame Butter"}
            url={"/seeds-sesame-butter-paste"}
          />
          ,
          <FoodItemsToTry
            text={"Kidney Beans"}
            url={"/beans-dry-dark-red-kidney-0-moisture"}
          />
          ,
          <FoodItemsToTry text={"Cumin"} url={"/spices-cumin-seed"} />,
          <FoodItemsToTry text={"Thyme"} url={"/spices-thyme-dried"} />,
          <FoodItemsToTry text={"Chia Seeds"} url={"/seeds-chia-seeds-dried"} />
        </Text>
      </Flex>
    </VStack>
  );
};

const FoodItemsToTry = ({ text, url }: { text: string; url: string }) => {
  return (
    <Box as={"span"} pl={2}>
      <Link to={url} style={{ textDecoration: "underline" }}>
        {text}
      </Link>
    </Box>
  );
};
const HomeBanner = () => {
  return (
    <HStack spacing="16px">
      <Logo height={50} width={50} />
      <Text fontSize="4xl" fontWeight={"extrabold"}>
        forkfacts
      </Text>
    </HStack>
  );
};
