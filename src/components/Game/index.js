'use client'

import { Box, Button } from "@mui/material";
import Image from "next/image";
import ImageCarousel from "./ImageCarousel";
import { useState } from "react";
import { getImageByBase64 } from "@/services/ImageService";
import SearchBar from "./SearchBar";

const MOCK_IMAGE = 'https://i.imgur.com/ffKwR4e.gif'

export default function Game({type='standard', animeData, searchOptions}) {

  const [currentImage, setCurrentImage] = useState(0)
  const [guessLevel, setGuessLevel] = useState(0)

  const increaseGuessLevel = () => {
    if (guessLevel < 4) {
      const newGuessLevel = guessLevel + 1
      setGuessLevel(newGuessLevel)
      setCurrentImage(newGuessLevel)
    }
      
  }

  return (
    <Box sx={{backgroundColor: 'primary.black', width: '58%', minWidth: '350px', height:'calc(100vh - 64px)', 
              padding: '60px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column',
              boxShadow: '0px 0px 6px 0px #00000040'
            }}
    >
      <Box sx={{backgroundColor: 'primary.main', width: '100%', minHeight: '633px', padding: '20px', borderRadius: '4px', 
              display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', boxShadow: '0px 4px 4px 0px #00000040'
            }}
      >
        <Image 
          src={animeData.images ? getImageByBase64(animeData.images[currentImage]) : MOCK_IMAGE}
          sizes="100vw"
          width={50}
          height={50}
          style={{
            width: '100%',borderRadius: '4px', border: '1px solid var(--dark)', height: '450px'
          }}
          alt='What is the anime ?'
        />
        <ImageCarousel currentGuessImage={currentImage} guessNumber={guessLevel} handleChangeImageNumber={(newNumber)=>setCurrentImage(newNumber)}/>
      </Box>
      <Button onClick={increaseGuessLevel}>
        Aumentar
      </Button>
      <SearchBar searchOptions={searchOptions}/>
    </Box>
  )
}
