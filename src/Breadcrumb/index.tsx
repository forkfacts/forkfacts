import * as React from "react"
import { BreadcrumbType } from "../generators/utilities/breadcrumbs"

interface BreadcrumbProps {
  paths: BreadcrumbType[]
}

export const Breadcrumb = ({ paths }: BreadcrumbProps) => {
  return <div>
    {paths.map((path, index) => {
      return <span key={index}>
        {path.url && <a href={path.url}>
          <span>{path.displayName + ((index === paths.length - 1) ? "" : " / ")}</span>
        </a>}
        {!path.url && <span>{path.displayName}</span>}
      </span>
    })}
  </div>
}