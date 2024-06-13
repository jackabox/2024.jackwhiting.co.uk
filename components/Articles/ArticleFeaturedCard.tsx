import Link from "next/link"
import SimpleButton from "../SimpleButton"

export default function ArticleFeaturedCard({
  title,
  url,
  excerpt,
  postDate,
}: any) {
  return (
    <Link
      href={url}
      className="block relative group pt-8 lg:pt-16 col-span-full lg:col-span-1"
    >
      <div className="flex flex-col h-full">
        <p className="mb-4 uppercase font-mono text-semibold tracking-wider small text-black/40">
          {postDate}
        </p>

        <h3 className="font-normal transition-all duration-300 mb-6 group-hover:text-blue">
          {title}
        </h3>

        <p className="mb-6 lg:mb-10 large">{excerpt}</p>

        <div className="mt-auto">
          <SimpleButton text="Read Article" />
        </div>
      </div>
    </Link>
  )
}
