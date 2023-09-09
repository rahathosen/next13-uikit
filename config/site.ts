import type { FooterItem, MainNavItem } from "@/types/nav"

import { productCategories } from "@/config/products"
import { slugify } from "@/lib/utils"

export type SiteConfig = typeof siteConfig

const links = {
  twitter: "https://twitter.com/rahathosen_",
  github: "https://github.com/rahathosen/next13-uiKit",
  githubAccount: "https://github.com/rahathosen",
  discord: "https://discord.com/users/rahathosen",
  calDotCom: "https://cal.com/rahathosen",
}

export const siteConfig = {
  name: "next13-uiKit",
  description:
    "An UI-Kit for rapid web development next13-uiKit build with everything new in NextJs 13 and TailwindCss.",
  url: "https://next13-uiKit.rahat.com",
  ogImage: "https://next13-uiKit.rahat.com/opengraph-image.png",
  mainNav: [
    {
      title: "Main",
      items: [
        {
          title: "Products",
          href: "/products",
          description: "All the products we have to offer.",
          items: [],
        },
        {
          title: "Build a Board",
          href: "/build-a-board",
          description: "Build your own custom skateboard.",
          items: [],
        },
        {
          title: "Blog",
          href: "/blog",
          description: "Read our latest blog posts.",
          items: [],
        },
      ],
    },
    ...productCategories.map((category) => ({
      title: category.title,
      items: [
        {
          title: "All",
          href: `/categories/${slugify(category.title)}`,
          description: `All ${category.title}.`,
          items: [],
        },
        ...category.subcategories.map((subcategory) => ({
          title: subcategory.title,
          href: `/categories/${slugify(category.title)}/${subcategory.slug}`,
          description: subcategory.description,
          items: [],
        })),
      ],
    })),
  ] satisfies MainNavItem[],
  links,
  footerNav: [
    {
      title: "Credits",
      items: [
        {
          title: "OneStopShop",
          href: "https://onestopshop.jackblatch.com",
          external: true,
        },
        {
          title: "Acme Corp",
          href: "https://acme-corp.jumr.dev",
          external: true,
        },
        {
          title: "craft.mxkaske.dev",
          href: "https://craft.mxkaske.dev",
          external: true,
        },
        {
          title: "Taxonomy",
          href: "https://tx.shadcn.com/",
          external: true,
        },
        {
          title: "shadcn/ui",
          href: "https://ui.shadcn.com",
          external: true,
        },
      ],
    },
    {
      title: "Help",
      items: [
        {
          title: "About",
          href: "/about",
          external: false,
        },
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
        {
          title: "Terms",
          href: "/terms",
          external: false,
        },
        {
          title: "Privacy",
          href: "/privacy",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "Twitter",
          href: links.twitter,
          external: true,
        },
        {
          title: "GitHub",
          href: links.githubAccount,
          external: true,
        },
        {
          title: "Discord",
          href: links.discord,
          external: true,
        },
        {
          title: "cal.com",
          href: links.calDotCom,
          external: true,
        },
      ],
    },
    {
      title: "Youtube",
      items: [
        {
          title: "beats to ",
          href: "https://www.youtube.com/",
          external: true,
        },
        {
          title: "beats to chill to",
          href: "https://www.youtube.com/",
          external: true,
        },
        {
          title: "a fresh start",
          href: "https://www.youtube.com/",
          external: true,
        },
        {
          title: "coffee to go",
          href: "https://www.youtube.com/",
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
}
