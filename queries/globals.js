export const GLOBAL_QUERY = `
  query GlobalData {
    totalProjects: entryCount(section: "projects")
    footer: globalSet {
      ... on footer_GlobalSet {
        email
        mastodon
        copyright
        getInTouch
        twitter
      }
    }
  }
`
