import { cloneElement, ReactElement } from "react"
import { useRouter } from "next/router"
import Link, { LinkProps } from "next/link"


export function ActiveLink({
  children,
  activeClassName,
  defaultClassName,
  ...rest
}){
  const { asPath } = useRouter()
  const className = asPath === rest.href ? activeClassName : defaultClassName

  return <Link {...rest}>{cloneElement(children, { className })}</Link>
}