import { FC, Fragment } from "react"

export type BreadcrumbsProps = {
  title: string
  href?: string
}

type BreadcrumbProps = {
  breadcrumbs: BreadcrumbsProps[]
}

export const BreadCrumb: FC<BreadcrumbProps> = ({ breadcrumbs }) => {
  return (
    <Fragment>
      <nav>
        <ol>
          {breadcrumbs.map((breadcrumbs, index) => (
            <li key={index}>
              {breadcrumbs.href ? (
                <a href={breadcrumbs.href}>{breadcrumbs.title}</a>
              ) : (
                <span>{breadcrumbs.title}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </Fragment>
  )
}
