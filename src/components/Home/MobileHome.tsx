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

export const MobileHome = () => {
  return (
    <VStack>
      <HStack w={"100%"} justify={"space-evenly"} pt={6}>
        <MobileHomeBanner />
        <Box w={"75%"}>
          <Search />
        </Box>
      </HStack>
      <Mission
        boldText={MISSION_TEXT}
        smallText={MISSION_SUB_TEXT}
        buttonLabel1={TRY_BUTTON_LABEL_1}
        buttonLabel2={TRY_BUTTON_LABEL_2}
      />
      <Divider />
      {/*<Sponsors />*/}
      <Divider />
      <MobileFooter />
    </VStack>
  );
};

const MobileHomeBanner = () => {
  return <Logo height={40} width={40} />;
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
      <Text fontSize="3xl" fontWeight={"extrabold"} align={"center"}>
        {boldText}
      </Text>
      <Text
        fontSize="md"
        fontWeight={"medium"}
        color={"#4A5568"}
        align={"center"}
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

export const MobileFooter = () => {
  return (
    <VStack px={3}>
      <Text fontSize="l" fontWeight={"bold"} align={"center"}>
        {"forkfacts"}
      </Text>
      <Text fontSize="xs" align={"right"} color="#718096" textAlign={"center"}>
        You are not tracked or identified via tracker or cookies on this site. 🫶
      </Text>
    </VStack>
  );
};
