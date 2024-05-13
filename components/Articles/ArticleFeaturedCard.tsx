import Link from "next/link"

export default function ArticleFeaturedCard({
	title,
	url,
	excerpt,
	dateCreated,
}: any) {
	return (
		<Link
			href={url}
			className="col-span-12 sm:col-span-6 lg:col-span-3 block relative group pb-12 sm:pb-0 sm:mb-0 border-b-2 border-grey-500 last:border-0 last:pb-0 sm:border-0"
		>
			<div className="flex flex-col h-full">
				<p className="mb-4 uppercase font-mono text-semibold tracking-wider small text-black/40">
					{dateCreated}
				</p>

				<h3 className="font-normal transition-all duration-300 mb-6 max-w-[70%] group-hover:text-blue">
					{title}
				</h3>

				<p className="mb-10 large">{excerpt}</p>

				<span className="flex items-center gap-3 font-semibold transition-all duration-500 group-hover:text-blue mt-auto">
					<span>Read Article</span>
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
							/>
						</svg>
					</span>
				</span>
			</div>
		</Link>
	)
}
