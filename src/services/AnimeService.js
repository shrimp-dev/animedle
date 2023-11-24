
const getDailyAnime = async () => {
  const res = await fetch(process.env.BASE_FETCH_URL + '/anime/daily', { cache: 'no-store' })
  const { data } = await res.json()
  return data
}
const getAllAnime = async () => {
  
  const res = await fetch('http://localhost:3000/api/animes', { cache: 'no-store' })
  const { data } = await res.json()
  return data
}

export {
  getDailyAnime,
  getAllAnime
}