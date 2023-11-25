import { Card, CardContent, Typography } from "@mui/material";


export default function GuessCard({animeData, isCorrect = false, correctAnimeData}) {

  if (isCorrect)
    return (
      <Card sx={{ bgcolor: 'primary.green', width: '100%', mt: '32px' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14,  mb: 1.5 }} gutterBottom>
            {/* {animeData.english} */}
          </Typography>
          <Typography sx={{ py: '8px' }}>
            Release Year #00
          </Typography>
          <Typography sx={{ py: '8px' }}>
            MyAnimeList Popularity #00
          </Typography>
          <Typography sx={{ py: '8px' }}>
            MyAnimeList Score #00
          </Typography>
          <Typography sx={{ py: '8px' }}>
            Information #00
          </Typography>
        </CardContent>
      </Card>
    )

  return (
    <Card sx={{ width: '100%', bgcolor: 'primary.red', mt: '32px'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14,  mb: 1.5 }} gutterBottom>
          {/* {animeData.english} */}
        </Typography>
        <Typography sx={{ py: '8px' }}>
          Release Year #00
        </Typography>
        <Typography sx={{ py: '8px' }}>
          MyAnimeList Popularity #00
        </Typography>
        <Typography sx={{ py: '8px' }}>
          MyAnimeList Score #00
        </Typography>
        <Typography sx={{ py: '8px' }}>
          Information #00
        </Typography>
      </CardContent>
    </Card>
  )
}