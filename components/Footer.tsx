import Link from "next/link"
import LinkUnderlineStyle from "./LinkUnderlineStyle"

export default function Footer({
	email,
	getInTouch,
	mastodon,
	twitter,
	copyright,
}: any) {
	return (
		<footer className="overflow-x-hidden mt-auto flex-0 ">
			<div className="container">
				<div className="border-t-2 border-grey-500 mt-24 lg:mt-32 py-24 lg:py-32 grid grid-cols-12 gap-10">
					<div className="col-span-8">
						<p className="h3 mb-4">Have a project and want to collaborate?</p>

						<LinkUnderlineStyle
							title="Email Jack!"
							href={getInTouch}
							text={"Let's Jam Together"}
							className="h2 xl:text-[76px] !text-blue !font-bold"
							color="blue"
						/>
					</div>

					<div className="col-span-4 xl:col-span-3 xl:col-start-10 text-right">
						<p>
							<a className="text-lg font-semibold" href="/">
								Jack Whiting
							</a>
						</p>

						<p className="mt-3">
							<Link href={`mailto:${email}`}>{email}</Link>
						</p>

						<p className="mt-2">Nottingham, UK</p>

						<nav className="mt-4 flex items-center justify-end gap-6">
							{mastodon && (
								<Link href={mastodon}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 16 16"
									>
										<path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a4 4 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522q0-1.288.66-2.046c.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764q.662.757.661 2.046z" />
									</svg>
								</Link>
							)}

							{twitter && (
								<Link href={twitter}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-twitter-x"
										viewBox="0 0 16 16"
									>
										<path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
									</svg>
								</Link>
							)}
						</nav>

						<p className="text-sm mt-5">
							&copy; {new Date().getFullYear()}+. {copyright}
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
