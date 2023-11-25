
const getDailyAnime = async () => {
  const res = await fetch(process.env.BASE_FETCH_URL + '/daily', { cache: 'no-store' })
  const data = await res.json()

  return data
}

const getAllAnime = async () => {
  const res = await fetch(process.env.BASE_FETCH_URL + '/anime-list', { cache: 'no-store' })
  const data = await res.json()

  const SET_IDS = new Set()

  const formatData = data.map(x=> {
    if (SET_IDS.has(x['idx-id']))
      return null
    SET_IDS.add(x['idx-id'])

    return {
      id: x['idx-id'],
      romanji: x['idx-ro'],
      english: x['idx-en']
    }
  })

  return formatData.filter(x=> x !== null)
}

const getAnimeById = async (idAnime) => {
  try {
    const res = await fetch(`https://back-anime-dle.onrender.com/anime-info-by-id?id=${idAnime}`)
    const data = await res.json()
  
    return data
  } catch (err) {
    console.log(err)
    return null
  }
}

const saveGuess = async (animeId, guessCount, guessType = 'daily', correctAnswer) => {
  const currentDate = new Date()
  const formatDate = currentDate.toISOString().split('T')[0]

  const body = {
    "anime_id": animeId,
    "n_try": guessCount,
    "try_date": formatDate,
    "guess_type": guessType,
    "win": correctAnswer
  }

  try {
    const res = await fetch('https://back-anime-dle.onrender.com/save-guess',{
                              method: 'POST',
                              body: body
                            }) 
  } catch (err) {
    console.log(err)
  }
}

export {
  getDailyAnime,
  getAllAnime,
  getAnimeById
}