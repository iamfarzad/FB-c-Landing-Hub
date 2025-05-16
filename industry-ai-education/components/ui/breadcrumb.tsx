import * as React from "react"
import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  segments: {
    name: string
    href: string
  }[]
  separator?: React.ReactNode
  homeHref?: string
}

export function Breadcrumb({
  segments,
  separator = <ChevronRight className="h-4 w-4 text-muted-foreground" />,
  homeHref = "/",
  className,
  ...props
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center text-sm text-muted-foreground", className)}
      {...props}
    >
      <ol className="flex items-center gap-1.5">
        <li>
          <Link
            href={homeHref}
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {segments.map((segment, index) => (
          <React.Fragment key={index}>
            <li className="flex items-center gap-1.5">
              {separator}
              {index === segments.length - 1 ? (
                <span className="font-medium text-foreground">{segment.name}</span>
              ) : (
                <Link href={segment.href} className="hover:text-foreground transition-colors">
                  {segment.name}
                </Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  )
}

export const BreadcrumbList = () => null
export const BreadcrumbItem = () => null
export const BreadcrumbLink = () => null
export const BreadcrumbPage = () => null
export const BreadcrumbSeparator = () => null
export const BreadcrumbEllipsis = () => null

