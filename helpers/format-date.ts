export const formatDate = (seconds: number) => {
  return new Date(seconds * 1000).toISOString().slice(14, 19)
}
