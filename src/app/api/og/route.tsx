import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl
    const postTitle = searchParams.get("title")

    if (!postTitle) {
      return new Response("Title parameter is required", { status: 400 })
    }

    const interFont = await fetch(
      new URL(
        "https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap",
      ),
    ).then((res) => res.arrayBuffer())

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundImage: "url(https://yandi.me/og-bg.png)",
          }}
        >
          <div
            style={{
              marginLeft: 190,
              marginRight: 190,
              display: "flex",
              fontSize: 130,
              fontFamily: "Inter",
              letterSpacing: "-0.05em",
              fontStyle: "normal",
              color: "white",
              lineHeight: "120px",
              whiteSpace: "pre-wrap",
            }}
          >
            {postTitle}
          </div>
        </div>
      ),
      {
        width: 1920,
        height: 1080,
        fonts: [
          {
            name: "Inter",
            data: interFont,
            style: "normal",
            weight: 700,
          },
        ],
      },
    )
  } catch (error) {
    console.error("Error generating OG image:", error)
    return new Response("Failed to generate image", { status: 500 })
  }
}
