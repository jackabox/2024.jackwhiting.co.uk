import { getApiQuery } from "@/utils/getApiQuery"

async function getData() {
  const data = await getApiQuery()

  return data
}

const Page = async () => {
  const data = await getData()

  return <></>
}

export default Page
