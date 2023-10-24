import Game from "@/components/Game";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
      <Game type='standard'/>
    </Box>
  )
}
