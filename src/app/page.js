import Game from "@/components/Game";
import { getAllAnime, getDailyAnime } from "@/services/AnimeService";
import { Box } from "@mui/material";

export default async function Home() {
  const animeData = await getDailyAnime()
  const searchOptions = await getAllAnime()
  return (
    <Box sx={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Game type='standard' animeData={animeData} searchOptions={searchOptions}/>
    </Box>
  )
}
