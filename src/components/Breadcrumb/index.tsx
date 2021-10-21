import * as React from "react"
import { BreadcrumbType } from "../../generators/utilities/breadcrumbs"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react"
import { Link } from "gatsby"

interface BreadcrumbProps {
  paths: BreadcrumbType[]
}

export const Breadcrumbs = ({ paths }: BreadcrumbProps) => {
  return (
    <Breadcrumb>
      {paths.map((path, index) => {
        return (
          /*<span key={index}>
            {path.url && (
              <a href={path.url}>
                <span>
                  {path.displayName + (index === paths.length - 1 ? "" : " / ")}
                </span>
              </a>
            )}
            {!path.url && <span>{path.displayName}</span>}
          </span>*/
          <BreadcrumbItem key={index}>
            <BreadcrumbLink as={Link} to={path.url}>
              <Text>{path.displayName}</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
        )
      })}
    </Breadcrumb>
  )
}
