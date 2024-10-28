export function getQueryParams(params: OptionalRecord<string, string>) {
  const searchParams = new URLSearchParams(window.location.search)

  Object.entries(params).forEach(([name, value]) => {
    if (value === undefined) return
    searchParams.set(name, value)
  })

  return `?${searchParams.toString()}`
}

export function addQueryParams(params: OptionalRecord<string, string>) {
  window.history.pushState({}, '', getQueryParams(params))
}
