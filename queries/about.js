import { featuredServices, seomatic } from "./shared"

export const ABOUT_QUERY = `
  query AboutQuery {
    aboutEntries {
      ... on about_Entry {
        title
        aboutInfo {
          ... on aboutInfo_Entry {
          heading
          rte
          image {
            url
            width
            height
            alt
          }
        }
        }
        ${featuredServices}
        ${seomatic}
      }
    }
  }
`
