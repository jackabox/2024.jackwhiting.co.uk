"use client"

import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import ProjectRow from "@/components/Projects/ProjectRow"

export default function FeaturedProjects({ heading, summary, projects }: any) {
	const [active, setActive] = useState(null)

	const setProjectActive = (data: any) => {
		setActive(data)
	}

	return (
		<section className="border-y-2 border-grey-500 py-24 lg:py-36 -mt-0.5">
			<h2 className="text-4xl font-normal mb-6">{heading}</h2>
			<div
				className="rte rte--large max-w-[400px]"
				dangerouslySetInnerHTML={{ __html: summary }}
			/>

			<div className="grid grid-cols-12 lg:gap-32 mt-20">
				<div className="hidden lg:block lg:col-span-5">
					{projects.map((project: any, index: number) => {
						return (
							<div className="relative">
								<AnimatePresence>
									{project.image.length && active == index && (
										<div className="absolute top-0 left-0 right-0 shadow-2xl overflow-hidden">
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
															duration: 1.2,
														},
													},
												}}
											>
												<Image
													src={project.image[0].url}
													width={project.image[0].width}
													height={project.image[0].height}
													alt={project.image[0].alt ?? ""}
												/>
											</motion.div>
										</div>
									)}
								</AnimatePresence>
							</div>
						)
					})}
				</div>

				<div className="col-span-12 lg:col-span-7">
					{projects.map((project: any, index: number) => {
						return (
							<ProjectRow
								id={index}
								{...project}
								currentActive={active}
								setProjectActive={setProjectActive}
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}
