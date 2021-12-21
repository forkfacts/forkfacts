/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { ReactNode } from "react"
//import { useStaticQuery, graphql } from "gatsby"
import { Box, ChakraProvider, Text } from "@chakra-ui/react"
import { theme } from "../theme"
import { Header } from "./Header"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/900.css"
import { Breadcrumb } from "../shared/types"
import { Breadcrumbs } from "./Breadcrumb"
import Search from "./Search"

interface LayoutProps {
  pageTitle?: string
  breadcrumbs?: Breadcrumb[]
  children: ReactNode
}
const Layout = ({ pageTitle, breadcrumbs, children }: LayoutProps) => {
  /*const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)*/

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Search/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Box gridGap={6} mt={6}>
          {breadcrumbs && <Breadcrumbs paths={breadcrumbs} />}
          {pageTitle && (
            <Text my={6} fontSize={"2xl"} fontWeight={"bold"}>
              {pageTitle}
            </Text>
          )}
        </Box>
        <main>{children}</main>
      </div>
    </ChakraProvider>
  )
}

export default Layout
