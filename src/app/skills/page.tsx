import NextLink from "next/link"

import { Card } from "@/components/Card"
import { Icon } from "@/components/Icon"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs"

export default function SkillsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Skills</h1>
      <Tabs defaultValue="language" className="max-w-[720px]">
        <TabsList className="grid w-full grid-cols-3 gap-4 space-x-4 md:grid-cols-5">
          <TabsTrigger value="language">Language</TabsTrigger>
          <TabsTrigger value="dbms">DBMS</TabsTrigger>
          <TabsTrigger value="framework">Library</TabsTrigger>
          <TabsTrigger value="ui">UI</TabsTrigger>
          <TabsTrigger value="misc">Misc</TabsTrigger>
        </TabsList>
        <TabsContent value="language">
          <div className="mt-8 grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-4">
            <NextLink
              href="https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html"
              target="_blank"
            >
              <Card>
                <Icon.Bash className="h-20 w-20 text-foreground" />
              </Card>
            </NextLink>
            <NextLink
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
            >
              <Card>
                <Icon.Javascript className="h-20 w-20 text-[#F7DF1E]" />
              </Card>
            </NextLink>
            <NextLink href="https://www.typescriptlang.org" target="_blank">
              <Card>
                <Icon.Typescript className="h-20 w-20 text-[#3178C6]" />
              </Card>
            </NextLink>
            <NextLink href="https://www.php.net" target="_blank">
              <Card>
                <Icon.PHP className="h-20 w-20 text-[#7377AD]" />
              </Card>
            </NextLink>
            <NextLink href="https://www.python.org" target="_blank">
              <Card>
                <Icon.Python className="h-20 w-20 text-[#3C7CAE]" />
              </Card>
            </NextLink>
            <NextLink href="https://go.dev" target="_blank">
              <Card>
                <Icon.Go className="h-20 w-20 text-[#00AED8]" />
              </Card>
            </NextLink>
            <NextLink href="https://isocpp.org" target="_blank">
              <Card>
                <Icon.CPlusPlus className="h-20 w-20 text-[#004283]" />
              </Card>
            </NextLink>
            <NextLink href="https://www.lua.org" target="_blank">
              <Card>
                <Icon.Lua className="h-20 w-20 text-[#00007C]" />
              </Card>
            </NextLink>
          </div>
        </TabsContent>
        <TabsContent value="framework">
          <div className="mt-10 grid grid-cols-2 gap-4 md:mt-0 md:grid-cols-4">
            <NextLink href="https://nodejs.org" target="_blank">
              <Card>
                <Icon.Nodejs className="h-20 w-20 text-[#82CD2A]" />
              </Card>
            </NextLink>
            <NextLink href="https://www.fastify.io" target="_blank">
              <Card>
                <Icon.Fastify className="h-20 w-20 text-foreground" />
              </Card>
            </NextLink>
            <NextLink href="https://expressjs.com" target="_blank">
              <Card>
                <Icon.Express className="h-20 w-20 text-[#828282]" />
              </Card>
            </NextLink>
            <NextLink href="https://nestjs.com" target="_blank">
              <Card>
                <Icon.Nestjs className="h-20 w-20 text-[#E11E4D]" />
              </Card>
            </NextLink>
            <NextLink href="https://react.dev" target="_blank">
              <Card>
                <Icon.React className="h-20 w-20 text-[#61DBFB]" />
              </Card>
            </NextLink>
            <NextLink href="https://reactnative.dev" target="_blank">
              <Card>
                <Icon.ReactNative className="h-20 w-20 text-[#61DBFB]" />
              </Card>
            </NextLink>
            <NextLink href="https://preactjs.com" target="_blank">
              <Card>
                <Icon.Preact className="h-20 w-20 text-[#683AB9]" />
              </Card>
            </NextLink>
            <NextLink href="https://solidjs.com" target="_blank">
              <Card>
                <Icon.Solid className="h-20 w-20 text-[#3C80C3]" />
              </Card>
            </NextLink>
            <NextLink href="https://svelte.dev" target="_blank">
              <Card>
                <Icon.Svelte className="h-20 w-20 text-[#FF3C00]" />
              </Card>
            </NextLink>
            <NextLink href="https://nextjs.org" target="_blank">
              <Card>
                <Icon.Nextjs className="h-20 w-20 text-foreground" />
              </Card>
            </NextLink>
            <NextLink href="https://webpack.js.org" target="_blank">
              <Card>
                <Icon.Webpack className="h-20 w-20 text-[#1C78C0]" />
              </Card>
            </NextLink>
            <NextLink href="https://vitejs.dev" target="_blank">
              <Card>
                <Icon.Vite className="h-20 w-20 text-[#9D5EF6]" />
              </Card>
            </NextLink>
            <NextLink href="https://www.prisma.io" target="_blank">
              <Card>
                <Icon.Prisma className="h-20 w-20 text-foreground" />
              </Card>
            </NextLink>
            <NextLink href="https://wordpress.org" target="_blank">
              <Card>
                <Icon.WordPress className="h-20 w-20 text-foreground" />
              </Card>
            </NextLink>
          </div>
        </TabsContent>
        <TabsContent value="ui">
          <div className="mt-10 grid grid-cols-2 gap-4 md:mt-0 md:grid-cols-4">
            <NextLink href="https://tailwindcss.com" target="_blank">
              <Card>
                <Icon.Tailwind className="h-20 w-20 text-[#07B0CE]" />
              </Card>
            </NextLink>
            <NextLink href="https://unocss.dev" target="_blank">
              <Card>
                <Icon.Uno className="h-20 w-20 text-[#858585]" />
              </Card>
            </NextLink>
            <NextLink href="https://daisyui.com" target="_blank">
              <Card>
                <Icon.DaisyUI className="h-20 w-20 text-[#570DF8]" />
              </Card>
            </NextLink>
            <NextLink href="https://radix-ui.com" target="_blank">
              <Card>
                <Icon.Radix className="h-20 w-20 text-foreground" />
              </Card>
            </NextLink>
            <NextLink href="https://styled-components.com" target="_blank">
              <Card>
                <Icon.StyledComponent className="h-20 w-20 text-[#D47883]" />
              </Card>
            </NextLink>
            <NextLink href="https://chakra-ui.com" target="_blank">
              <Card>
                <Icon.Chakra className="h-20 w-20 text-[#5AC8C7]" />
              </Card>
            </NextLink>
            <NextLink href="https://mui.com" target="_blank">
              <Card>
                <Icon.MUI className="h-20 w-20 text-[#007FFF]" />
              </Card>
            </NextLink>
            <NextLink href="https://mantine.dev" target="_blank">
              <Card>
                <Icon.Mantine className="h-20 w-20 text-[#339AF0]" />
              </Card>
            </NextLink>
          </div>
        </TabsContent>
        <TabsContent value="dbms">
          <div className="mt-10 grid grid-cols-2 gap-4 md:mt-0 md:grid-cols-4">
            <NextLink href="https://wwww.postgresql.org" target="_blank">
              <Card>
                <Icon.Postgresql className="h-20 w-20 text-[#31648C]" />
              </Card>
            </NextLink>
            <NextLink href="https://wwww.mysql.com" target="_blank">
              <Card>
                <Icon.MySQL className="h-20 w-20 text-[#DD8A00]" />
              </Card>
            </NextLink>
            <NextLink href="https://sqlite.org" target="_blank">
              <Card>
                <Icon.SQLite className="h-20 w-20 text-[#043D50]" />
              </Card>
            </NextLink>
            <NextLink href="https://wwww.mongodb.com" target="_blank">
              <Card>
                <Icon.Mongo className="h-20 w-20 text-[#439743]" />
              </Card>
            </NextLink>
            <NextLink href="https://redis.io" target="_blank">
              <Card>
                <Icon.Redis className="h-20 w-20 text-[#D82C20]" />
              </Card>
            </NextLink>
            <NextLink href="https://firebase.google.com" target="_blank">
              <Card>
                <Icon.Firebase className="h-20 w-20 text-[#FFCB2B]" />
              </Card>
            </NextLink>
          </div>
        </TabsContent>
        <TabsContent value="misc">
          <div className="mt-10 grid grid-cols-2 gap-4 md:mt-0 md:grid-cols-4">
            <NextLink href="https://kernel.org" target="_blank">
              <Card>
                <Icon.Linux className="h-20 w-20 text-foreground" />
              </Card>
            </NextLink>
            <NextLink href="https://archlinux.org" target="_blank">
              <Card>
                <Icon.ArchLinux className="h-20 w-20 text-[#168ECA]" />
              </Card>
            </NextLink>
            <NextLink href="https://git-scm.com" target="_blank">
              <Card>
                <Icon.Git className="h-20 w-20 text-[#E84D31]" />
              </Card>
            </NextLink>
            <NextLink href="https://www.docker.com" target="_blank">
              <Card>
                <Icon.Docker className="h-20 w-20 text-[#2391E6]" />
              </Card>
            </NextLink>
            <NextLink href="https://podman.io" target="_blank">
              <Card>
                <Icon.Podman className="h-20 w-20 text-[#872D9D]" />
              </Card>
            </NextLink>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
