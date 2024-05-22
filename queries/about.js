import { featuredServices } from "./shared"

export const ABOUT_QUERY = `
  query AboutQuery {
    aboutEntries {
      ... on about_Entry {
        ${featuredServices}
      }
    }
  }
`
