"use client"

import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import ReactPlayer from "react-player/vimeo"
import SimpleButton from "../SimpleButton"

function VideoComponent({ url }: any) {
	return (
		<div className="rounded-lg overflow-hidden iframe-square h-full">
			<ReactPlayer
				width="100%"
				height="100%"
				muted
				playsinline
				loop
				playing
				url={url}
			/>
		</div>
	)
}

export default function ProjectFullRow({
	id,
	title,
	url,
	date,
	projectType,
	image,
	summary,
	video,
}: any) {
	return (
		<article className="grid grid-cols-12 gap-10 lg:gap-28 py-12 lg:py-20">
			<div className="col-span-7 relative">
				<AnimatePresence>
					{image.length && (
						<div className="shadow-2xl overflow-hidden">
							<motion.div
								initial="initial"
								animate="animated"
								exit="initial"
								variants={{
									initial: {
										scale: 1.15,
										transition: {
											duration: 0,
										},
									},
									animated: {
										scale: 1,
										transition: {
											duration: 1,
										},
									},
								}}
							>
								<div className="p-16 bg-blue aspect-[9/8]">
									{video ? (
										<VideoComponent url={video} />
									) : (
										<Image
											src={image[0].url}
											width={image[0].width}
											height={image[0].height}
											alt={image[0].alt}
										/>
									)}
								</div>
							</motion.div>
						</div>
					)}
				</AnimatePresence>
			</div>
			<div className="col-span-5 flex-col flex h-full justify-center">
				<div className="w-auto flex gap-4 flex-wrap mb-7">
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

				<Link href={url} className="group flex items-center gap-2">
					<h2 className="font-normal transition-all duration-300 group-hover:text-blue">
						{title}
					</h2>

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
				</Link>

				<div
					className="rte rte--large mt-4"
					dangerouslySetInnerHTML={{ __html: summary }}
				/>

				<div className="mt-6">
					<SimpleButton url={url} text="View Project" />
				</div>
			</div>
		</article>
	)
}
