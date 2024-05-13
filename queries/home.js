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