import { Box } from "@mui/material";
import Image from "next/image";
import ImageCarousel from "./ImageCarousel";

const MOCK_IMAGE = 'https://i.imgur.com/ffKwR4e.gif'

export default function Game({type='standard'}) {
  return (
    <Box sx={{backgroundColor: 'primary.black', width: '66%', minWidth: '350px', height:'calc(100vh - 64px)', 
              padding: '32px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column',
            }}
    >
      <Box sx={{backgroundColor: 'primary.main', width: '100%', height: '633px', padding: '40px', borderRadius: '4px', 
              display: 'flex', flexDirection: 'column', gap: '16px'
            }}
      >
        <Image 
          src={MOCK_IMAGE}
          sizes="100vw"
          width={50}
          height={450}
          style={{
            width: '100%',borderRadius: '4px', border: '1px solid var(--dark)'
          }}
          alt='What is the anime ?'
        />
        <ImageCarousel currentGuessImage={2} guessNumber={3}/>
      </Box>
    </Box>
  )
}
