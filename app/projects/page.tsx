import ProjectFullRow from "@/components/Projects/ProjectFullRow"
import {
  ALL_PROJECTS_QUERY,
  PAGINATED_PROJECTS_QUERY,
} from "@/queries/projects"
import { getApiQuery } from "@/utils/getApiQuery.js"
import { SeoMatic, getMetadata } from "next-seomatic"

async function getData(params: any) {
  const { totalProjects, worksEntries } = await getApiQuery(ALL_PROJECTS_QUERY)

  const { projectsEntries } = await getApiQuery(
    PAGINATED_PROJECTS_QUERY,
    params,
  )

  return {
    title: worksEntries[0].title,
    seomatic: worksEntries[0].seomatic,
    totalProjects: totalProjects,
    projectsEntries: projectsEntries,
  }
}

// Meta Data
export async function generateMetadata() {
  const { seomatic } = await getData({ offset: 0 })

  return getMetadata(seomatic)
}

const Page = async ({ searchParams }: { searchParams: { page: any } }) => {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1

  const { totalProjects, title, seomatic, projectsEntries } = await getData({
    offset: (page - 1) * 12,
  })

  return (
    <>
      <section className="py-24 lg:pb-48 container">
        <h1 className="leading-tight font-normal text-center">{title}</h1>
      </section>

      <section className="container">
        <div className="grid grid-cols-2 gap-x-28 gap-y-32">
          {projectsEntries.map((article: any, index: number) => {
            return <ProjectFullRow key={index} {...article} />
          })}
        </div>
      </section>

      <SeoMatic
        metaJsonLdContainer={seomatic.metaJsonLdContainer}
        metaScriptContainer={seomatic.metaScriptContainer}
      />
    </>
  )
}

export default Page
