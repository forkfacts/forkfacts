import { Share } from "./index"

export default {
  title: "Components/Share",
  component: Share,
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
}

export const Social = () => (
  <Share
    headline={"Share and contribute in creating a healthy planet!"}
    title={"Nutrition Facts for Avocado"}
    url={"https://google.com"}
    twitterHashTags={["nutrition", "avocado"]}
    facebookHashTag={"nutrition"}
    emailBody={"Hey, I think you will care about this information"}
  />
)
