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

export const ALL_POSTS_QUERY = `
  query AllArticles {
    articlesEntries {
      ... on article_Entry {
        id
      }
    }
  }
`

/**
 * requires $offset Integer param.
 */
export const PAGINATED_POSTS_QUERY = `
  query PaginatedArticles($offset: Int) {
    articlesEntries(offset: $offset, limit: 2) {
      ... on article_Entry {
        title
        excerpt
        url
        topics {
          title
        }
        dateCreated @formatDateTime (format: "Y/m/d")
      }
    }
  }
`
