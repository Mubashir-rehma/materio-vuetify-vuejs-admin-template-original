export const buildURL = (url: string) => {
  const host = window.location.origin

  return `${host}${import.meta.env.VITE_API_BASE_URL}/${url}`
}
