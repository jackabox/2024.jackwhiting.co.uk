export default function HomeIntro({ multilineHeading, heading, rte }: any) {
	return (
		<section className="py-24 lg:pb-32">
			<h1
				className="leading-tight font-normal"
				dangerouslySetInnerHTML={{
					__html: multilineHeading.replace(/\n/g, "<br />"),
				}}
			/>

			<div className="max-w-[600px] ml-auto mt-24">
				<h2 className="h3 font-normal mb-4">{heading}</h2>
				<div
					className="rte rte--large"
					dangerouslySetInnerHTML={{ __html: rte }}
				/>
			</div>
		</section>
	)
}
