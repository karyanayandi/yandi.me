"use client"

import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { LayoutGroup, motion } from "framer-motion"

import { cn } from "@/lib/cn"

const navItems = {
  "/": {
    name: "home",
    hide: false,
  },
  "/about": {
    name: "about",
    hide: false,
  },
  "/skills": {
    name: "skills",
    hide: false,
  },
  "/projects": {
    name: "projects",
    hide: false,
  },
  "/blog": {
    name: "blog",
    hide: true,
  },
  "/uses": {
    name: "uses",
    hide: true,
  },
  "/contact": {
    name: "contact",
    hide: false,
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
          <nav
            className="fade relative flex scroll-pr-6 flex-row items-start px-4 pb-0 md:relative md:flex-col md:overflow-auto md:px-0"
            id="nav"
          >
            <div className="my-4 hidden h-10 w-full font-sundanese text-xl font-bold text-foreground md:flex">
              ᮊᮛᮡᮔ ᮚᮔ᮪
            </div>
            <div className="mb-2 mt-2 flex flex-row space-x-0 pr-10 md:mt-0 md:flex-col">
              {Object.entries(navItems).map(([path, { name, hide }]) => {
                const isActive = path === pathname
                return (
                  <NextLink
                    key={path}
                    href={path}
                    className={cn(
                      "align-middle transition-all hover:text-foreground/90",
                      {
                        flex: hide === false,
                        "hidden md:flex": hide === true,
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
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  )
}
