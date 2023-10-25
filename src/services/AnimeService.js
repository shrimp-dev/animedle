const getDailyAnime = async () => {
  const res = await fetch(process.env.BASE_FETCH_URL + '/api/anime/daily')
  const { data } = await res.json()

  return data
}

export {
  getDailyAnime
}