import * as React from "react"

interface BreadcrumbProps {
  paths: string[]
}

export const Breadcrumb = ({ paths }: BreadcrumbProps) => {
  return <div>
    {paths.map((path, index) => <span>{path + ((index === paths.length - 1) ? "" : " / ")}</span>)}
  </div>
}