export const GLOBAL_QUERY = `
  query GlobalData {
    totalProjects: entryCount(section: "projects")
  }
`
