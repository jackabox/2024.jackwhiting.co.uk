import { seomatic } from "./shared"

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
        ${seomatic}
      }
    }
  }
`

export const ALL_POSTS_QUERY = `
  query AllArticles {
    totalArticles: entryCount(section: "articles")
  }
`

/**
 * requires $offset Integer param.
 */
export const PAGINATED_POSTS_QUERY = `
  query PaginatedArticles($offset: Int) {
    articlesEntries(orderBy: "postDate desc", offset: $offset, limit: 12) {
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
`
