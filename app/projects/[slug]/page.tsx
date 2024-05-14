import { getApiQuery } from "@/utils/getApiQuery.js"
import { SINGLE_PROJECT_QUERY } from "@/queries/projects"
import FullVideo from "@/components/Projects/FullVideo"
import SimpleButton from "@/components/SimpleButton"

async function getData(params: any) {
  const { projectsEntries } = await getApiQuery(SINGLE_PROJECT_QUERY, params)

  return projectsEntries[0]
}

export default async function Page({ params }: { params: { slug: string } }) {
  const {
    title,
    video,
    projectType,
    projectServices,
    agencyName,
    agencyUrl,
    websiteUrl,
    date,
    overview,
  } = await getData({
    slug: params.slug,
  })

  return (
    <>
      <div className="py-24 lg:py-32 container">
        <p className="uppercase font-mono text-semibold tracking-wider small text-black/40">
          Projects
        </p>

        <div className="mt-4 flex justify-between items-center">
          <h1 className=" leading-tight font-normal">{title}</h1>

          <a
            href={websiteUrl}
            target="_blank"
            title="Visit website for this project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-16 h-16"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
            >
              <polyline points="10 9 15 4 20 9" />
              <path d="M4 20h7a4 4 0 0 0 4-4V4" />
            </svg>
          </a>
        </div>
      </div>

      <div className="py-24 bg-blue">
        <div className="container">
          {video ? <FullVideo url={video} /> : <></>}
        </div>
      </div>

      <div className="container my-24 flex justify-between gap-10">
        <div className="max-w-[768px]">
          <h3 className="font-normal mb-6">Overview</h3>
          <div
            className="rte rte--large"
            dangerouslySetInnerHTML={{ __html: overview }}
          />

          <SimpleButton
            url={websiteUrl}
            title="Visit website for this project"
            text="Visit Website"
            className="mt-10"
          />
        </div>

        <div className="w-1/3 grid grid-cols-2 gap-20">
          <div className="col-span-1">
            <h4 className="font-normal mb-6">Services</h4>

            <ul className="flex flex-col gap-4">
              {projectServices.map((type: any, index: number) => {
                return (
                  <li
                    className="tracking-wider text-sm font-mono uppercase"
                    key={index}
                  >
                    {type.title}
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-normal mb-6">Tools</h4>

            <ul className="flex flex-col gap-4">
              {projectType.map((type: any, index: number) => {
                return (
                  <li
                    className="tracking-wider text-sm font-mono uppercase"
                    key={index}
                  >
                    {type.title}
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-normal mb-6">Year</h4>

            <p className="tracking-wider text-sm font-mono uppercase">{date}</p>
          </div>

          {agencyName && agencyUrl && (
            <div className="col-span-1">
              <h4 className="font-normal mb-6">Partner</h4>

              <a
                href={`${agencyUrl}?ref=jackwhiting.co.uk`}
                target="_blank"
                rel="nofollow"
                className="text-blue inline-flex gap-2 items-center tracking-wider text-sm font-mono uppercase"
              >
                <span>{agencyName}</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 -mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
