import { getApiQuery } from "@/utils/getApiQuery.js"
import {
  ALL_PROJECTS_QUERY,
  PAGINATED_PROJECTS_QUERY,
} from "@/queries/projects"
import ProjectFullRow from "@/components/Projects/ProjectFullRow"

async function getData(params: any) {
  const { projectsEntries: total } = await getApiQuery(ALL_PROJECTS_QUERY)
  const { projectsEntries } = await getApiQuery(
    PAGINATED_PROJECTS_QUERY,
    params,
  )

  return {
    total: total.length,
    projectsEntries: projectsEntries,
  }
}

const Page = async ({ searchParams }: { searchParams: { page: any } }) => {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1

  const { total, projectsEntries } = await getData({
    offset: (page - 1) * 12,
  })

  return (
    <>
      <section className="py-24 lg:pb-32 container">
        <h1 className="leading-tight font-normal">Projects</h1>
      </section>

      <section className="container">
        <div className="divide-y-2 divide-grey-500">
          {projectsEntries.map((article: any, index: number) => {
            return <ProjectFullRow key={index} {...article} />
          })}
        </div>
      </section>
    </>
  )
}

export default Page
