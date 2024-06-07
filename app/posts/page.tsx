import { getApiQuery } from "@/utils/getApiQuery.js"
import { ALL_POSTS_QUERY, PAGINATED_POSTS_QUERY } from "@/queries/posts"
import ArticleFeaturedCard from "@/components/Articles/ArticleFeaturedCard"
import Pagination from "@/components/Pagination"

async function getData(params: any) {
  const { totalArticles } = await getApiQuery(ALL_POSTS_QUERY)
  const { articlesEntries } = await getApiQuery(PAGINATED_POSTS_QUERY, params)

  return {
    total: totalArticles,
    articlesEntries: articlesEntries,
  }
}

const PostsPage = async ({ searchParams }: { searchParams: { page: any } }) => {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1

  const itemsPerPage = 12
  const { total, articlesEntries } = await getData({
    offset: (page - 1) * itemsPerPage,
  })
  const pageCount = Math.ceil(total / itemsPerPage)

  return (
    <>
      <section className="py-24 lg:pb-48 container">
        <h1 className="leading-tight font-normal text-center">
          Articles &amp; Tutorials
        </h1>
      </section>

      {/* Loop around our articles */}
      <section className="container max-w-[768px] space-y-10 md:space-y-14 lg:space-y-20 divide-y-2 divide-grey-500 pb-12">
        {articlesEntries.map((article: any, index: number) => {
          return <ArticleFeaturedCard key={index} {...article} />
        })}
      </section>

      {/* Add in our custom pagination component here, as we need to use client for it. */}
      <Pagination itemsPerPage={itemsPerPage} pageCount={pageCount} />
    </>
  )
}

export default PostsPage
