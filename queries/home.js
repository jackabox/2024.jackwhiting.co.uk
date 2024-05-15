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
      featuredArticles {
        ... on featuredArticles_Entry {
          heading
          summary
          articles {
            ... on article_Entry {
              title
              excerpt
              url
              topics {
                title
              }
              postDate @formatDateTime (format: "Y/m/d")
            }
          }
        }
      }
    }
  }
}

`
