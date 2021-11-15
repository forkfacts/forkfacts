import * as React from "react"
import {
  Breadcrumb as BreadcrumbComponent,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { Breadcrumb } from "../../shared/types"

interface BreadcrumbProps {
  paths: Breadcrumb[]
}

export const Breadcrumbs = ({ paths }: BreadcrumbProps) => {
  return (
    <BreadcrumbComponent
      spacing="8px"
      separator={<ChevronRightIcon color="gray.600" />}
    >
      {paths.map((path, index) => {
        return (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink as={Link} to={path.url} color={"gray.600"}>
              <Text fontSize={"sm"}>{path.displayName}</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
        )
      })}
    </BreadcrumbComponent>
  )
}
