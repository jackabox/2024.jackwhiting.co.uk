export const SINGLE_PROJECT_QUERY = `
  query ProjectsSingle($slug: [String]) {
    projectsEntries(slug: $slug) {
      ... on project_Entry {
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
