import { seomatic } from "./shared"

export const SINGLE_PROJECT_QUERY = `
  query ProjectsSingle($slug: [String]) {
    projectsEntries(slug: $slug) {
      ... on project_Entry {
        ${seomatic}
        title
        video
        agencyName
        agencyUrl
        date
        overview
        websiteUrl
        projectServices {
          title
        }
        projectType {
          title
        }
      }
    }
  }
`

export const ALL_PROJECTS_QUERY = `
  query AllProjects {
    totalProjects: entryCount(section: "projects")
    worksEntries {
      ... on projects_Entry {
        title
        ${seomatic}
      }
    }
  }
`

/**
 * requires $offset Integer param.
 */
export const PAGINATED_PROJECTS_QUERY = `
  query PaginatedProjects($offset: Int) {
    projectsEntries(orderBy: "postDate desc", offset: $offset, limit: 8) {
      ... on project_Entry {
        title
        date
        url
        video
        image(limit: 1) {
          url
          width
          height
          alt
        }
        projectType {
          title
        }
      }
    }
  }
`
