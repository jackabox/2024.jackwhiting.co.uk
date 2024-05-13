"use client"

import dynamic from "next/dynamic"
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false })

export default function fullVideo({ url }: any) {
  return (
    <div className="rounded-lg w-full aspect-[4/3]">
      <ReactPlayer
        width="100%"
        height="100%"
        muted
        playsinline
        loop
        playing
        url={url}
      />
    </div>
  )
}
