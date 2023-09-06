export const buildURL = (url: string) => {
  return `${import.meta.env.VITE_API_BASE_URL ?? '/api'}/${url}`
}
