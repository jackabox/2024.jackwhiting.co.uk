import { SeoMatic, getMetadata } from "next-seomatic"
import { getApiQuery } from "@/utils/getApiQuery.js"
import { ALL_POSTS_QUERY, PAGINATED_POSTS_QUERY } from "@/queries/posts"
import ArticleFeaturedCard from "@/components/Articles/ArticleFeaturedCard"
import Pagination from "@/components/Pagination"

async function getData(params: any) {
  const { totalArticles, blogEntries } = await getApiQuery(ALL_POSTS_QUERY)
  const { articlesEntries } = await getApiQuery(PAGINATED_POSTS_QUERY, params)

  return {
    title: blogEntries[0].title,
    seomatic: blogEntries[0].seomatic,
    totalArticles: totalArticles,
    articlesEntries: articlesEntries,
  }
}

// Meta Data
export async function generateMetadata() {
  const { seomatic } = await getData({ offset: 0 })

  return getMetadata(seomatic)
}

const PostsPage = async ({ searchParams }: { searchParams: { page: any } }) => {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1

  const itemsPerPage = 12
  const { totalArticles, articlesEntries, title, seomatic } = await getData({
    offset: (page - 1) * itemsPerPage,
  })
  const pageCount = Math.ceil(totalArticles / itemsPerPage)

  return (
    <>
      <section className="py-24 lg:pb-48 container">
        <h1 className="leading-tight font-normal text-center">
          Articles &amp; Tutorials
        </h1>
      </section>

      {/* Loop around our articles */}
      <section className="container max-w-[768px] space-y-10 md:space-y-14 lg:space-y-20 divide-y-2 divide-grey-500 pb-12 -mt-8 lg:-mt-16">
        {articlesEntries.map((article: any, index: number) => {
          return <ArticleFeaturedCard key={index} {...article} />
        })}
      </section>

      {/* Add in our custom pagination component here, as we need to use client for it. */}
      <Pagination itemsPerPage={itemsPerPage} pageCount={pageCount} />

      <SeoMatic
        metaJsonLdContainer={seomatic.metaJsonLdContainer}
        metaScriptContainer={seomatic.metaScriptContainer}
      />
    </>
  )
}

export default PostsPage
