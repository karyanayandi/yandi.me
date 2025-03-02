"use client"

import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@yopem-ui/utils"
import { LayoutGroup, motion } from "framer-motion"

const navItems = {
  "/": {
    name: "home",
    hideOnMobile: false,
  },
  "/about": {
    name: "about",
    hideOnMobile: false,
  },
  "/projects": {
    name: "projects",
    hideOnMobile: false,
  },
  "/blog": {
    name: "blog",
    hideOnMobile: false,
  },
  "/contact": {
    name: "contact",
    hideOnMobile: false,
  },
  "/cv": {
    name: "cv",
    hideOnMobile: false,
  },
}

export default function Navbar() {
  let pathname = usePathname() || "/"
  if (pathname.includes("/blog/")) {
    pathname = "/blog"
  }

  return (
    <aside className="-mx-4 md:mx-0 md:w-[150px] md:flex-shrink-0 md:px-0">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <div className="my-4 flex h-10 w-full items-center justify-center font-sundanese text-xl font-bold text-foreground md:items-start md:justify-start">
            ᮊᮛᮡᮔ ᮚᮔ᮪
          </div>
          <nav
            className="fade relative flex scroll-pr-6 flex-row items-start px-4 pb-0 md:relative md:flex-col md:overflow-auto md:px-0"
            id="nav"
          >
            <div className="mb-2 mt-2 flex flex-row space-x-0 pr-10 md:mt-0 md:flex-col">
              {Object.entries(navItems).map(
                ([path, { name, hideOnMobile }]) => {
                  const isActive = path === pathname
                  return (
                    <NextLink
                      key={path}
                      href={path}
                      target={path == "/cv" ? "_blank" : undefined}
                      className={cn(
                        "align-middle transition-all hover:text-foreground/90",
                        {
                          flex: hideOnMobile === false,
                          "hidden md:flex": hideOnMobile === true,
                          "text-foregound/90": !isActive,
                          "font-bold": isActive,
                        },
                      )}
                    >
                      <span className="relative px-[10px] py-[5px]">
                        {name}
                        {path === pathname ? (
                          <motion.div
                            className="absolute inset-0 z-[-1] rounded-md bg-secondary"
                            layoutId="sidebar"
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 30,
                            }}
                          />
                        ) : null}
                      </span>
                    </NextLink>
                  )
                },
              )}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  )
}
