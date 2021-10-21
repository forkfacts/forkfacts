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

export const Social = () => <Share />
