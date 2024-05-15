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
			className="col-span-12 sm:col-span-6 lg:col-span-3 block relative group pb-12 sm:pb-0 sm:mb-0 border-b-2 border-grey-500 last:border-0 last:pb-0 sm:border-0"
		>
			<div className="flex flex-col h-full">
				<p className="mb-4 uppercase font-mono text-semibold tracking-wider small text-black/40">
					{postDate}
				</p>

				<h3 className="font-normal transition-all duration-300 mb-6 max-w-[70%] group-hover:text-blue">
					{title}
				</h3>

				<p className="mb-10 large">{excerpt}</p>

				<div className="mt-auto">
					<SimpleButton text="Read Article" />
				</div>
			</div>
		</Link>
	)
}
