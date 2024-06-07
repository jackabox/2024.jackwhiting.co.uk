import FeaturedServices from "@/components/FeaturedServices"
import { getApiQuery } from "@/utils/getApiQuery"
import { ABOUT_QUERY } from "@/queries/about.js"
import AboutInfo from "@/components/About/AboutInfo"
import { SeoMatic, getMetadata } from "next-seomatic"

async function getData() {
  const { aboutEntries } = await getApiQuery(ABOUT_QUERY, {})

  return aboutEntries[0]
}

// Meta Data
export async function generateMetadata() {
  const { seomatic } = await getData()

  return getMetadata(seomatic)
}

const Page = async () => {
  const { title, aboutInfo, featuredServices, seomatic } = await getData()

  return (
    <>
      <section className="py-24 lg:pb-48 container">
        <h1 className="leading-tight font-normal text-center">{title}</h1>
      </section>

      <div className="container">
        <AboutInfo {...aboutInfo[0]} />
        <FeaturedServices {...featuredServices[0]} showBorderBottom={false} />
      </div>

      <SeoMatic
        metaJsonLdContainer={seomatic.metaJsonLdContainer}
        metaScriptContainer={seomatic.metaScriptContainer}
      />
    </>
  )
}

export default Page
