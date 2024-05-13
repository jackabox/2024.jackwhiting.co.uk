"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function ProjectRow({
	currentActive,
	id,
	title,
	url,
	projectType,
	setProjectActive,
}: any) {
	const [visible, setVisible] = useState<any | null>(null)

	useEffect(() => {
		if (currentActive !== id) {
			setVisible(null)
		} else {
			setVisible(id)
		}
	}, [currentActive])

	const handleClick = () => {
		console.log("handle change image")
		setProjectActive(visible ? null : id)
	}

	return (
		<Link
			href={url}
			className="block mb-14 pb-14 relative group last:mb-0"
			onMouseEnter={() => handleClick()}
		>
			<p className="uppercase font-mono text-semibold tracking-wider small text-black/40">
				0{id + 1}.
			</p>

			<div className="flex justify-between items-e items-center mt-3">
				<div className="flex items-center gap-2">
					<h3 className=" font-normal transition-all duration-300">{title}</h3>

					<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-blue">
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
				</div>

				<div>
					<div className="w-auto flex gap-4 flex-wrap">
						{projectType.map((type: any, index: number) => {
							return (
								<span
									key={index}
									className="flex text-sm font-mono uppercase font-regular px-2 py-1 rounded-md border border-black opacity-50"
								>
									{type.title}
								</span>
							)
						})}
					</div>
				</div>
			</div>

			<span className="absolute w-full h-[2px] bottom-0 left-0 bg-black/10"></span>
			<span className="w-[0px] transition-all duration-300 group-hover:opacity-100 group-hover:w-full absolute h-[2px] bottom-0 left-0 bg-blue"></span>
		</Link>
	)
}
