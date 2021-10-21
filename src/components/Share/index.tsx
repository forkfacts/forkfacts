import React from "react"
import { Box, Text } from "@chakra-ui/react"
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share"
import { SOCIAL_USERNAME } from "./shareConstants"

interface ShareProps {
  headline: string
  url: string
  title: string
  twitterHashTags: string[]
  facebookHashTag: string
  emailBody: string
}

export const Share = ({
  headline,
  url,
  title,
  twitterHashTags,
  facebookHashTag,
  emailBody,
}: ShareProps) => {
  return (
    <Box borderRadius={4} border={"1px solid black"}>
      <Text fontSize={"sm"}>{headline}</Text>
      <Box>
        <TwitterShareButton
          title={title}
          hashtags={twitterHashTags}
          onClick={() => {}} // todo: track sharing?
          via={SOCIAL_USERNAME}
          url={url}
          children={
            <TwitterIcon size={32} round={true} bgStyle={{ fill: "black" }} />
          }
        />
        <FacebookShareButton
          quote={title}
          hashtag={`#${facebookHashTag}`}
          url={url}
          children={
            <FacebookIcon size={32} round={true} bgStyle={{ fill: "black" }} />
          }
        />
        <WhatsappShareButton
          title={title}
          url={url}
          children={
            <WhatsappIcon size={32} round={true} bgStyle={{ fill: "black" }} />
          }
        />
        <EmailShareButton
          subject={title}
          body={emailBody}
          url={url}
          children={
            <EmailIcon size={32} round={true} bgStyle={{ fill: "black" }} />
          }
        />
      </Box>
    </Box>
  )
}
