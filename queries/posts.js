export const SINGLE_POST_QUERY = `
  query Article($slug: [String]) {
    articlesEntries(slug: $slug) {
      ... on article_Entry {
        title
        rte
        topics {
          title
        }
        dateCreated @formatDateTime (format: "Y/m/d")
      }
    }
  }
`
