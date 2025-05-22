import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Portfolio Website"
export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ fontWeight: 800 }}>Portfolio</div>
      <div
        style={{
          fontSize: 48,
          marginTop: 24,
        }}
      >
        Creative Designer
      </div>
    </div>,
    {
      ...size,
    },
  )
}
