import rehypeShiki from "@shikijs/rehype"
import parameterize from "parameterize"
import rehypeParse from "rehype-parse"
import rehypeStringify from "rehype-stringify"
import { unified } from "unified"
import { visit } from "unist-util-visit"

export const parsePostContent = async (data) => {
  const toc = []
  let content = await unified()
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
    .use(rehypeShiki, {
      theme: "catppuccin-latte",
    })
    .use(rehypeStringify)
    .process(data)

  return {
    toc: toc,
    content: content.value,
  }
}
