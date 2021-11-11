import * as React from "react"
import { BreadcrumbType } from "../../generators/utilities/breadcrumbs"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import { ChevronRightIcon } from "@chakra-ui/icons"

interface BreadcrumbProps {
  paths: BreadcrumbType[]
}

export const Breadcrumbs = ({ paths }: BreadcrumbProps) => {
  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.600" />}>
      {paths.map((path, index) => {
        return (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink as={Link} to={path.url} color={"gray.600"}>
              <Text fontSize={"sm"}>{path.displayName}</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
        )
      })}
    </Breadcrumb>
  )
}
