import * as React from "react"
import NextLink from "next/link"
import NextImage from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

const CustomLink = ({ href, children, ...rest }) => {
  if (href.startsWith("/")) {
    return (
      <NextLink href={href} {...rest}>
        {children}
      </NextLink>
    )
  }

  if (href.startsWith("#")) {
    return <a {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...rest} />
}

function RoundedImage({ src, alt, ...rest }) {
  return <NextImage src={src} alt={alt} className="rounded-lg" {...rest} />
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return (
    <article className="prose prose-quoteless">
      <Component components={{ ...components }} />
    </article>
  )
}
