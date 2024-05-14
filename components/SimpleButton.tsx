import Link from "next/link"

export default function SimpleButton({
	url,
	title,
	text,
	className = "",
}: any) {
	if (!url) {
		return (
			<span
				className={`group inline-flex tracking-wider text-sm pb-2 font-mono uppercase border-black-700 transition-all duration-500 text-blue relative ${className}`}
			>
				{text}

				<span className="absolute h-[2px] left-0 bottom-0 right-0 bg-grey-500"></span>
				<span className="absolute h-[2px] left-0 bottom-0 right-0 bg-blue w-0 group-hover:w-full transition-all duration-500"></span>
			</span>
		)
	}

	return (
		<Link
			href={url}
			title={title}
			className={`group inline-flex tracking-wider text-sm pb-2 font-mono uppercase border-black-700 transition-all duration-500 text-blue relative ${className}`}
		>
			{text}

			<span className="absolute h-[2px] left-0 bottom-0 right-0 bg-grey-500"></span>
			<span className="absolute h-[2px] left-0 bottom-0 right-0 bg-blue w-0 group-hover:w-full transition-all duration-500"></span>
		</Link>
	)
}
