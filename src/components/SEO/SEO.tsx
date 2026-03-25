import { useEffect } from "react"
import { buildAbsoluteUrl } from "../../site"

interface Props {
  title: string
  description: string
  image?: string
  type?: "website" | "article"
  noindex?: boolean
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>
}

function ensureMetaTag(selector: string, attributes: Record<string, string>) {
  let meta = document.head.querySelector<HTMLMetaElement>(selector)

  if (!meta) {
    meta = document.createElement("meta")
    Object.entries(attributes).forEach(([key, value]) => {
      meta?.setAttribute(key, value)
    })
    document.head.appendChild(meta)
  }

  return meta
}

function ensureLinkTag(selector: string, attributes: Record<string, string>) {
  let link = document.head.querySelector<HTMLLinkElement>(selector)

  if (!link) {
    link = document.createElement("link")
    Object.entries(attributes).forEach(([key, value]) => {
      link?.setAttribute(key, value)
    })
    document.head.appendChild(link)
  }

  return link
}

export default function SEO({
  title,
  description,
  image = "/logo.svg",
  type = "website",
  noindex = false,
  structuredData,
}: Props) {
  useEffect(() => {
    document.title = title
    const path = typeof window !== "undefined" ? window.location.pathname : ""
    const canonicalUrl = buildAbsoluteUrl(path)
    const imageUrl = buildAbsoluteUrl(image)
    const robotsContent = noindex ? "noindex, nofollow" : "index, follow"

    const descriptionMeta = ensureMetaTag("meta[name='description']", { name: "description" })
    const robotsMeta = ensureMetaTag("meta[name='robots']", { name: "robots" })
    const canonicalLink = ensureLinkTag("link[rel='canonical']", { rel: "canonical" })
    const ogTitleMeta = ensureMetaTag("meta[property='og:title']", { property: "og:title" })
    const ogDescriptionMeta = ensureMetaTag("meta[property='og:description']", { property: "og:description" })
    const ogTypeMeta = ensureMetaTag("meta[property='og:type']", { property: "og:type" })
    const ogUrlMeta = ensureMetaTag("meta[property='og:url']", { property: "og:url" })
    const ogImageMeta = ensureMetaTag("meta[property='og:image']", { property: "og:image" })
    const ogSiteNameMeta = ensureMetaTag("meta[property='og:site_name']", { property: "og:site_name" })
    const twitterCardMeta = ensureMetaTag("meta[name='twitter:card']", { name: "twitter:card" })
    const twitterTitleMeta = ensureMetaTag("meta[name='twitter:title']", { name: "twitter:title" })
    const twitterDescriptionMeta = ensureMetaTag("meta[name='twitter:description']", { name: "twitter:description" })
    const twitterImageMeta = ensureMetaTag("meta[name='twitter:image']", { name: "twitter:image" })
    let structuredDataScript = document.head.querySelector<HTMLScriptElement>("script[data-seo='structured-data']")

    descriptionMeta?.setAttribute("content", description)
    robotsMeta?.setAttribute("content", robotsContent)
    canonicalLink?.setAttribute("href", canonicalUrl)
    ogTitleMeta?.setAttribute("content", title)
    ogDescriptionMeta?.setAttribute("content", description)
    ogTypeMeta?.setAttribute("content", type)
    ogUrlMeta?.setAttribute("content", canonicalUrl)
    ogImageMeta?.setAttribute("content", imageUrl)
    ogSiteNameMeta?.setAttribute("content", "Jeevika Foundation")
    twitterCardMeta?.setAttribute("content", "summary_large_image")
    twitterTitleMeta?.setAttribute("content", title)
    twitterDescriptionMeta?.setAttribute("content", description)
    twitterImageMeta?.setAttribute("content", imageUrl)

    if (structuredData) {
      if (!structuredDataScript) {
        structuredDataScript = document.createElement("script")
        structuredDataScript.type = "application/ld+json"
        structuredDataScript.setAttribute("data-seo", "structured-data")
        document.head.appendChild(structuredDataScript)
      }

      structuredDataScript.textContent = JSON.stringify(structuredData)
    } else if (structuredDataScript) {
      structuredDataScript.remove()
    }
  }, [description, image, noindex, structuredData, title, type])

  return null
}
