import { seomatic } from "./shared"

export const CONTACT_PAGE_QUERY = `
  query ContactPageQuery {
    contactEntries {
      ... on contact_Entry {
        title
        email
        rte
        mastodon
        twitter
        ${seomatic}
      }
    }
  }
`
