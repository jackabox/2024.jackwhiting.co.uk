export const getApiQuery = async (query, variables = {}) => {
  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_API_URL, {
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    headers: {
      Authorization: `Bearer fAkEaPiKeYfAkEaPiKeYfAkEaPiKeYfAkEaPiKeY`,
      "Content-Type": "application/json",
    },
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data from API")
  }

  const json = await res.json()

  return json?.data
}
