export const HOME_QUERY = `
query HomeQuery {
  homeEntries {
    ... on home_Entry {
      title
      homeIntro {
        ... on homeIntro_Entry {
          multilineHeading
          rte
          heading
        }
      }
      featuredProjects {
        ... on featuredProjects_Entry {
          heading
          summary
          projects {
            ... on project_Entry {
              title
              projectDate
              url
              image {
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
      }
      featuredServices {
        ... on featuredServices_Entry {
          heading
          summary
          services {
            ... on Service_Entry {
              summary
              title
            }
          }
        }
      }
    }
  }
}
`
