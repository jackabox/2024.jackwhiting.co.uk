import { getApiQuery } from "@/utils/getApiQuery.js"
import { ALL_POSTS_QUERY, PAGINATED_POSTS_QUERY } from "@/queries/posts"
import ArticleRow from "@/components/Articles/ArticleRow"

async function getData(params: any) {
  const { articlesEntries: total } = await getApiQuery(ALL_POSTS_QUERY)
  const { articlesEntries } = await getApiQuery(PAGINATED_POSTS_QUERY, params)

  return {
    total: total.length,
    articlesEntries: articlesEntries,
  }
}

const Page = async ({ searchParams }: { searchParams: { page: any } }) => {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1

  const { total, articlesEntries } = await getData({
    offset: (page - 1) * 12,
  })

  return (
    <>
      <section className="py-24 lg:pb-32 container">
        <h1 className="leading-tight font-normal">Articles &amp; Tutorials</h1>
      </section>

      <section className="container grid grid-cols-3 gap-10 sm:gap-14 md:gap-20 lg:gap-28">
        {articlesEntries.map((article: any, index: number) => {
          return <ArticleRow key={index} {...article} />
        })}
      </section>
    </>
  )
}

export default Page
