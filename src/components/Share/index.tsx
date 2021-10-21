import React from "react"
import { Box, Text } from "@chakra-ui/react"
import { TwitterIcon, TwitterShareButton } from "react-share"
import { TWITTER_USERNAME } from "./shareConstants"

interface ShareProps {
  headline: string
  url: string
  title: string
  twitterHashTags: string[]
}

export const Share = ({
  headline,
  url,
  title,
  twitterHashTags,
}: ShareProps) => {
  return (
    <Box borderRadius={4} border={"1px solid black"}>
      <Text fontSize={"sm"}>{headline}</Text>
      <TwitterShareButton
        title={title}
        hashtags={twitterHashTags}
        onClick={() => {}} // todo: track sharing?
        via={TWITTER_USERNAME}
        children={
          <TwitterIcon size={32} round={true} bgStyle={{ fill: "black" }} />
        }
        url={url}
      />
    </Box>
  )
}
