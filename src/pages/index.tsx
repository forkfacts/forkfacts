import * as React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import { Box, Center, Text } from "@chakra-ui/react"

type DataProps = {
  site: {
    buildTime: string
  }
}

const Index: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <Seo title="ForkFacts" />
    <Box
      style={{
        display: "grid",
        gridTemplateRows: "repeat(3, 1fr)",
        gridTemplateColumns: "repeat(1, 1fr)",
      }}
    >
      <Text
        fontSize={"4xl"}
        fontWeight={"extrabold"}
        style={{ gridRowStart: 1 }}
      >
        Democratizing Nutrition information
      </Text>
      <Text fontSize={"2xl"} style={{ gridRowStart: 2 }}>
        <i>... one food at a time</i>
      </Text>
      <Center bg="gray.100" color="white" style={{ gridRowStart: 3 }} p={4}>
        <Text color={"black"}>
          We are a small team working hard to provide <b>fact-based</b>{" "}
          nutrition information for every possible food out there. Check out
          nutrition information for{" "}
          <a href="/foundation-foods" style={{ color: "blue" }}>
            some foods
          </a>{" "}
          here. Come visit us in some time for more information and news.
        </Text>
      </Center>
    </Box>
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
