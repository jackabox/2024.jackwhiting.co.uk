import Image from "next/image"

const AboutInfo = ({ image, rte, heading }: any) => {
	return (
		<section className="grid grid-cols-2 gap-48 pb-24 lg:pb-36">
			<Image
				src={image[0].url}
				alt={image[0].alt}
				width={image[0].width}
				height={image[0].height}
			/>

			<div className="pt-1">
				<h2 className="mb-6">{heading}</h2>
				<div
					className="rte rte--large max-w-[620px]"
					dangerouslySetInnerHTML={{ __html: rte }}
				/>
			</div>
		</section>
	)
}

export default AboutInfo
