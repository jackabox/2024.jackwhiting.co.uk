import Link from "next/link"
import SimpleButton from "@/components/SimpleButton"
import Tag from "@/components/Tag"

export default function ArticleRow({
	title,
	url,
	excerpt,
	postDate,
	topics,
}: any) {
	return (
		<article className="col-span-1 border-b-2 border-grey-500 pb-12 ">
			<div className="lg:col-span-7">
				<p className="mb-4 uppercase font-mono text-semibold tracking-wider small text-black/40">
					{postDate}
				</p>

				<Link href={url}>
					<h3 className="font-normal transition-all duration-300 mb-6 max-w-[70%] group-hover:text-blue">
						{title}
					</h3>
				</Link>

				<p className="mb-10 large">{excerpt}</p>

				<div className="mt-auto">
					<SimpleButton url={url} text="Read Article" />
				</div>
			</div>
		</article>
	)
}
