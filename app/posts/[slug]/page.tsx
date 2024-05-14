import { getApiQuery } from "@/utils/getApiQuery.js"
import { SINGLE_POST_QUERY } from "@/queries/posts"

async function getData(params: any) {
  const { articlesEntries } = await getApiQuery(SINGLE_POST_QUERY, params)

  return articlesEntries[0]
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { title, rte, dateCreated, topics } = await getData({
    slug: params.slug,
  })

  return (
    <>
      <section className="container py-24 lg:pb-32">
        <h1 className="leading-tight font-normal h1 max-w-[1300px]">{title}</h1>
      </section>

      <div className="section container relative grid grid-cols-12 gap-24">
        <div className="sticky top-20 col-span-3">
          <h5>Table of Contents</h5>
        </div>

        <div
          className="col-span-6 col-start-4 rte rte--large rte--blog"
          dangerouslySetInnerHTML={{
            __html: rte,
          }}
        />
      </div>
    </>
  )
}
