import Game from "@/components/Game";
import { getDailyAnime } from "@/services/AnimeService";
import { Box } from "@mui/material";

export default async function Home() {
  const animeData = await getDailyAnime()

  return (
    <Box sx={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
      <Game type='standard' animeData={animeData}/>
    </Box>
  )
}
