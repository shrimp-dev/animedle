import { Box, Card, CardContent, Divider, Typography } from "@mui/material"
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import SouthRoundedIcon from '@mui/icons-material/SouthRounded'
import NorthRoundedIcon from '@mui/icons-material/NorthRounded'

export default function GuessCard({animeData, isCorrect = false, correctAnimeData}) {

  console.log({
    animeData, correctAnimeData
  })

  if (isCorrect)
    return (
      <Card sx={{ bgcolor: 'primary.green', width: '100%', mt: '32px' }}>
        <CardContent>
          <Box sx={{ mb: 1.5}}>
            <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} gutterBottom>
              {correctAnimeData.EnglishName}
            </Typography>
            <Divider sx={{height: '2px', bgcolor: 'primary.white', borderColor: 'primary.white', borderRadius: '50px'}}/>
          </Box>
          <Typography sx={{ py: '8px', display: 'flex', alignItems: 'center', justifyContent:' space-between', mt: '8px'}}>
            Release Year: {correctAnimeData.Year}
          </Typography>
          <Typography sx={{ py: '8px', display: 'flex', alignItems: 'center', justifyContent:' space-between', mt: '8px'}}>
            MyAnimeList Popularity: {correctAnimeData.Popularity}
          </Typography>
          <Typography sx={{ py: '8px', display: 'flex', alignItems: 'center', justifyContent:' space-between', mt: '8px'}}>
            MyAnimeList Score: {correctAnimeData.MALScore}
          </Typography>
          <Typography sx={{ py: '8px' }}>
            Genres: {correctAnimeData.Genres.join(', ')}
          </Typography>
        </CardContent>
      </Card>
    )

  const SAME_GENRES = animeData.Genres.filter(x=> correctAnimeData.Genres.includes(x))
  
  const sameGenresText = SAME_GENRES.length > 0 ? SAME_GENRES.join(', ') : 'None'

  const RenderIcon = ({guessValue, correctValue}) => {
    if (guessValue > correctValue)
      return <SouthRoundedIcon />

    if (guessValue < correctValue)
      return <NorthRoundedIcon />

    return <CheckRoundedIcon/>
  } 

  return (
    <Card sx={{ width: '100%', bgcolor: 'primary.red', mt: '32px'}}>
      <CardContent>
        <Box sx={{ mb: 1.5}}>
          <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} gutterBottom>
            {animeData.EnglishName} 
          </Typography>
          <Divider sx={{height: '2px', bgcolor: 'primary.white', borderColor: 'primary.white', borderRadius: '50px'}}/>
        </Box>
        <Typography sx={{ py: '8px', display: 'flex', alignItems: 'center', justifyContent:' space-between', mt: '8px'}}>
          Release Year: {animeData.Year} 
          <RenderIcon correctValue={correctAnimeData.Year} guessValue={animeData.Year}/>
        </Typography>
        <Typography sx={{ py: '8px', display: 'flex', alignItems: 'center', justifyContent:' space-between', mt: '8px'}}>
          MyAnimeList Popularity: {animeData.Popularity}
          <RenderIcon correctValue={correctAnimeData.Popularity} guessValue={animeData.Popularity}/>
        </Typography>
        <Typography sx={{ py: '8px', display: 'flex', alignItems: 'center', justifyContent:' space-between', mt: '8px'}}>
          MyAnimeList Score: {animeData.MALScore}
          <RenderIcon correctValue={correctAnimeData.MALScore} guessValue={animeData.MALScore}/>
        </Typography>
        <Typography sx={{ py: '8px' }}>
          Same Genre: {sameGenresText}
        </Typography>
      </CardContent>
    </Card>
  )
}