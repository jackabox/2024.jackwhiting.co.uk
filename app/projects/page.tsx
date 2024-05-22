import ProjectFullRow from "@/components/Projects/ProjectFullRow"
import {
  ALL_PROJECTS_QUERY,
  PAGINATED_PROJECTS_QUERY,
} from "@/queries/projects"
import { getApiQuery } from "@/utils/getApiQuery.js"

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
      <section className="py-24 lg:pb-48 container">
        <h1 className="leading-tight font-normal text-center">
          Featured Projects
        </h1>
      </section>

      <section className="container">
        <div className="grid grid-cols-2 gap-x-28 gap-y-32">
          {projectsEntries.map((article: any, index: number) => {
            return <ProjectFullRow key={index} {...article} />
          })}
        </div>
      </section>
    </>
  )
}

export default Page
