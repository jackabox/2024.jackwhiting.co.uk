import { getApiQuery } from "@/utils/getApiQuery"
import Image from "next/image"

async function getData() {
  const data = await getApiQuery()

  return data
}

const Page = async () => {
  const data = await getData()

  return (
    <>
      <div className="grid grid-cols-2 gap-48 container py-24">
        <Image src="/me.jpg" alt="Picture of Jack" width="800" height="900" />

        <div className="pt-6 max-w-[600px]">
          <h2 className="mb-6">I'm Jack</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam earum
            nihil repudiandae vitae provident. Saepe laborum, aliquid ratione
            veniam distinctio!
          </p>
        </div>
      </div>
    </>
  )
}

export default Page
