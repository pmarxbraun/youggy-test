const root = "https://swapi.dev/api/"

export async function fetchAssosications() {
  const response = await fetch(`${root}films/`)
  const movies = await response.json()
  return movies
}
