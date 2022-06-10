import React from "react";
import {
  Box,
  HStack,
  VStack,
  Flex,
  Text,
  Button,
  Image,
  Divider,
} from "@chakra-ui/react";
import { ReactComponent as Logo } from "../../images/svg/logo.svg";
import Vercel from "../../images/svg/vercel.svg";
import Algolia from "../../images/svg/algolia.svg";
import DigitalOcean from "../../images/svg/digital-ocean.svg";
import ClickUp from "../../images/svg/clickup.svg";
import BackgroundImg from "../../images/svg/background.svg";
import Search from "../Search";
import { Link } from "gatsby";
import {
  MISSION_SUB_TEXT,
  MISSION_TEXT,
  SUPPORTED_BY,
  TRY_BUTTON_LABEL_1,
  TRY_BUTTON_LABEL_2,
} from "../Share/shareConstants";
import { navigate } from "gatsby";

export const DesktopHome = () => {
  return (
    <VStack spacing={10}>
      <HStack w="70vw" spacing={8}>
        <Box>
          <HomeBanner />
        </Box>
        <Box w="70vw" pt={7}>
          <Search />
          <Flex pt={4}>
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
              <FoodItemsToTry
                text={"Chia Seeds"}
                url={"/seeds-chia-seeds-dried"}
              />
            </Text>
          </Flex>
        </Box>
      </HStack>
      <Mission
        boldText={MISSION_TEXT}
        smallText={MISSION_SUB_TEXT}
        buttonLabel1={TRY_BUTTON_LABEL_1}
        buttonLabel2={TRY_BUTTON_LABEL_2}
      />
      <Divider />
      <Sponsors />
      <Divider />
      <Footer />
      <Divider />
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
    <HStack>
      <Logo height={40} width={40} />
      <Text fontSize="2xl" fontWeight={"extrabold"}>
        forkfacts
      </Text>
    </HStack>
  );
};

export const Mission = ({
  boldText,
  smallText,
  buttonLabel1,
  buttonLabel2,
}: {
  boldText: string;
  smallText: string;
  buttonLabel1: string;
  buttonLabel2: string;
}) => {
  return (
    <VStack
      backgroundImage={BackgroundImg}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"100% 100%"}
      spacing={12}
      p={10}
    >
      <Text
        fontSize="5xl"
        fontWeight={"extrabold"}
        align={"center"}
        maxW={["80%", "70%", "60%"]}
      >
        {boldText}
      </Text>
      <Text
        fontSize="xl"
        fontWeight={"medium"}
        color={"#4A5568"}
        textAlign={"center"}
        maxW={["80%", "70%", "60%"]}
      >
        {smallText}
      </Text>
      <HStack spacing={8} pt={10}>
        <Button
          backgroundColor={"black"}
          colorScheme={"blackAlpha"}
          onClick={() => navigate("/broccoli-raw")}
        >
          {buttonLabel1}
        </Button>
        <Button
          backgroundColor={"black"}
          colorScheme={"blackAlpha"}
          onClick={() => navigate("/seeds-hemp-seed-hulled")}
        >
          {buttonLabel2}
        </Button>
      </HStack>
    </VStack>
  );
};

export const Sponsors = () => {
  return (
    <VStack spacing={6} p={10}>
      <Text fontSize="xl" fontWeight={"bold"} align={"center"}>
        {SUPPORTED_BY}
      </Text>
      <HStack spacing={20}>
        <Image boxSize="150px" src={Vercel} alt="Vercel" />
        <Image boxSize="150px" src={Algolia} alt="Algolia" />
        <Image boxSize="150px" src={DigitalOcean} alt="Digital Ocean" />
        <Image boxSize="150px" src={ClickUp} alt="ClickUp" />
      </HStack>
    </VStack>
  );
};

export const Footer = () => {
  return (
    <HStack spacing={10} style={{ border: "0px solid red" }}>
      <Text fontSize="l" fontWeight={"bold"} align={"left"}>
        {"forkfacts"}
      </Text>
      <Text fontSize="xs" pl={10} align={"right"} color="#718096">
        {
          "You are not tracked or identified via tracker or cookies on this site. 🫶"
        }
      </Text>
    </HStack>
  );
};
