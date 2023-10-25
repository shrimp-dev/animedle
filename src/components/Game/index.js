import { Box } from "@mui/material";
import Image from "next/image";
import ImageCarousel from "./ImageCarousel";

const MOCK_IMAGE = 'https://i.imgur.com/ffKwR4e.gif'

export default async function Game({type='standard'}) {
  const getData = async () => {
    const res = await fetch(process.env.BASE_FETCH_URL + '/api/anime/daily')
    const { data } = await res.json()

    return data
  }

  const animeData = await getData()

  const getImageBase64 = (base64) => {
    return 'data:image/jpeg;base64,' + base64
  }

  return (
    <Box sx={{backgroundColor: 'primary.black', width: '58%', minWidth: '350px', height:'calc(100vh - 64px)', 
              padding: '60px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column',
            }}
    >
      <Box sx={{backgroundColor: 'primary.main', width: '100%', minHeight: '633px', padding: '20px', borderRadius: '4px', 
              display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center'
            }}
      >
        <Image 
          src={animeData.images ? getImageBase64(animeData.images[4]) : MOCK_IMAGE}
          sizes="100vw"
          width={50}
          height={50}
          style={{
            width: '100%',borderRadius: '4px', border: '1px solid var(--dark)', height: 'auto'
          }}
          alt='What is the anime ?'
        />
        <ImageCarousel currentGuessImage={2} guessNumber={3}/>
      </Box>
    </Box>
  )
}
