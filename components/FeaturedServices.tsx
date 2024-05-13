"use client"

import { useState } from "react"

import ServiceAccordion from "./ServiceAccordion"

export default function FeaturedServices({ heading, summary, services }: any) {
	const [active, setActive] = useState(1)

	const setAccordionActive = (data: any) => {
		setActive(data)
	}

	return (
		<section className="border-y-2 border-grey-500 py-24 lg:py-36 -mt-0.5">
			<h2 className="text-4xl font-normal mb-6">{heading}</h2>
			<div
				className="rte rte--large max-w-[400px]"
				dangerouslySetInnerHTML={{ __html: summary }}
			/>

			<div className="grid grid-cols-12 lg:gap-20 mt-20">
				<div className="col-span-12">
					{services.map((service: any, index: number) => {
						return (
							<ServiceAccordion
								id={index + 1}
								key={index}
								{...service}
								currentActive={active}
								setAccordionActive={setAccordionActive}
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}
