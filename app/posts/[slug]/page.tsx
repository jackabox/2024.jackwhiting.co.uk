import { getApiQuery } from "@/utils/getApiQuery.js"
import { SINGLE_POST_QUERY } from "@/queries/posts"
import { parsePostContent } from "@/utils/parsePostContent"
import Tag from "@/components/Tag"

async function getData(params: any) {
  const { articlesEntries } = await getApiQuery(SINGLE_POST_QUERY, params)

  return articlesEntries[0]
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { title, rte, dateCreated, topics } = await getData({
    slug: params.slug,
  })

  const { toc, content } = await parsePostContent(rte)

  return (
    <>
      <section className="container py-24 lg:pb-48 text-center">
        <p className="mb-8 uppercase font-mono text-semibold tracking-wider  text-black/40">
          {dateCreated}
        </p>

        <h1 className="leading-tight font-normal h1 max-w-[1300px] mx-auto">
          {title}
        </h1>

        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          {topics.map((topic: any, index: number) => {
            return <Tag key={index} {...topic} />
          })}
        </div>
      </section>

      <div className="section container relative grid grid-cols-12 gap-24">
        <div className=" col-span-3">
          {toc.length > 0 && (
            <div className="sticky top-20">
              <h4 className="font-normal">Table of Contents</h4>
              <ol className="list-decimal list-inside mt-6 p">
                {toc.map(({ id, title }) => {
                  return (
                    <li
                      key={id}
                      className="mb-2 pb-2 border-b-2 border-grey-500"
                    >
                      <a
                        href={`#${id}`}
                        className=" w-full hover:text-blue transition-all duration-500"
                      >
                        {title}
                      </a>
                    </li>
                  )
                })}
              </ol>
            </div>
          )}
        </div>

        <div
          className="col-span-6 col-start-4 rte rte--large rte--blog"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </div>
    </>
  )
}
