import ArticleFeaturedCard from "./Articles/ArticleFeaturedCard"

export default function FeaturedServices({ heading, summary, articles }: any) {
	return (
		<section className="border-y-2 border-grey-500 py-24 lg:py-36 -mt-0.5">
			<h2 className="text-4xl font-normal mb-6">{heading}</h2>

			<div
				className="rte rte--large max-w-[400px]"
				dangerouslySetInnerHTML={{ __html: summary }}
			/>

			<div className="grid grid-cols-12 gap-10 sm:gap-14 sm:gap-20 lg:gap-28 mt-20">
				{articles.map((article: any, index: number) => {
					return <ArticleFeaturedCard key={index} {...article} />
				})}
			</div>
		</section>
	)
}
