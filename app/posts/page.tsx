import { getApiQuery } from "@/utils/getApiQuery.js"
import { ALL_POSTS_QUERY, PAGINATED_POSTS_QUERY } from "@/queries/posts"
import ArticleFeaturedCard from "@/components/Articles/ArticleFeaturedCard"

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
    offset: (page - 1) * 2,
  })

  return (
    <>
      <div className="grid grid-cols-12 gap-10 sm:gap-14 sm:gap-20 lg:gap-28 mt-20">
        {articlesEntries.map((article: any, index: number) => {
          return <ArticleFeaturedCard key={index} {...article} />
        })}
      </div>
    </>
  )
}

export default Page
