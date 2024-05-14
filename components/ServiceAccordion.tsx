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
		<div className="block mb-14 pb-14 relative ">
			<div className="flex items-start">
				<button
					type="button"
					className="group flex items-center w-full gap-6"
					onClick={() => handleClick()}
				>
					<span className="duration-500 group-hover:text-blue -mt-0.5">
						{!visible ? (
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

					<h3 className="h4 font-normal transition-all duration-300 group-hover:text-blue w-auto">
						{title}
					</h3>
				</button>

				<AnimatePresence initial={false}>
					{visible && (
						<motion.div
							initial="collapsed"
							animate="open"
							exit="collapsed"
							className="flex-shrink-0"
							variants={{
								open: { opacity: 1, height: "auto" },
								collapsed: { opacity: 0, height: 0 },
							}}
							transition={{ duration: 0.5 }}
						>
							<div
								className="rte rte--large w-full max-w-[580px]"
								dangerouslySetInnerHTML={{ __html: summary }}
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			<span className="absolute w-full h-[2px] bottom-0 left-0 bg-black/10" />
		</div>
	)
}
