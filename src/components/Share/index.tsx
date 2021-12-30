import React from "react";
import { Box, Flex, Text, useBreakpoint } from "@chakra-ui/react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { SOCIAL_USERNAME } from "./shareConstants";
import { ResponsiveBreakpoint } from "../utils";

interface ShareProps {
  headline: string;
  url: string;
  title: string;
  twitterHashTags: string[];
  facebookHashTag: string;
  emailBody: string;
}

const iconProps = { size: 32, round: true, fill: "black" };

export const Share = ({
  headline,
  url,
  title,
  twitterHashTags,
  facebookHashTag,
  emailBody,
}: ShareProps) => {
  const breakpoint = useBreakpoint() as ResponsiveBreakpoint;
  return (
    <Flex
      borderRadius={4}
      border={"1px solid black"}
      alignItems={"center"}
      justify={"space-around"}
      py={2}
      background={"gray.50"}
      flexDirection={
        breakpoint === "sm" || breakpoint === "base" ? "column" : "row"
      }
      gridGap={3}
    >
      <Text>{headline}</Text>
      <Flex justify={"space-around"} gridGap={6}>
        <TwitterShareButton
          title={title}
          hashtags={twitterHashTags}
          onClick={() => {}} // todo: track sharing?
          via={SOCIAL_USERNAME}
          url={url}
          children={
            <TwitterIcon
              size={iconProps.size}
              round={iconProps.round}
              bgStyle={{ fill: iconProps.fill }}
            />
          }
        />
        <FacebookShareButton
          quote={title}
          hashtag={`#${facebookHashTag}`}
          url={url}
          children={
            <FacebookIcon
              size={iconProps.size}
              round={iconProps.round}
              bgStyle={{ fill: iconProps.fill }}
            />
          }
        />
        <WhatsappShareButton
          title={title}
          url={url}
          children={
            <WhatsappIcon
              size={iconProps.size}
              round={iconProps.round}
              bgStyle={{ fill: iconProps.fill }}
            />
          }
        />
        <EmailShareButton
          subject={title}
          body={emailBody}
          url={url}
          children={
            <EmailIcon
              size={iconProps.size}
              round={iconProps.round}
              bgStyle={{ fill: iconProps.fill }}
            />
          }
        />
      </Flex>
    </Flex>
  );
};
