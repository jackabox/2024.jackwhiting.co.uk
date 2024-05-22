import FeaturedServices from "@/components/FeaturedServices"
import { getApiQuery } from "@/utils/getApiQuery"
import { ABOUT_QUERY } from "@/queries/about.js"
import Image from "next/image"

async function getData() {
  const { aboutEntries } = await getApiQuery(ABOUT_QUERY, {})

  return aboutEntries[0]
}

const Page = async () => {
  const { featuredServices } = await getData()

  return (
    <>
      <section className="py-24 lg:pb-48 container">
        <h1 className="leading-tight font-normal text-center">
          Behind the Keyboard
        </h1>
      </section>

      <div className="container">
        <section className="grid grid-cols-2 gap-48 py-24 lg:py-36">
          <Image src="/me.jpg" alt="Picture of Jack" width="800" height="900" />

          <div className="pt-6 max-w-[600px]">
            <h2 className="mb-6">I'm Jack</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              earum nihil repudiandae vitae provident. Saepe laborum, aliquid
              ratione veniam distinctio!
            </p>
          </div>
        </section>

        <FeaturedServices {...featuredServices[0]} showBorderBottom={false} />
      </div>
    </>
  )
}

export default Page
