"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ServiceAccordion({
	currentActive,
	id,
	title,
	summary,
	setAccordionActive,
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
		setAccordionActive(visible ? null : id)
	}

	return (
		<div className="block mb-14 pb-14 relative group">
			<div className="flex justify-between items-center">
				<button
					type="button"
					className="flex items-center justify-between gap-2 w-full"
					onClick={() => handleClick()}
				>
					<h3 className="h4 font-normal transition-all duration-300 group-hover:text-blue">
						{title}
					</h3>

					<span className="duration-500 group-hover:text-blue">
						{visible ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24"
								className="main-grid-item-icon"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								v-if="!showDescription"
							>
								<line x1="12" x2="12" y1="5" y2="19" />
								<line x1="5" x2="19" y1="12" y2="12" />
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24"
								className="main-grid-item-icon"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								v-else="showDescription"
							>
								<line x1="5" x2="19" y1="12" y2="12" />
							</svg>
						)}
					</span>
				</button>
			</div>

			<AnimatePresence initial={false}>
				{visible && (
					<motion.div
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: { opacity: 1, height: "auto" },
							collapsed: { opacity: 0, height: 0 },
						}}
						transition={{ duration: 0.5 }}
					>
						<div
							className="rte pt-8 -mb-2 max-w-[560px]"
							dangerouslySetInnerHTML={{ __html: summary }}
						/>
					</motion.div>
				)}
			</AnimatePresence>

			<span className="absolute w-full h-[2px] bottom-0 left-0 bg-black/10" />
		</div>
	)
}
