import { getApiQuery } from "@/utils/getApiQuery.js"
import { HOME_QUERY } from "@/queries/home.js"
import HomeIntro from "@/components/Home/HomeIntro"
import FeaturedServices from "@/components/FeaturedServices"
import FeaturedProjects from "@/components/FeaturedProjects"
import FeaturedArticles from "@/components/FeaturedArticles"
import { SeoMatic, getMetadata } from "next-seomatic"

// Actually do the works.
async function getData() {
  const { homeEntries } = await getApiQuery(HOME_QUERY, {})

  return homeEntries[0]
}

// Meta Data
export async function generateMetadata() {
  const { seomatic } = await getData()

  return getMetadata(seomatic)
}

// Body of Page
export default async function Home() {
  const {
    homeIntro,
    featuredServices,
    featuredProjects,
    featuredArticles,
    seomatic,
  } = await getData()

  return (
    <>
      <div className="container">
        <HomeIntro {...homeIntro[0]} />
        <FeaturedProjects {...featuredProjects[0]} />
        <FeaturedServices {...featuredServices[0]} />
        <FeaturedArticles {...featuredArticles[0]} />
      </div>

      <SeoMatic
        metaJsonLdContainer={seomatic.metaJsonLdContainer}
        metaScriptContainer={seomatic.metaScriptContainer}
      />
    </>
  )
}
