import { unified } from "unified"
import rehypeParse from "rehype-parse"
import rehypeStringify from "rehype-stringify"
import { visit } from "unist-util-visit"
import parameterize from "parameterize"

export const parsePostContent = (data) => {
	const toc = []
	const content = unified()
		.use(rehypeParse, {
			fragment: true,
		})
		.use(() => {
			return (tree) => {
				visit(tree, "element", function (node) {
					if (node.tagName === "h2" || node.tagName === "h3") {
						const id = parameterize(node.children[0].value)
						node.properties.id = id

						toc.push({
							id,
							title: node.children[0].value,
						})
					}
				})
			}
		})
		.use(rehypeStringify)
		.processSync(data)
		.toString()

	return {
		toc: toc,
		content: content,
	}
}
