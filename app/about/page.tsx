import FeaturedServices from "@/components/FeaturedServices"
import { getApiQuery } from "@/utils/getApiQuery"
import { ABOUT_QUERY } from "@/queries/about.js"
import AboutInfo from "@/components/About/AboutInfo"

async function getData() {
  const { aboutEntries } = await getApiQuery(ABOUT_QUERY, {})

  return aboutEntries[0]
}

const Page = async () => {
  const { title, aboutInfo, featuredServices } = await getData()

  return (
    <>
      <section className="py-24 lg:pb-48 container">
        <h1 className="leading-tight font-normal text-center">{title}</h1>
      </section>

      <div className="container">
        <AboutInfo {...aboutInfo[0]} />
        <FeaturedServices {...featuredServices[0]} showBorderBottom={false} />
      </div>
    </>
  )
}

export default Page
