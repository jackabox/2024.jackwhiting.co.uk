import Link from "next/link"
import { twMerge } from "tailwind-merge"

const LinkUnderlineStyle = ({
	text,
	href,
	title,
	color,
	className = "",
}: any) => {
	let underline = ""

	switch (color) {
		case "blue":
			className = twMerge(className, "text-blue")
			underline = "bg-blue"
			break
		default:
			className = twMerge(className, "text-black")
			underline = "bg-black"
			break
	}
	return (
		<Link
			className={`inline-block relative group ${className}`}
			title={title}
			href={href}
		>
			<span>{text}</span>

			<span className="absolute w-full h-[2px] bottom-0 left-0 bg-black/10"></span>
			<span
				className={`w-[0px] transition-all duration-300 group-hover:opacity-100 group-hover:w-full absolute h-[2px] bottom-0 left-0 ${underline}`}
			></span>
		</Link>
	)
}

export default LinkUnderlineStyle
