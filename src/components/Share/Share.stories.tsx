import { Share } from "./index";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Components/Share",
  component: Share,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export const Desktop = () => (
  <Share
    headline={"Share and contribute in creating a healthy planet!"}
    title={"Nutrition Facts for Avocado"}
    url={"https://google.com"}
    twitterHashTags={["nutrition", "avocado"]}
    facebookHashTag={"nutrition"}
    emailBody={"Hey, I think you will care about this information"}
  />
);

export const Mobile = () => (
  <Share
    headline={"Share and contribute in creating a healthy planet!"}
    title={"Nutrition Facts for Avocado"}
    url={"https://google.com"}
    twitterHashTags={["nutrition", "avocado"]}
    facebookHashTag={"nutrition"}
    emailBody={"Hey, I think you will care about this information"}
  />
);
Mobile.parameters = {
  viewport: {
    defaultViewport: "pixel",
  },
};

export const Tablet = () => (
  <Share
    headline={"Share and contribute in creating a healthy planet!"}
    title={"Nutrition Facts for Avocado"}
    url={"https://google.com"}
    twitterHashTags={["nutrition", "avocado"]}
    facebookHashTag={"nutrition"}
    emailBody={"Hey, I think you will care about this information"}
  />
);
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
