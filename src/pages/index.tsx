// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import { Text } from "@chakra-ui/react"
import { HOME } from "../generators/utilities/breadcrumbs"

type DataProps = {
  site: {
    buildTime: string
  }
}

const Index: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout pageTitle={"ForkFacts"}>
    <Seo title="Using TypeScript" />
    <Text fontSize={"3xl"} fontWeight={"medium"}>
      Find nutrition about your food
    </Text>
    <Text py={"2vh"} fontWeight={"bold"}>
      !!The work is in progress!!
    </Text>
    <Text fontWeight={"medium"}>
      In the meantime, check out{" "}
      <a href="/foundation-foods" style={{ color: "blue" }}>
        Foundation Foods
      </a>
    </Text>
  </Layout>
)

export default Index

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
